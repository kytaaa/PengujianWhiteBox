// Fungsi untuk menghitung total pemasukan atau pengeluaran berdasarkan jenis transaksi
function hitungTotal(jenis) {
  let total = 0;
  for (let transaksi of transaksiList) {
    if (transaksi.jenis === jenis) {
      total += transaksi.nominal;
    }
  }
  return total;
}

// Array untuk menyimpan transaksi (dummy data untuk pengujian)
let transaksiList = [
  { jenis: "pemasukan", nominal: 5000000 },
  { jenis: "pengeluaran", nominal: 2000000 },
  { jenis: "pemasukan", nominal: 3000000 },
];

// Pengujian White Box untuk fungsi hitungTotal
function testHitungTotal() {
  // Pengujian untuk total pemasukan
  const totalPemasukan = hitungTotal("pemasukan");
  console.assert(
    totalPemasukan === 8000000,
    `Pengujian hitungTotal pemasukan gagal. Hasil: ${totalPemasukan}`
  );

  // Pengujian untuk total pengeluaran
  const totalPengeluaran = hitungTotal("pengeluaran");
  console.assert(
    totalPengeluaran === 2000000,
    `Pengujian hitungTotal pengeluaran gagal. Hasil: ${totalPengeluaran}`
  );
}

// Menjalankan pengujian White Box
testHitungTotal();
