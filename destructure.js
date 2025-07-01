// aray destructuring
const arr = ["Bagas", "Semarang", "Hacktiv8"];
// const nama = arr[0];
// const kota = arr[1];
// const [, , company] = arr;

// console.log(nama); // Bagas
// console.log(kota); // Semarang
// console.log(company); // Hacktiv8

// object destructuring
const person = {
  name: "Bagas",
  age: 25,
  city: "Semarang",
  // company: "Hacktiv8",
};

const { name, age, city: kota, company: perusahaan = "Hacktiv8" } = person;

// console.log(company); // Bagas
console.log(kota); //

// const user = {
//   name: name,
//   age: age,
// };

const user = { name, age };
console.log(user); // { name: 'Bagas', age: 25 }
