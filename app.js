// @ts-check
// 03_express의 메인 서버 역할

const express = require('express'); // express 불러오기
const bodyParser = require('body-parser');

const app = express(); // app 이라는 변수에 express를 실행시켜서 담음
const PORT = 4000;

const mainRouter = require('./routes'); // routes 폴더에 index.js 가 생략되어 있다 (nodejs가 알아서 찾는다)
const userRouter = require('./routes/users'); // 모듈이 있으면 가져와서 userRouter에 넣어라
const postRouter = require('./routes/posts');

app.set('view engine', 'ejs'); // view engine 은 ejs를 써라
app.use(express.static('public')); // view에서 먼저 찾고 js로 가서 찾는다
app.use(bodyParser.json()); // body parser를 쓰겠다. json 형태로 데이터를 전달
app.use(bodyParser.urlencoded({ extended: false })); // body parser의 기본. 그냥 외울것

// app.use('/css', express.static('views/css')); // 폴더 설정

// localhost:4000
app.use('/', mainRouter);
// localhost:4000/users
app.use('/users', userRouter); // url에 users가 붙으면 app 이 아니라 라우터가 처리할거야
app.use('/posts', postRouter);
// http://localhost:4000/ 를 실행하면 얘가 받음
app.get('/', (req, res) => {
  res.send('Hello, Express world');
});

// 에러를 받을 수 있는 코드
// 반드시 인자를 4개 써야 에러를 받을 수 있다
app.use((err, req, res, next) => {
  console.log(err.stack); // err stack 운 nodejs가 알아서 찾아서 만들어준다
  res.status(err.statusCode);
  res.send(err.message + `<br /><a href="/">홈으로</a>`);
});

app.listen(PORT, () => {
  // 서버 실행
  console.log(`${PORT} 번에서 서버 실행`);
});
