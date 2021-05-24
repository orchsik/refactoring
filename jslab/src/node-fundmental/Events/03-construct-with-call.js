const util = require('util');

function Person() {
  this.firstname = 'kim';
  this.lastname = 'hc';
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.firstname} ${this.lastname}`);
};

function Policeman() {
  Person.call(this); //
  this.badgenumber = '1234';
}

util.inherits(Policeman, Person);

const officer = new Policeman();
officer.greet(); // Hello undefined undefined
