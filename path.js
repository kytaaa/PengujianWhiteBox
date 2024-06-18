function hitungTotal(transaksi) {
  let total = 0;
  for (let t of transaksi) {
      total += t.jumlah;
  }
  return total;
}

function cekSaldo(saldo, jumlah) {
  return saldo >= jumlah;
}

function mainApps(transaksi, pengguna) {
  const total = hitungTotal(transaksi);
  if (cekSaldo(pengguna.saldo, total)) {
      return "Transaksi Berhasil";
  } else {
      return "Saldo Tidak Cukup";
  }
}

// Pengujian fungsi
function tryMainApps() {
  const transaksi = [{ jumlah: 100 }, { jumlah: 200 }, { jumlah: 300 }];
  const pengguna = { saldo: 1000 };
  console.assert(mainApps(transaksi, pengguna) === "Transaksi Berhasil", "Try mainApps gagal (case 1)");
  const penggunaKurangSaldo = { saldo: 500 };
  console.assert(mainApps(transaksi, penggunaKurangSaldo) === "Saldo Tidak Cukup", "Try mainApps gagal (case 2)");
}

tryMainApps();
console.log("Semua pengujian telah berhasil.");
