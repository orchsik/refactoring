function Emitter() {
  this.events = {};
}

/**
 * @param {*} type
 * @param {*} listener  The code that responds to an event.
 */
Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach((listener) => {
      listener();
    });
  }
};

module.exports = Emitter;
