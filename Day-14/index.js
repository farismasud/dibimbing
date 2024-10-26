"use strict";
// console.log(1 + "1");
// console.log(null + 1);
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello world");
// defined variable, string, boolean, number
// assign methods, new value yang tidak sesuai dengan type
// Mendefinisikan variabel dengan tipe data
var nama = "Faris Mas'ud"; // Tipe string
var umur = 19; // Tipe number
var isActive = true; // Tipe boolean
// Menampilkan nilai awal
console.log("Name: ".concat(nama, ", Age: ").concat(umur, ", Active: ").concat(isActive));
// Mengubah nilai variabel dengan tipe yang sesuai
nama = "Faris Mas'ud"; // Valid
umur = 2; // Valid
isActive = false; // Valid
// Menampilkan nilai yang telah diubah
console.log("Updated Name: ".concat(nama, ", Updated Age: ").concat(umur, ", Active: ").concat(isActive));
// Contoh penugasan yang tidak sesuai dengan tipe
// name = 123; // Error: Type 'number' is not assignable to type 'string'.
// age = "thirty"; // Error: Type 'string' is not assignable to type 'number'.
// isActive = "yes"; // Error: Type 'string' is not assignable to type 'boolean'.
// Mendefinisikan fungsi penjumlahan
function penjumlahan(a, b) {
    return a + b;
}
// Menggunakan fungsi penjumlahan
var hasil = penjumlahan(5, 10);
console.log("Hasil penjumlahan: ".concat(hasil)); // Output: Hasil penjumlahan: 15
