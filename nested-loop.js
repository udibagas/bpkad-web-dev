// *****
// *****
// *****

function draw(rows, columns) {
  // outer loop for rows
  for (let i = 0; i < rows; i++) {
    let line = "";
    // inner loop for columns
    for (let j = 0; j < columns; j++) {
      line += "*";
    }

    console.log(line);
  }
}

// [
//   ["*", "*", "*"], ==> baris 1
//   ["*", "*", "*"],
//   ["*", "*", "*"],
// ];

function susunKursi(pengunjung, cols) {
  const rows = Math.ceil(pengunjung.length / cols);
  const kursi = [];
  let indexPengunjung = 0;

  for (let i = 0; i < rows; i++) {
    const baris = [];
    for (let j = 0; j < cols; j++) {
      let tamu = pengunjung[indexPengunjung];

      if (tamu === undefined) {
        tamu = "Kursi Kosong";
      }

      baris.push(tamu);
      indexPengunjung++;
    }
    kursi.push(baris);
  }

  return kursi;
}

const pengunjung = [
  "Udi",
  "Bagas",
  "Dimas",
  "Rizki",
  "Fajar",
  "Dian",
  "Rizal",
  "Budi",
  "Joko",
  "Siti",
];

console.log(pengunjung.length); // 10
console.log(susunKursi(pengunjung, 3));
