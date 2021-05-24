'use strict';

// function Person(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }
// Person.prototype.greet = function () {
//   console.log(`Hello ${this.firstname} ${this.lastname}`);
// };

/**
 * Javascript Class: beyond Sugar Syntax...
 */
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  }
}

const hc = new Person('kim', 'hc');
hc.greet();

var hj = new Person('kim', 'hj');
hj.greet();

console.log(hc.__proto__);
console.log(hj.__proto__);
console.log(hc.__proto__ === hc.__proto__);
