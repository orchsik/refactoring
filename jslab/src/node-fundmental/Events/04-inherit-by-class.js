'use strict';

const Greeter = require('./04-Greeter');

const greeter1 = new Greeter();

greeter1.on('greet', function (data) {
  console.log('someone greeted!', data);
});

greeter1.greet('KHC');
