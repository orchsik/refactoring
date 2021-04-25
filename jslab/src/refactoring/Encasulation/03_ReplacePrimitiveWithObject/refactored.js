class Priority {
  constructor(value) {
    if (value instanceof Priority) {
      return value;
    }

    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }

  toString() {
    return this._value;
  }

  equals(other) {
    return this._index === other._index;
  }

  higherThan(other) {
    return this._index > other._index;
  }

  lowerThan(other) {
    return this._index < other._index;
  }
}

class Order {
  constructor(data) {
    this._priority = new Priority(data.priority);
  }

  get priority() {
    return this._priority;
  }

  get priorityString() {
    return this._priority.toString();
  }

  set priorityString(aString) {
    this._priority = new Priority(aString);
  }
}

/**
 * 클라이언트
 */
const orders = [];
for (const _ of new Array(10)) {
  orders.push(new Order({ priority: 'high' }));
}

const highPriorityCount = orders.filter((o) => {
  return o.priority.higherThan(new Priority('normal'));
}).length;

console.log(highPriorityCount);
