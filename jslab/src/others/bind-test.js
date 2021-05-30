// const testX = {
//   getX: function (a = '', b = '', c = '') {
//     return `${this.x} - ${a} / ${b} / ${c}`;
//   },
// };

// console.log(testX.getX());
// console.log(testX.getX());

// const bindX = testX.getX.bind({ x: 'xxx' });
// console.log('\n');
// console.log(bindX());
// console.log(bindX());

// const callX = testX.getX.call({ x: 'xxx' }, 'A', 'B', 'C');
// console.log('\n');
// console.log(callX);
// console.log(callX);

// const applyX = testX.getX.apply({ x: 'xxx' }, ['A', 'B', 'C']);
// console.log('\n');
// console.log(callX);
// console.log(callX);

/**
 * function
//  */
// const testX = (a = '', b = '', c = '') => {
//   return `${this.x} - ${a} / ${b} / ${c}`;
// };

// console.log(testX());
// console.log(testX());

// const bindX = testX.bind({ x: 'xxx' });
// console.log('\n');
// console.log(bindX());
// console.log(bindX());

// const callX = testX.call({ x: 'xxx' }, 'A', 'B', 'C');
// console.log('\n');
// console.log(callX);
// console.log(callX);

// const applyX = testX.apply({ x: 'xxx' }, ['A', 'B', 'C']);
// console.log('\n');
// console.log(callX);
// console.log(callX);

const arrowFunction = () => {
  console.log(this);
  console.log(this.x);
};
a.bind({ x: 'xxx' }); // undefined

function defaultFunction() {
  console.log(this);
  console.log(this.x);
}
b();
b.call({ x: 'xxx' }); /// xxx
