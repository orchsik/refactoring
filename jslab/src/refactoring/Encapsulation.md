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
