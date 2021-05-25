var buffer;
var result;

buffer = Buffer.alloc(16);

result = buffer.write('Hello', 'utf8');
console.log(result); // 5 (write에 사용한 byte 개수)

// 두번째 인자를 주면 해당 인덱스부터 write.
buffer.write(' world!', 5, 'utf8');
console.log(buffer.toString('utf8')); // Hello world!

// write범위: 시작인덱스, 끝인덱스
console.log(buffer.toString('utf8', 0, 5)); // Hello

// 배열처럼 요로코롬 줄 수도 있음.
buffer[12] = buffer[11];
buffer[13] = '!'.charCodeAt();
buffer[14] = buffer[13];
buffer[15] = 33;
console.log(buffer.toString('utf8')); // Hello world!!!!!
