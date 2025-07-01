// callback = fungsi yang dijadikan prameter di fungsi lain
// callback function = fungsi yang dipanggil di dalam fungsi lain

function filterOdd(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    // cek satu per satu element di dalam numbers apakah dia bilangan ganjil
    const bilangan = numbers[i];
    if (isOdd(bilangan)) {
      // simpan bilangan ganjil ke dalam array baru
      result.push(bilangan);
    }
  }

  // kembalikan array baru tersebut
  return result;
}

function filterEven(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    // cek satu per satu element di dalam numbers apakah dia bilangan ganjil
    const bilangan = numbers[i];
    if (isEven(bilangan)) {
      // simpan bilangan ganjil ke dalam array baru
      result.push(bilangan);
    }
  }

  // kembalikan array baru tersebut
  return result;
}

function filterNumber(numbers, callback) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    // cek satu per satu element di dalam numbers apakah dia bilangan ganjil
    const bilangan = numbers[i];
    if (callback(bilangan)) {
      // simpan bilangan ganjil ke dalam array baru
      result.push(bilangan);
    }
  }

  // kembalikan array baru tersebut
  return result;
}

function isOdd(bilangan) {
  return bilangan % 2 === 1;
}

function isEven(bilangan) {
  return bilangan % 2 === 0;
}

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // [1,3,5,7,9]
const ganjil = filterOdd(angka);
const genap = filterEven(angka);
const ganjil2 = filterNumber(angka, isEven);

// const kelipatan3 = filterNumber(angka, function isKelipatan3(bilangan) {
//   return bilangan % 3 === 0;
// });

// const kelipatan3 = filterNumber(angka, function (bilangan) {
//   return bilangan % 3 === 0;
// });

// const kelipatan3 = filterNumber(angka, (bilangan) => {
//   return bilangan % 3 === 0;
// });

const kelipatan3 = filterNumber(angka, (bilangan) => bilangan % 2 === 1);

console.log("Bilangan ganjil:", ganjil);
console.log("Bilangan ganjil:", genap);
console.log("Bilangan ganjil:", ganjil2);
console.log("Bilangan kelipatan 3:", kelipatan3);
