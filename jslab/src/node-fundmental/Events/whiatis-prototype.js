const adsf = require('util');

const person = {
  firstname: '',
  lastname: '',
  greet: function () {
    return this.firstname + ' ' + this.lastname;
  },
};

const john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

const jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());
