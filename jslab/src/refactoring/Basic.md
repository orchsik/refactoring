## 01. Extract Function

### 함수 추출하기

```js
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstaing();

  // 세부사항 출력
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
}
```

```js
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstaing();
  printDetails(outstanding);

  function printDetails(outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
  }
}
```

---

## 02. Inline Function

### 함수 인라인하기

```js
function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}
```

```js
function getRating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}
```

---

## 03. Extract Variable

### 변수 추출하기

```js
// 가격(price) = 기본 가격 - 수량 할인 + 배송비
return (
  order.quantity * order.itemPrice -
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
  Math.min(order.qunatity * order.itemPrice * 0.1, 100)
);
```

```js
const basePrice = order.qunatity * order.itemPrice;
const quantityDiscount =
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
const shipping = Math.min(basePrice * 0.1, 100);
return basePrice - quantityDiscount + shipping;
```

---

## 04. Inline Variable

### 변수 인라인하기

```js
let basePrice = anOrder.basePrice;
```

return basePrice > 1000;

```js
return anOrder.anOrder > 1000;
```

---

## 05. Change Function Declaration

### 함수 선언 바꾸기

```js
function circum(radius) {
    ...
}
```

```js
function circumference(radius) {
   ...
}
```

---

## 06. Encapsule Variable

### 변수 캡슐화하기

```js
let defaultOwner = {
  firstname: '마틴',
  lastName: '파울러',
};
```

```js
let defaultOwnerData = {
  firstname: '마틴',
  lastName: '파울러',
};
export function defaultOwner() {
  return defaultOwnerData;
}
export function setDefaultOnwer(arg) {
  defaultOwner = args;
}
```

---

## 07. Rename Variable

### 변수 이름 바꾸기

- 고심해서 잘 지으라는 말 밖에 없음.

---

## 08. Introduce Parameter Object

### 매개변수 객체 만들기

```js
function amountInvoiced(startDate, endDate) { ... }
```

```js
function amountInvoiced(aDateRange) { ... }
```

- 함수의 매개변수가 여러개인 경우, 데이터 구조를 만들 수 있으면 하나로 모아준다.
- 매개변수가 줄어들고, 가시성이 확보 된다.
- 더욱 효과적인 점은 데이터 구조에 담길 데이터에 공통으로 적용되는 동작을 추출해서 함수로 만들 수 있다.
- 새로운 추상 개념으로 격상되어 코드의 그림을 다시 그릴 수 있어 효과가 좋다.

---

## 09. Combine Functions Class

### 여러 함수를 클래스로 묶기

```js
function base(aReading) { ... }
function taxableCharge(aReading) { ... }
function calculateBaseCharge(aReading) { ... }
```

```js
class Reading {
  base() { ... }
  taxableCharge() { ... }
  calculateBaseCharge() { ... }
}
```

- 흔히 함수 호출 시 인수로 전달되는 데이터를 중심으로 긴밀하게 엮여 작동하는 함수 무리를 발견하면 클래스로 묶어라.
- 클래스로 묶으면 클라이언트가 객체의 핵심 데이터를 변경할 수 있고, 파생 객체들을 일관되게 관리할 수 있다.

---

## 10. Combine Functions into TransForm

### 여러 함수를 변환 함수로 묶기

```js
function base(aReading) { ... }
function taxableCharge(aReading) { ... }
```

```js
function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading);
  aReading.baseCharge = base(aReading);
  aReading.taxableCharge = base(aReading);
  return aReading;
}
```

- 여러 함수를 클래스로 묶기와 동일한 목적으로 사용.
- 단, 이 방식은 클라이언트가 데이터 변경시 데이터 일관성이 깨진다.

---

## 11. Split Phase

### 단계 쪼개기

```js
const orderdata = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split('-')[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;
```

```js
const orderRecord = parseOrder(order);
const orderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
  const values = aString.split(/\s+/);
  return {
    productID: values[0].split('-')[1],
    quantity: parseInt(values[1]),
  };
}

function price(order, priceList) {
  return order.quantity * priceList[order.productID];
}
```

- 서로 다른 두 대상을 한꺼번에 다루는 코드를 발견하면 각각을 별개의 모듈로 나눠라.
- 수정해야 할 때 두 대상을 동시에 생각할 필요 없이 하나에만 집중할 수 있다.
