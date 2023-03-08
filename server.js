// @ts-check
const express = require('express'); // 모듈을 불러오는 명령어 require

const server = express();

const PORT = 4000; // PORT 는 항구. 숫자는 지역 위치

// http://localhost://4000/api
server.use('/', (req, res, next) => {
  // 4000번이 오면 얘가 실행된다.
  // next는 다음 미들웨어를 호출 (api가 여러개일 때 다음에 넘겨줌)
  console.log('미들웨어 1');
  req.reqTime = new Date(); // 현재시간
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 2');
  res.send(`요청 시간은 ${req.reqTime}입니다.!`);
});

server.use((req, res, next) => {
  console.log('미들웨어 3');
});

server.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동 중입니다!`);
});
