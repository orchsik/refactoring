class TelephoneNumber {
  get areaCode() {
    return this._areaCode;
  }
  set areaCode(aString) {
    this._areaCode = aString;
  }

  get number() {
    return this._number;
  }
  set number(aString) {
    this._number = aString;
  }

  toString() {
    return `(${this.areaCode}) ${this.number}`;
  }
}

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(aString) {
    this._telephoneNumber.number = aString;
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(aString) {
    this._telephoneNumber.areaCode = aString;
  }

  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
}
