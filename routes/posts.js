// @ts-check

const express = require('express');

const router = express.Router();

// http://localhost:4000/posts
// http://127.0.0.1:4000/posts
const POST = [
  {
    title: '제목 입니다',
    content: '내용 입니다',
  },
  {
    title: '제목2 입니다',
    content: '내용2 입니다',
  },
];
// http://localhost:4000/posts
router.get('/', (req, res) => {
  res.render('posts', { POST, postCounts: POST.length }); // posts.ejs 를 그려라(posts.ejs 파일 있어야함)
});

//----------------- 추가 ---------------------
// http://127.0.0.1:4000/posts/add
router.post('/add', (req, res) => {
  if (Object.keys(req.body).length >= 1) {
    // key 가 1개 이상일 때 실행
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };

      POST.push(newPost);
      res.redirect('/posts');
    } else {
      const err = new Error('쿼리 입력이 잘못 되었습니다!');
      err.statusCode = 400;
      throw err;
    }
  } else if (req.body) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };

      POST.push(newPost);
      res.redirect('/posts');
    } else {
      const err = new Error('폼 데이터 입력을 확인 하세요!');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력되지 않았습니다');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router; // 라우터를 모듈로 빼주기
