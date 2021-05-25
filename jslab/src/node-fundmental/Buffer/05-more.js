var result;
var buffer = Buffer.alloc(16);
var santa = '🎅';

// 너 Buffer니?
console.log(Buffer.isBuffer(santa)); // false

// write할 때, 필요한 Buffer 크기
console.log(Buffer.byteLength(santa)); // 4

// 버퍼 전체 크기
console.log(buffer.length); // 16

/**
 * buffer.copy(target, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
 */
var myHome = Buffer.alloc(24);
result = myHome.write('Merry Christmas!', 'utf8');
console.log(result); // 16

var santa_buffer = Buffer.from(santa, 'utf-8');
result = santa_buffer.copy(myHome, 16);
console.log(result); // 4

console.log(myHome.toString('utf8', 0, 16 + 4));
// Merry Christmas!🎅

/**
buffer.slice(start, end=buffer.length)
Array.prototype.slice와 비슷하다.
단! slice의 return값이 새로운 객체가 아니라 동일 객체다.
수정하면 원본 Buffer도 수정된다.
*/
var father = myHome.slice(16, 20);
console.log(father.toString()); // 🎅

father.write('👨');
console.log(father.toString()); // 👨
console.log(myHome.toString()); // Merry Christmas!👨
