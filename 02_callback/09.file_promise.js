const fs = require('fs').promises;

fs.readFile('test.txt', 'utf-8') // promises는 err, data를 안넘겨줘도 기본 내장
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .catch((err) => {
    console.log(err);
  });
