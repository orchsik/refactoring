## 01. Encapsulate Record

### 레코드 캡슐화하기

```js
const organization = { name: '뽀로로', country: 'korea' };
```

```js
class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get country() {
    return this._country;
  }
  set country(arg) {
    this._country = arg;
  }
}
```

- 레코드는 가변, 불변 데이터 구분하여 저장하기 어려움.
- 따라서 가변 데이터가 있는 경우 캡슐화 선호

---

## 02. Encapsulate Collection

### 컬렉션 캡슐화하기

```js
class Person {
  get course() {
    return this._courses;
  }

  set course(aList) {
    this._courses = aList;
  }
}
```

```js
class Person {
  get course() {
    return this._course.slice();
  }
  set course(aList) {
    this._course = aList.slice();
  }

  addCourse(aCourse) {}

  removeCourse(aCourse) {}
}
```

- 컬렉션 게터, 세터는 새로운 컬렉션을 사용하게 해라.
- 클라이언트가 실수로 컬렉션을 바꿀 가능성을 차단해야 한다.
- 세터를 사용하지않고 클래스의 적절한 메서드를 사용하게 하면 더욱 캡슐화 가능.

---

## 03. Replace Primitive with Object

### 기본형 객체로 바꾸기

```js
orders.filter((o) => o.priority === 'high' || o.priority === 'rush');
```

```js
orders.filter((o) => o.priority.higherThan(new Priority('normal')));
```

- 단순한 출력 이상의 기능이 필요해지는 순간, 그 데이터를 표현하는 전용 클래스를 정의해라.
- 나중에 동작이 필요해지면 이 클래스에 추가하면 되니 프로그램이 커질수록 유용하다.

---

## 04. Replace Temp with Query

### 임시 변수를 질의 함수로 바꾸기

```js
const basePrice = this._quantity * this._itemPrice;
if (basePrice > 1000) {
  return basePrice * 0.95;
} else {
  return basePrice * 0.98;
}
get basePrice() { this._quantity * this._itemPrice }
```

```js
get basePrice() { this._quantity * this._itemPrice }

// ...

if (basePrice > 1000) {
  return basePrice * 0.95;
} else {
  return basePrice * 0.98;
}
```

---

## 05. Extract Class

### 클래스 추출하기

```js
class Person {
  get officeAreaCode() {
    return this._officeAreaCode;
  }

  get officeNumber() {
    return this._officeNumber;
  }
}
```

```js
class Person {
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }
}

class TelephoneNumber {
  get areaCode() {
    return this._areaCode;
  }

  get number() {
    return this._number;
  }
}
```

- 메서드와 데이터가 너무 많은 클래스는 이해하기 쉽지 않으니 잘 살펴보고 적절히 분리하는 것이 좋다.

---

## 06. Inline Class

### 클래스 인라인하기

```js
class TelephoneNumber {
  get areaCode() {
    return this._areaCode;
  }
  get number() {
    return this._number;
  }
}

class Person {
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
}
```

```js
class Person {
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  get officeNumber() {
    return this._officeNumber;
  }
}
```

- [5] 클래스 추출하기를 거꾸로 돌리는 리팩토링
- 더 이상 제 역할을 못 해서 그대로 두면 안 되는 클래스는 인라인 해라.

---

## 07. Hide Delegate

### 위임 숨기기

```js
const manager = aPerson.department.manager;
```

```js
class Person {
  get department() {
    // return ...
  }

  get manager() {
    return this.department.manager;
  }
}

const manager = aPerson.manager;
```

- 캡슐화가 잘 되어 있다면 무언가를 변경해야 할 때,
- 함께 고려해야 할 모듈 수가 적어져서 코드를 변경하기 쉽다.
- 예, 위임 객체의 인터페이스가 바뀌면 모든 클라이언트 코드 수정이 필요하다.
- 이런 의존성을 없애려면 서버 자체에 위임 메서드를 만들어서 위임 객체의 존재를 숨기면 된다.

---

## 08. Remove Middle Man

### 중개자 제거하기

```js
class Person {
  get department() {
    // return ...
  }

  get manager() {
    return this.department.manager;
  }
}

const manager = aPerson.manager;
```

```js
const manager = aPerson.department.manager;
```

- [7] 위임숨기기 거꾸로.
- 지나친 캡슐화로 클래스가 중개 역할만 하는 경우 되돌려라.

---

## 09. Subsitute Algorithm

### 알고리즘 교체하기

```js
function foundPersion(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Done') {
      return 'Don';
    }
    if (people[i] === 'Jone') {
      return 'Jone';
    }
    if (people[i] === 'Kent') {
      return 'Kent';
    }
  }
  return '';
}
```

```js
function foundPersion(people) {
  const candidates = ['Done', 'John', 'Kent'];
  return people.find((p) => candidates.includes(p)) || '';
}
```

- 그냥 더 간결하면 바꾸라는 말.
