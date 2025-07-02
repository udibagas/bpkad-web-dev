function add(a, b, callback) {
  let result;

  setTimeout(() => {
    result = a + b;
    callback(result);
  }, 2000);
}

function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("Both arguments must be numbers");
      } else {
        resolve(a + b);
      }
    }, 1000);
  });
}

// promise chaining
// addPromise(1, 3)
//   .then((result) => {
//     console.log("Result:", result);
//     return addPromise(10, 20);
//   })
//   .then((result) => {
//     console.log("Result 2:", result);
//     return addPromise("a", 200);
//   })
//   .then((result) => {
//     console.log("Result 2:", result);
//     return addPromise(100, 200);
//   })
//   .then((result) => {
//     console.log("Result 2:", result);
//     return addPromise(100, 200);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

const a = await addPromise(1, 2);
const b = await addPromise(3, 4);
const c = await addPromise(3, 4);
const d = await addPromise(3, 4);
const e = await addPromise(3, 4);
const result = a + b + c + d + e;
console.log("Final Result:", result);

// nested callback
// // callback hell
// add(1, 1, (result) => {
//   console.log("Result:", result);
//   add(2, 3, (result1) => {
//     const c = result + result1;
//     console.log("C:", c);
//     add(2, 3, (result2) => {
//       const d = c + result2;
//       console.log("D:", d);
//     });
//   });
// });

// promise
