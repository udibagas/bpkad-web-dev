// hello();
const add = (a, b) => a + b;
const result = add(5, 3);
console.log(result);

// void
function hello(nama, greeting = "Hi") {
  console.log(greeting + ", " + nama + "!");
}

// named function
// return
// function add(a, b) {
//   return a + b;
// }

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => {
//   return a + b;
// };

add(5, 3); // 8

// console.log("Hello, Bagas!");
// console.log("Hello, Davis!");
// console.log("Hello, Arief!");
// console.log("Hello, Rachmat!");
hello("Bagas", "Selamat Pagi");
hello("Davis", "Selamat Malam");
hello("Arief", "Hello");
hello("Rachmat");

// anonymous function
// const hi = function () {
//   console.log("Ini adalah fungsi anonim");
// };

// arrow function
const hi = () => {
  console.log("Ini adalah fungsi anonim");
};

const hi2 = hi;

hi2();
