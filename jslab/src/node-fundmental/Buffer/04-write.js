var buffer;
var result;

buffer = Buffer.alloc(16);

result = buffer.write('Hello', 'utf8');
console.log(1, result);
// 5
// write에 사용한 byte 개수

result = buffer.write(' world!', 5, 'utf8');
// 두번째 인자를 주면 해당 인덱스부터 write.

console.log(2, buffer.toString('utf8'));
// Hello world!
console.log(3, buffer.toString('utf8', 0, 5));
// Hello
// write범위: 시작인덱스, 끝인덱스

// 배열처럼 줄 수 있음.
buffer[12] = buffer[11];
buffer[13] = '!'.charCodeAt();
buffer[14] = buffer[13];
buffer[15] = 33;
console.log(buffer.toString('utf8'));
// Hello world!!!!!
