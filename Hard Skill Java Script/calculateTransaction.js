/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat menghitung total saldo akhir, transaksi terbanyak kredit atau debit, dan transaksi perbulan

  Example Input: (data pada variabel transactions)

  Expected Output: 
  - Total Saldo Akhir : 310
  - Transaksi Terbanyak : debit
  - Total Transaksi Januari : 300

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .reduce() .filter() dll
  - tampilkan expected output dengan console.log()
*/

function totalSaldo(transactions) { // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let saldo = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].jenis === "kredit") {
      saldo += transactions[i].jumlah;
    } else {
      saldo -= transactions[i].jumlah;
    }
  }
  return saldo;// kembalikan hasil logika disini
}

function transaksiTerbanyak(transactions) { // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let kredit = 0;
  let debit = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].jenis === "kredit") {
      kredit++;
    } else {
      debit++;
    }
  }
  if (kredit > debit) {
    return "kredit";
  } else {
    return "debit";
  }
}// kembalikan hasil logika disini


function totalTransaksiBulan(transactions, targetBulan) { // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    let tanggal = new Date(transactions[i].tanggal);
    let bulan = tanggal.toLocaleString("id-ID", { month: "long" });
    if (bulan === targetBulan) {
      total += transactions[i].jumlah;
    }
  }
  return total;// kembalikan hasil logika disini
}

// CASE VALUE
const transactions = [
  { tanggal: "2023-01-05", jumlah: 200, jenis: "debit" },
  { tanggal: "2023-01-10", jumlah: 100, jenis: "kredit" },
  { tanggal: "2023-02-15", jumlah: 150, jenis: "debit" },
  { tanggal: "2023-03-20", jumlah: 300, jenis: "kredit" },
  { tanggal: "2023-03-22", jumlah: 50, jenis: "debit" },
  { tanggal: "2023-04-10", jumlah: 200, jenis: "kredit" },
  { tanggal: "2023-04-15", jumlah: 100, jenis: "debit" },
  { tanggal: "2023-05-05", jumlah: 150, jenis: "kredit" },
  { tanggal: "2023-05-10", jumlah: 120, jenis: "debit" },
  { tanggal: "2023-06-15", jumlah: 180, jenis: "kredit" },
];

// TEST CASE
console.log("Total Saldo Akhir :", totalSaldo(transactions));
console.log("Transaksi Terbanyak :", transaksiTerbanyak(transactions));
console.log("Total Transaksi Januari :", totalTransaksiBulan(transactions, "Januari"));