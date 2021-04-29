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

function summer() {
  return aDate.isBefore(plan.summerStart) || aDate.isAfter(plan.summerEnd);
}
function summerCharge() {
  return quantity * plan.summerRate;
}
function regularCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
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

- 여러 조건식에 하나의 조건만족식을 쓰고 있음? 조건식을 합쳐라.
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
- 조건 하나 하나씩 return문으로 걸러서 내보내라.

---

## 04. Replace Conditional with Polymorphism

### 조건부 로직을 다형성으로 바꾸기

```js
function plumage () {
  switch (bird.type) {
    case 'eroup':
      return 'normal';
  case 'afreeca':
    return bird.numberOfCoconuts > 2 ? 'tired' : 'normal';
  default:
    return 'i dont know';
}
function velocity () {
  switch (bird.type) {
    case 'eroup':
      return 20
  case 'afreeca':
    return 30
  default:
    return null
}
```

```js
class EuropeanSwallow {
  get plumage() {
    return 'normal';
  }
  get velocity() {
    return 20;
  }
}

class AfricanSwallow {
  get plumage() {
    return this.numberOfCoconuts > 2 ? 'tired' : 'normal';
  }
  get velocity() {
    return 30;
  }
}
```

- 아무 조건문이나 막 다형성 쓰지마라.
- 하나의 조건(타입)으로 여러 동작을 구분하면서 복잡할 때 써라.
- #1 클래스 하나 만들어서 함수들 집어 넣고
- #2 서브클래스 만들어서 조건별 함수 구현하고
- #3 타입별 서브클래스의 인스턴스를 바노한하는 팩토리함수 만들어라.

---

## 05. Introduce Special Case

### 특이 케이스 추가하기

- 특이 케이스를 위한 클래스 하나 만들어라.
- 앞의 리팩토링과 큰 의미 없어서 생략한다.

---

## 06. Introduce Assertion

### 어서션 추가하기

- 특정 조건이 참인 경우만 동작하는 코드 영역이 있을 것 이다.
- 거기에 assert 써봐라 좋다.(Library, console.assert)

---

## 06. Replace Control Flag with Break

### 제어 플래그를 탈출문으로 바꾸기

```js
for (const p of people) {
  if (!found) {
    if (p === 'joker') {
      sendAlert();
      fount = true;
    }
  }
}
```

```js
for (const p of people) {
  if (p === 'joker') {
    sendAlert();
    break;
  }
}
```

- 반목문에서 Flag 값 사용말고, return break 사용해라.
