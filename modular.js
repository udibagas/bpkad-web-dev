const gaji = hitungGaji(5_000_000); // 5000000 + 500000 - 250000 = 5250000
console.log("Gaji bersih: " + gaji);

function hitungGaji(gajiPokok) {
  // 1. tunjangan keluarga
  const tunjanganKeluarga = hitungTunjangan(gajiPokok);
  // 2. pajak penghasilan
  const pajakPenghasilan = hitungPPH(gajiPokok, 0.03);
  /// gaji = gajiPokok + tunjanganKeluarga - pajakPenghasilan;
  const gaji = gajiPokok + tunjanganKeluarga - pajakPenghasilan;
  return gaji;
}

function hitungTunjangan(gajiPokok, jumlahAnak = 0) {
  let jumlahAnakTerhitung = jumlahAnak;

  if (jumlahAnak > 2) {
    jumlahAnakTerhitung = 2;
  }

  const tunjanganKeluarga = gajiPokok * 0.1 * jumlahAnakTerhitung;
  return tunjanganKeluarga;
}

function hitungPPH(gajiPokok, rate = 0.05) {
  return gajiPokok * rate;
}
