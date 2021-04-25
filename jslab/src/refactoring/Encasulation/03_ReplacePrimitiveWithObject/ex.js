class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority.toString();
  }

  set priority(aString) {
    this._priority = aString;
  }
}

/**
 * 클라이언트
 */
const orders = [];
for (const _ of new Array(10)) {
  orders.push(new Order({ priority: 'hight' }));
}

const highPriorityCount = orders.filter(
  (o) => o.priority === 'hight' || o.priority === 'rush'
).length;

console.log(highPriorityCount);
