function hitungTotal(transaksi) {
  let total = 0;
  for (let t of transaksi) {
    total += t.jumlah;
  }
  return total;
}

// Pengujian jalur
function testHitungTotal() {
  const transaksi = [{ jumlah: 100 }, { jumlah: 200 }, { jumlah: 300 }];
  const result = hitungTotal(transaksi);
  console.assert(result === 600, "Test hitungTotal gagal");
  console.log("Test hitungTotal berhasil");
}

testHitungTotal();
