## 01. Decompose Conditional

### 조건문 분해하기

```js
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
  charge = quantity * plan.summerRate;
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
```

```js
if (summer()) {
  charge = summerCharge();
} else {
  charge = regularCharge();
}
```

- 거대한 코드 블록이 주어지면 코드를 부위별로 분해해라.
- 그리고 각 덩어리의 의도를 살린 이름의 함수 호출로 바꿔라.
- 조건식, 조건 만족식을 별도로 함수로 추출해라.
