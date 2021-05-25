### 버퍼가 뭔데?
- Buffer는 Raw Binary Data를 다루라고 Node에서 만들어 놓은거다.
- Buffer는 V8엔진 바깥에 memory에 할당된다.
- Buffer는 정수 배열과 다소 비슷하게 작동한다.
- 그러나 크기를 조정할 수 없다.
- Raw Binary Data에 특화된 메소드가 있다.
- 버퍼의 정수는 각각 바이트를 나타낸다.
- 그러므로 0에서 255까지의 값으로 제한됩니다. (8bit = 1byte)
- console.log()하여 Buffer인스턴스 를 인쇄 할 때 16 진수 값으로 된 일련의 값을 얻게됩니다.
- 버퍼는 일반적으로 스트림에서 오는 이진 데이터의 컨텍스트에서 볼 수 있어. 예를 들면 fs.createReadStream