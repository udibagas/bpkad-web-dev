// main function
function beliTiket(umur, jumlahTiket) {
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
}

// sub function
function kategoriBerdasarkanUmur(umur) {
  if (umur < 12) return "Anak - anak";
  if (umur < 60) return "Dewasa";
  return "Lansia";
}

// sub function
function hitungTotalHarga(kategori, jumlahTiket) {
  const tarif = {
    "Anak - anak": 25_000,
    Dewasa: 50_000,
    Lansia: 30_000,
  };

  const harga = tarif[kategori] * jumlahTiket;
  const ppn = calculateTax(harga);
  return harga + ppn;
}

function calculateTax(amount, taxRate = 0.12) {
  return amount * taxRate;
}

// input
const umur = 29;
const jumlahTiket = 5;

beliTiket(umur, jumlahTiket);
