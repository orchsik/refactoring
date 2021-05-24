const EventEmitter = require('events');
const util = require('util');

function Greeter() {
  EventEmitter.call(this); // inherit는 prototype method만 상속해줌.
  this.greeting = 'Hello world!';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function (data) {
  console.log(this.greeting, data);
  this.emit('greet', data);
};

const greeter1 = new Greeter();

greeter1.on('greet', function (data) {
  console.log('someone greeted!', data);
});

greeter1.greet('KHC');
