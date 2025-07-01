function daftarNasabahLolos(listNasabah) {
  const hasil = {};
  for (let { kelasKredit, nilaiKredit, nama } of listNasabah) {
    if (nilaiKredit >= 75) {
      if (hasil[kelasKredit] == undefined) {
        hasil[kelasKredit] = [];
      }

      hasil[kelasKredit].push(nama);
    }
  }

  return hasil;
}

const daftarNasabah = [
  { nama: "Budi", nilaiKredit: 80, kelasKredit: "Platinum" },
  { nama: "Adi", nilaiKredit: 60, kelasKredit: "Gold" },
  { nama: "Agus", nilaiKredit: 85, kelasKredit: "Platinum" },
  { nama: "Asep", nilaiKredit: 77, kelasKredit: "Silver" },
];

const hasil = daftarNasabahLolos(daftarNasabah);
console.log(hasil);
