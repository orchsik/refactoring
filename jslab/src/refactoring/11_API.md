## 01. Seperate Query from Modifier

### 질의 함수(ONLY READ)와 변경 함수 분리하기

```js
function getTotalOutstandingAndSendBill() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  sendBill();
  return result;
}
getTotalOutstandingAndSendBill();
```

```js
function totalOutStanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  emailGateway.send(formatBill(customer));
}

totalOutStanding();
sendBill();
```

- 질의 함수에서 다른 어떤 짓도 하지마라.
- 그래야 테스트도 편하고, 호출 위치 변경도 편하다. 한마디로 쓸 때 신경쓸거리가 줄어든다.

---

## 02. Parameterize Function

### 함수 매개변수화하기

```js
function tenPercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1);
}
function fivePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05);
}
```

```js
function raise(aPerson, factor) {
  aPerson.salary.multiply(1 + factor);
}
```

- 단지 리터럴 값만 다르다면 합쳐라
- 매개변수 값만 바꿔서 여러 곳에서 쓸 수 있으니 유용성이 커진다.

---

## 03. Remove Flag Argument

### 플래그 인수 제거하기

```js
function bookConcert(aCustomer, isPremium) {
  if (isPremium) {
    // 프리미엄 예약용 로직
  } else {
    // 일반 예약용 로직
  }
}
```

```js
function premiumBookConcert(value) {
  // 프리미엄 예약용 로직
}
function regularBookConcert(value) {
  // 일반 예약용 로직
}
```

- 플래그 인수가 있으면 함수들의 기능 차이가 안 보임.
- 플래그 인수로 어떤 값 넘겨야 하는지도 헷갈림.
- true, false, 1, 0 ... 등등 이 따위 플래그 인수 쓰지마라.

---

## 04. Preserve Whole Object

### 객체 통째로 넘기기

```js
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (aPlan.withinRange(low, high)) {
}
```

```js
if (aPlan.withinRange(aRoom.daysTempRange)) {
}
```

- 레코드를 통재로 넘겨야 변화에 대응하기 쉽다.
