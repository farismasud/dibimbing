/**
 * Membuat object baru, dengan perubahan & penambahan property
 */

let siswa = {
  nama : "Arkan",
  umur : 22
}

// tulis kode di sini


// soal A : buat variabel newSiswa, ubah umur jadi 23 dan tambahkan pekerjaan programmer
let newSiswa = {...siswa, umur: 23, pekerjaan: "programmer"}

console.log(newSiswa); // output: { nama: 'Arkan', umur: 23, pekerjaan: 'programmer' }
console.log(siswa); // output: { nama: 'Arkan', umur: 22 } (note : tetap)


// soal B : extrak ke pekerjaan & sisanya (dari variable newSiswa)
const { pekerjaan, ...sisanya } = newSiswa

console.log(pekerjaan); // programmer
console.log(sisanya); // { nama: 'Arkan', umur: 23 }

// soal C : extrak property by variable
const propertyToExtract = 'umur'
const { [propertyToExtract]: umur, ...rest } = newSiswa

console.log(umur); // programmer
console.log(sisanya); // { nama: 'Arkan', umur: 23 }