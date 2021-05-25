'use strict';

const Events = require('events');

module.exports = class Greeter extends Events {
  constructor() {
    super(); // inherit all property and method.
    this.greeting = 'Hellow world!';
  }
  greet(data) {
    console.log(this.greeting, data);
    this.emit('greet', data);
  }
};

// module.exports = function Greeter() {
//   Events.call(this);
//   this.greeting = 'Hello world!';
// }
// util.inherits(Greeter, Events);
// Greeter.prototype.greet = function (data) {
//   console.log(this.greeting, data);
//   this.emit('greet', data);
// };
