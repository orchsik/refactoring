var _log = (a) => console.log(a);
var result;
var buffer = Buffer.alloc(16);
var santa = '🎅';

// 너 Buffer냐?
_log(Buffer.isBuffer(santa)); // false

// 필요한 Buffer 크기
_log(santa.length); // 2
_log(Buffer.byteLength(santa)); // 4

// 버퍼 전체 크기
_log(buffer.write(santa)); // 4
_log(buffer.length); // 16

/**
 * buffer.copy(target, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
 */
var myHome = Buffer.alloc(24);
result = myHome.write('Merry Christmas!', 'utf8');
_log(result); // 16
// merry christmas!
// 1234567890123456

var santa_buffer = Buffer.from(santa, 'utf-8');
result = santa_buffer.copy(myHome, 16);
_log(result); // 4

_log(myHome.toString('utf8', 0, 16 + 4));
// Merry Christmas!🎅

/**
 * buffer.slice(start, end=buffer.length)
 */
// Array.prototype.slice와 비슷.
// 단! slice의 return값이 새로운 객체가 아니라 동일 객체임.
// 수정하면 원본 Buffer도 수정된다.
var father = myHome.slice(16, 20);
console.log(father.toString()); // 🎅

father.write('👨');
console.log(myHome.toString()); // Merry Christmas!👨
console.log(father.toString()); // 👨
