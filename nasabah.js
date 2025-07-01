function daftarNasabahLolos(listNasabah) {
  const hasil = {};
  for (let nasabah of listNasabah) {
    if (nasabah.nilaiKredit >= 75) {
      if (hasil[nasabah.kelasKredit] == undefined) {
        hasil[nasabah.kelasKredit] = [];
      }

      hasil[nasabah.kelasKredit].push(nasabah);
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
