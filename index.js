const tarif = {
  "Anak - anak": 25_000,
  Dewasa: 50_000,
  Lansia: 30_000,
};

const umur = 29;
const jumlahTiket = 5;

const riwayatPembelian = [];

// 1. tentukan kategori & harga tiket berdasarkan umur
const kategori = kategoriBerdasarkanUmur(umur);

// 2. bikin object dengan format: {kategori: 'Anak - anak', jumlah: 2, totalHarga: 50_000}
const totalHarga = hitungTotalHarga(kategori, jumlahTiket);

const tiket = {
  kategori: kategori,
  jumlah: jumlahTiket,
  totalHarga: totalHarga,
};

// 3. masukkan object ke array riwayatPembelian
riwayatPembelian.push(tiket);

// 4. Tampilkan riwayat pembelian
console.table(riwayatPembelian);

// expected output
// [{ kategori: "Anak - anak", jumlah: 2, totalHarga: 50_000 }];

function kategoriBerdasarkanUmur(umur) {
  // let kategori = "";

  // if (umur < 12) {
  //   kategori = "Anak - anak";
  // } else if (umur >= 12 && umur < 60) {
  //   kategori = "Dewasa";
  // } else {
  //   kategori = "Lansia";
  // }

  // return kategori;

  if (umur < 12) return "Anak - anak";
  if (umur < 60) return "Dewasa";
  return "Lansia";
}

function hitungTotalHarga(kategori, jumlahTiket) {
  const harga = tarif[kategori] * jumlahTiket;
  const ppn = harga * 0.11;
  return harga + ppn;
}
