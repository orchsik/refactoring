const Emitter = require('events');
// const Emitter = require('./emitter');

const eventConfig = require('./config').events;

const emtr = new Emitter();

/**
 * this is bad because it makes it easy for a typo to cause a bug,
 * and hard for tools to help us find it.
 */
// emtr.on('greet', function () {
//   console.log('Somewhere, some said hello');
// });

emtr.on(eventConfig.GREET, function () {
  console.log('Somewhere, some said hello');
});

emtr.on(eventConfig.GREET, function () {
  console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);
