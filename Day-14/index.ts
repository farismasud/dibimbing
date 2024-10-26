// console.log(1 + "1");
// console.log(null + 1);

console.log("hello world");

// defined variable, string, boolean, number
// assign methods, new value yang tidak sesuai dengan type

// Mendefinisikan variabel dengan tipe data
let nama: string = "Faris Mas'ud"; // Tipe string
let umur: number = 19; // Tipe number
let isActive: boolean = true; // Tipe boolean

// Menampilkan nilai awal
console.log(`Name: ${nama}, Age: ${umur}, Active: ${isActive}`);

// Mengubah nilai variabel dengan tipe yang sesuai
nama = "Faris Mas'ud"; // Valid
umur = 2; // Valid
isActive = false; // Valid

// Menampilkan nilai yang telah diubah
console.log(`Updated Name: ${nama}, Updated Age: ${umur}, Active: ${isActive}`);

// Contoh penugasan yang tidak sesuai dengan tipe
// name = 123; // Error: Type 'number' is not assignable to type 'string'.
// age = "thirty"; // Error: Type 'string' is not assignable to type 'number'.
// isActive = "yes"; // Error: Type 'string' is not assignable to type 'boolean'.


// Mendefinisikan fungsi penjumlahan
function penjumlahan(a: number, b: number): number {
    return a + b;
}

// Menggunakan fungsi penjumlahan
const hasil = penjumlahan(5, 10);
console.log(`Hasil penjumlahan: ${hasil}`); // Output: Hasil penjumlahan: 15

export{}