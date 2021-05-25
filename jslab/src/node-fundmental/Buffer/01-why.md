### 버퍼가 왜 필요해?
- 서버에서는 TCP Stream을 다루고, Filesystem을 이용해 file을 읽고 쓰는 작업이 필요하다.
- 이런 작업에는 Raw Binary Data(순수 바이너리 데이터)를 가지고 놀아야 한다.
- 이 때 Buffer가 필요하다.
- Raw Binary Data를 인코딩해서 Binary String을 쓰면 안 되나요?
  - 느림. 구림. 오류 발생 확률 높음.
