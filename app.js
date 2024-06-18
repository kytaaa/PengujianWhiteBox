function hitungTotal(jenis) {
    let total = 0;
    for (let transaksi of transaksiList) {
        if (transaksi.jenis === jenis) {
            total += transaksi.nominal;
        }
    }
    return total;
}

let transaksiList = [
    { jenis: "pemasukan", nominal: 5000000 },
    { jenis: "pengeluaran", nominal: 2000000 },
    { jenis: "pemasukan", nominal: 3000000 },
];

function aplikasiKeuangan() {
    pengelolaanTransaksi();
    buatLaporanKeuangan();
    manajemenPengguna();
}

function pengelolaanTransaksi() {
    console.log('Pengelolaan transaksi sedang diuji...');
}

function buatLaporanKeuangan() {
    console.log('Pembuatan laporan keuangan sedang diuji...');
}

function manajemenPengguna() {
    console.log('Manajemen pengguna sedang diuji...');
}

function testAplikasiKeuangan() {
    console.log('Pengujian modul aplikasiKeuangan...');
    aplikasiKeuangan();
}

function testPengelolaanTransaksi() {
    console.log('Pengujian modul pengelolaanTransaksi...');
    pengelolaanTransaksi();
}

function testBuatLaporanKeuangan() {
    console.log('Pengujian modul buatLaporanKeuangan...');
    buatLaporanKeuangan();
}

function testManajemenPengguna() {
    console.log('Pengujian modul manajemenPengguna...');
    manajemenPengguna();
}

testAplikasiKeuangan();
testPengelolaanTransaksi();
testBuatLaporanKeuangan();
testManajemenPengguna();
