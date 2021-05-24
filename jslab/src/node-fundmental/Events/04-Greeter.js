'use strict';

const EventEmitter = require('events');

module.exports = class Greeter extends EventEmitter {
  constructor() {
    super(); // inherit all property and method.
    this.greeting = 'Hellow world!';
  }
  greet(data) {
    console.log(this.greeting, data);
    this.emit('greet', data);
  }
};

// function Greeter() {
//   EventEmitter.call(this);
//   this.greeting = 'Hello world!';
// }
// util.inherits(Greeter, EventEmitter);
// Greeter.prototype.greet = function (data) {
//   console.log(this.greeting, data);
//   this.emit('greet', data);
// };
