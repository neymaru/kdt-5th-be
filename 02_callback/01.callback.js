function func1(callback) {
  // 어떤 함수가 들어올 지는 모르겠으나 일단 실행시킬게
  console.log('1번 함수');
  function fakeFunc2() {
    console.log('3번인척 하는 함수');
  }
  callback();
}

function func2(callback) {
  console.log('2번 함수');
  callback();
}

function func3() {
  console.log('3번 함수');
}

func1(function () {
  console.log('2인척 하는 새로 만든 익명 함수');
});

// function multi(number, callback) {
//   let answer = 0;
//   setTimeout(() => {
//     answer = number * number;
//     callback(answer);
//   }, 2000);
// }

// function say(result) {
//   console.log(result);
// }

// multi(3, say);
