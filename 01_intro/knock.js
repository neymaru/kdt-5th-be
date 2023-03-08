function knockDoor(sec, name, callback) {
  console.log('노크를 하고 기다립니다!');
  setTimeout(() => {
    callback(sec, name);
  }, sec * 1000);
}
function callName(sec, name) {
  console.log(`${name}가 ${sec}초 동안 기다리다 문을 열었습니다.`);
}
knockDoor(3, '영식', callName);
