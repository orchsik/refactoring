class Person {
  constructor() {}

  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }

  get officeNumber() {
    return this._officeNumber;
  }
  set officeNumber(aString) {
    this._officeNumber = aString;
  }

  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(aString) {
    this._officeAreaCode = aString;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
}
