// Promise.finally

function process() {
    process1()
    .then(process2)
    .then(process3)
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log(`It will execute irrespective of success or failure`);
    });
  }