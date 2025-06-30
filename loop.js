// for
for (let i = 1; i <= 20; i++) {
  // kode di dalam for akan diulang
  if (i % 2 === 1) {
    console.log("Halo, saya orang ke", i);
  }
}

// while
let capek = true; // kondisi yang selalu benar
let jumlahPushup = 0;

while (!capek) {
  console.log("pushup");
  jumlahPushup++;

  if (jumlahPushup >= 10) {
    capek = true; // ubah kondisi menjadi false
  }
}

// do while

do {
  console.log("pushup");
  jumlahPushup++;
} while (!capek && jumlahPushup < 10);

// loop array
const buah = ["apel", "jeruk", "mangga", "pisang"];

// for (let i = 0; i < buah.length; i++) {
//   console.log("Buah ke", i, "adalah", buah[i]);
// }

for (const item of buah) {
  console.log("Buah:", item);
}

// loop object
const person = {
  nama: "Udi Bagas",
  umur: 29,
  pekerjaan: "Web Developer",
};

for (const key in person) {
  console.log(key, ":", person[key]);
}

const name = "Udi Bagas";

console.log(name.repeat(3));
