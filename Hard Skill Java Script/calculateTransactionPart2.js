/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat menghitung total pendapatan, produk terlaris, dan rata-rata harga produk

  Example Input: (data pada variabel transactions)

  Expected Output: 
  - Total Pendapatan:  5500000
  - Produk Terlaris : Baju
  - Rata-rata Harga Produk : 175000

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .reduce() .filter() dll
  - tampikan expected output dengan console.log()
*/

function totalPendapatan(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let total = 0;

  for (let i = 0; i < transactions.length; i++) {
    let transaksi = transactions[i];
    total += transaksi.jumlah * transaksi.harga;
  }

  return total; // kembalikan hasil logika disini
}

function produkTerlaris(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let produkCount = {};

  for (let i = 0; i < transactions.length; i++) {
    let produk = transactions[i].produk;
    let jumlah = transactions[i].jumlah;

    if (produkCount[produk]) {
      produkCount[produk] += jumlah;
    } else {
      produkCount[produk] = jumlah;
    }
  }

  let produkMax = "";
  let maxJumlah = 0;

  for (let produk in produkCount) {
    if (produkCount[produk] > maxJumlah) {
      maxJumlah = produkCount[produk];
      produkMax = produk;
    }
  }

  return produkMax;
}

function rataRataHarga(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  /// masukan logika disini
  let totalHarga = 0;
  let totalJumlah = 0;

  for (let i = 0; i < transactions.length; i++) {
    let harga = transactions[i].harga;
    let jumlah = transactions[i].jumlah;

    totalHarga += harga * jumlah;
    totalJumlah += jumlah;
  }

  if (totalJumlah === 0) return 0;

  return Math.round(totalHarga / totalJumlah); // kembalikan hasil logika disini
}

// CASE VALUE
const transactions = [
  { tanggal: "2023-01-05", produk: "Baju", jumlah: 5, harga: 150000 },
  { tanggal: "2023-01-10", produk: "Celana", jumlah: 3, harga: 200000 },
  { tanggal: "2023-02-15", produk: "Baju", jumlah: 2, harga: 150000 },
  { tanggal: "2023-03-20", produk: "Sepatu", jumlah: 4, harga: 300000 },
  { tanggal: "2023-03-22", produk: "Topi", jumlah: 6, harga: 50000 },
  { tanggal: "2023-04-10", produk: "Celana", jumlah: 2, harga: 200000 },
  { tanggal: "2023-04-15", produk: "Baju", jumlah: 3, harga: 150000 },
  { tanggal: "2023-05-05", produk: "Sepatu", jumlah: 1, harga: 300000 },
  { tanggal: "2023-05-10", produk: "Topi", jumlah: 4, harga: 50000 },
  { tanggal: "2023-06-15", produk: "Celana", jumlah: 5, harga: 200000 },
];

// TEST CASE
console.log("Total Saldo Akhir :", totalPendapatan(transactions));
console.log("Transaksi Terbanyak :", produkTerlaris(transactions));
console.log("Total Transaksi Januari :",rataRataHarga(transactions, "Januari"));
