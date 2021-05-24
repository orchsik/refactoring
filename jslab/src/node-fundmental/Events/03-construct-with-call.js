const util = require('util');

function Person() {
  this.firstname = 'kim';
  this.lastname = 'hc';
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.firstname} ${this.lastname}`);
};

function Policeman() {
  // 모든 property와 method를 사용하기위해.
  // inherit는 prototype method만 상속해줌.
  Person.call(this);
  this.badgenumber = '1234';
}

util.inherits(Policeman, Person);

const officer = new Policeman();
officer.greet(); // Hello undefined undefined
