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
