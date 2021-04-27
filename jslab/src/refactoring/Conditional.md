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

---

## 02. Consolidate Conditional

### 조건문 통합하기

```js
if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;
```

```js
function isNotEligibleForDisablity() {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  );
}

if (isNotEligibleForDisablity()) {
  return 0;
}
```

- 조건식이 다르지만 조건만족식이 동일한 경우 합쳐라.
- 조건식이 명확해지고, 함수추출을 할 수 있다.

---

## 03. Replace Nested Conditional with Guard Clauses

### 중첩 조건문을 보호 구문으로 바꾸기

```js
function getPayAmount() {
  let result;
  if (isDead) {
    result = deadAmount();
  } else {
    if (isSeparated) {
      result = separatedAmount();
    } else {
      if (isRetired) {
        result = retiredAmount();
      } else {
        result = normalPayAmount();
      }
    }
  }
  return result;
}
```

```js
function getPayAmount() {
  if (ieDead) {
    return deadAmount();
  }
  if (isSeparated) {
    return separatedAmount();
  }
  if (isRetired) {
    return retiredAmount();
  }
  return normalPayAmount();
}
```

- 조건식이 복잡하면 잘 안 보인다.
- 조건 하나하나씩 return문으로 걸러라.
