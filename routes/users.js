// @ts-check

const express = require('express');

const router = express.Router();

// // USER 데이터
const USER = [
  {
    id: 'tetz',
    name: '이효석',
    email: 'xenosign@naver.com',
  },
  {
    id: 'pororo',
    name: '뽀로로',
    email: 'pororo@naver.com',
  },
];

// // http://localhost:4000/users
// // http://127.0.0.1:4000/users
router.get('/', (req, res) => {
  res.render('users', { USER, userCounts: USER.length });
});

// // http://127.0.0.1:4000/users/id/tetz
router.get('/id/:id', (req, res) => {
  const userData = USER.find((user) => user.id === req.params.id);
  if (userData) {
    res.send(userData);
  } else {
    const err = new Error('해당 ID를 가진 회원이 없습니다!');
    err.statusCode = 404;
    throw err;
  }
});

// //----------------- 추가 ---------------------
// // http://127.0.0.1:4000/users/add
router.post('/add', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.query).length >= 1) {
    if (req.query.id && req.query.name && req.query.email) {
      const newUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };

      USER.push(newUser);

      res.send('회원 추가 완료!');
    } else {
      const err = new Error('쿼리 입력이 잘못 되었습니다!');
      err.statusCode = 400;
      throw err;
    }
  } else if (req.body) {
    if (req.body.id && req.body.name && req.body.email) {
      const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
      };

      USER.push(newUser);

      res.redirect('/users');
    } else {
      const err = new Error('폼 태그 입력을 확인 하세요!');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력되지 않았습니다');
    err.statusCode = 400;
    throw err;
  }
});

// //----------------- 수정 ---------------------
// // http://127.0.0.1:4000/users/modify
router.put('/modify/:id', (req, res) => {
  if (req.query.name && req.query.email) {
    const userIndex = USER.findIndex((user) => user.id === req.params.id); // 찾으면 인덱스가 들어가고 못찾으면 -1이 들어간다
    if (userIndex !== -1) {
      USER[userIndex] = {
        id: req.params.id,
        name: req.query.name,
        email: req.query.email,
      };
      res.send('회원 정보 수정 완료!');
    } else {
      const err = new Error('해당 ID를 가진 회원이 존재하지 않습니다!');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('쿼리 입력이 잘못 되었습니다!');
    err.statusCode = 400;
    throw err;
  }
});

// //----------------- 삭제 ---------------------
// // http://127.0.0.1:4000/users/delete
router.delete('/delete/:id', (req, res) => {
  const userIndex = USER.findIndex((user) => user.id === req.params.id);
  if (userIndex !== -1) {
    USER.splice(userIndex, 1); // 배열의 시작시점에서 1개만큼 지워라
    res.send('회원 삭제 완료!');
  } else {
    const err = new Error('해당 ID를 가진 회원이 존재하지 않습니다!');
    err.statusCode = 404;
    throw err;
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');

  for (let i = 0; i < USER.length; i++) {
    res.write(`<h2>USER ID is ${USER[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER[i].name}</h2>`);
  }

  res.end();
});

// router.get('/ejs', (req, res) => {
//   const userCounts = USER_ARR.length;
//   res.render('index', { USER_ARR, userCounts }); // views에 있는 index 파일을 그려라
// });

module.exports = router; // 라우터를 모듈로 빼주기