function funcHell(callback) {
  callback(); // 자기가 전달받은 함수를 전달하는 역할
}

funcHell(function () {
  console.log('1번인척 하는 새로 만든 익명 함수');
  funcHell(function () {
    console.log('2번인척 하는 새로 만든 익명 함수');
    funcHell(function () {
      console.log('3번인척 하는 새로 만든 익명 함수');
    });
  });
});
