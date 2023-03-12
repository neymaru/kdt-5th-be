const fs = require('fs').promises;

async function main() {
  // async 안에선 await를 쓸 수 있고 await를 쓰면 resolve나 reject 나올 때까지 무한정 대기
  let data = fs.readFile('test.txt', 'utf-8');
  console.log(data.toString());
  data = fs.readFile('test1.txt', 'utf-8');
  console.log(data.toString());
  data = fs.readFile('test2.txt', 'utf-8');
  console.log(data.toString());
  data = fs.readFile('test3.txt', 'utf-8');
  console.log(data.toString());
  data = fs.readFile('test4.txt', 'utf-8');
}

main();
