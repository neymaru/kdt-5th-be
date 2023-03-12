const promise = new Promise(function (resolve, reject) {
  const tetz = 'old';

  if (tetz === 'old') {
    setTimeout(() => {
      resolve('tetz is old');
    }, 3000);
  } else {
    reject('tetz is getting old');
  }
});

promise
  // resolve
  .then(function (data) {
    console.log(data);
  })
  // reject
  .catch(function (data) {
    console.log(data);
  });
