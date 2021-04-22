const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ name: 'Robin', day: 'Monday' });
    reject('something went wrong');
  }, 1500);
});

console.log('before');

promise
  .then((data) => {
    console.log('1', data);
  })
  .catch((error) => {
    console.log(error);
  });

// can pass the catch function in as a second argument to then instead of chaining a catch function
promise.then(
  (data) => {
    console.log('2', data);
  },
  (error) => {
    console.log(error);
  }
);

console.log('after');
