var buffer;

// 1byte 아이템 * 8개
buffer = Buffer.alloc(8);
console.log(buffer);
// <Buffer 00 00 00 00 00 00 00 00>

// 배열의 인자는 0~255 사이의 정수. 256 표현 못함.
buffer = Buffer.from([0, 255, 256]);
console.log(buffer);
// <Buffer 00 ff 00>

// 문자열도 가능. 두번째 인자는 인코딩 타입
buffer = Buffer.from('I;am a string!', 'utf-8');
console.log(buffer);
// <Buffer 49 3b 61 6d 20 61 20 73 74 72 69 6e 67 21
