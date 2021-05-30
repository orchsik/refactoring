const testX = {
  getX: function (a = '', b = '', c = '') {
    return `${this.x} - ${a} / ${b} / ${c}`;
  },
};

/**
 * this = {} 이기 때문에 제대로된 값을 볼 수 없음.
 */
console.log(testX.getX());

/**
 * bind() 메소드가 호출되면 새로운 함수를 생성합니다.
 * 받게되는 첫 인자의 value로는 this 키워드를 설정하고,
 * 이어지는 인자들은 바인드된 함수의 인수에 제공됩니다.
 */
const bindX = testX.getX.bind({ x: 'xxx' });
console.log(bindX());
console.log('\r');

/**
 * call() 메소드는 주어진 this 값 및 각각
 * 전달된 인수와 함께 함수를 호출합니다.
 */
const callX = testX.getX.call({ x: 'xxx' }, 'A', 'B', 'C');
console.log(callX);
console.log('\r');

/**
 * apply() 메소드는 주어진 this 값 및 각각
 * 전달된 인수배열과 함께 함수를 호출합니다.
 */
const applyX = testX.getX.apply({ x: 'xxx' }, ['A', 'B', 'C']);
console.log(callX);
console.log('\r');

/**
 * arrow function 은
 * this가 lexical scope 를 반영함으로 사용못함
 */
// const arrowFunction = () => {
//   console.log(this);
//   console.log(this.x);
// };
// a.bind({ x: 'xxx' }); // undefined

// function defaultFunction() {
//   console.log(this);
//   console.log(this.x);
// }
// b.call({ x: 'xxx' }); /// xxx
