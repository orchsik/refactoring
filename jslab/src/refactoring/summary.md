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
- 새로운 추상 개념으로 격상되어 코드의 그림을 다시 그릴 수 있어 효과가 좋다..
