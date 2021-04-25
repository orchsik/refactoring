const { cloneDeep } = require('lodash');

/**
 * 레코드 필드값이 변경 될 가능성이 있다면
 * 반드시 클래스로 캡슐화 시켜서 사용해야 데이터 정합성을 보장할 수 있다.
 */

const rawData = {
  name: 'khc',
  age: 31,
};

class A {
  constructor(data) {
    // this._data = cloneDeep(data);
    this._name = data.name;
    this._age = data.age;
  }
  get name() {
    return this._name;
  }
  set name(aString) {
    return (this._name = aStringastring);
  }
  get age() {
    return this._age;
  }
  set age(aNumber) {
    return (this._age = aNumber);
  }
}

const a = new A(rawData);

const getData = () => {
  return a;
};

console.log({ a: getData() });

rawData.age = 999;

const statement = `i am ${getData().name}.(${getData().age})`;
console.log({ statement });

console.log({ rawData });

// module.exports = {
//   rawData,
// };
