// "use strict";
a = 1;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (const number of numbers) {
//   console.log(number);
// }

function printNumber(number, index, arr) {
  // console.log("Array =", arr);
  console.log("Index =", index, "Value =", number);
}

numbers.forEach((number, index, arr) => {
  // console.log("Array =", arr);
  console.log("Index =", index, "Value =", number);
});

function isOdd(bilangan) {
  return bilangan % 2 === 1;
}

function isEven(bilangan) {
  return bilangan % 2 === 0;
}

// filter
const ganjil = numbers.filter(isOdd);
const genap = numbers.filter((bilangan) => bilangan % 2 === 0);
console.log("Bilangan ganjil:", ganjil);
console.log("Bilangan genap:", genap);

// find
const ganjil1 = numbers.find(isOdd);
const genap1 = numbers.find((bilangan) => bilangan % 2 === 0);
console.log("Bilangan ganjil pertama:", ganjil1);
console.log("Bilangan genap pertama:", genap1);

// findIndex
const n = [10, 20, 30];
const indexGanjilPertama = n.findIndex(isOdd);
console.log("Index bilangan ganjil pertama:", indexGanjilPertama);

// map => membuat array baru, berdasarkan array lama
const x = [1, 2, 3, 4, 5]; // [1, 4, 9, 16, 25]
// const y = [];

// for (const bilangan of x) {
//   y.push(bilangan * bilangan);
// }

const y = x.map((bilangan) => bilangan * bilangan);
console.log("Array y:", y);

const users = [
  { name: "Alice", gender: "Female" },
  { name: "Bambang", gender: "Male" },
  { name: "Arief", gender: "Male" },
  { name: "Davis", gender: "Male" },
  { name: "Putri", gender: "Female" },
];

// ["Bu Alice", "Pak Bambang", "Pak Arief", "Pak Davis", "Bu Putri"]

const sapaan = users.map((user) => {
  // console.log("User =", user);
  // let panggilan;

  // if (user.gender == "Male") {
  //   panggilan = "Pak";
  // } else {
  //   panggilan = "Bu";
  // }

  // a++ = unary operator
  // a = 1 + 2 => binary operator

  const panggilan = user.gender === "Male" ? "Pak" : "Bu"; // ternary operator
  // return panggilan + " " + user.name;
  return `${panggilan} ${user.name}`; // template literal
});

console.log("Sapaan:", sapaan);
