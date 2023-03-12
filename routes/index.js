const express = require('express'); // 앞에 경로가 없는 것은 node js 기본 패키지거나 설치된 파일

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
