const lucky = true;

const promise = new Promise((resolve, reject) => {
  console.log('주식이 오르기를 기다리기 시작합니다!');

  setTimeout(() => {
    console.log('3년의 시간이 흐르고....');
    if (lucky) {
      const profit = 3000;
      resolve(profit);
    } else {
      reject('아.... 망했어요');
    }
  }, 3000);
});

// promise
//   .then(function (profit) {
//     console.log(`기다림의 보상으로 ${profit} 원을 벌었습니다!`);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

async function howMuch() {
  try {
    const result = await promise; // 먼가 값을 받아야 할 것 같은데 시간이 걸릴 거 같을 때 await 사용

    if (result) {
      console.log(result);
    }
  } catch (err) {
    // reject
    console.log(err);
  }
}

howMuch();
