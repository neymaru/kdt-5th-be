// @ts-check

const fs = require('fs'); // fs는 nodejs 기본 모듈

// readFile: 특정 파일을 읽는 메소드
fs.readFile('test.txt', 'utf-8', function (err, data) {
  // 첫번째는 문제가 생겼을 때, 두번째는 문제가 없을때 데이터가 들어옴
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const str = '파일 쓰기 테스트';

fs.writeFile('test1.txt', str, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('파일 쓰기 완료');
  }
});
