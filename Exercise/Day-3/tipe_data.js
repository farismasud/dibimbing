//Tipe data
let angka = 10 //Nummber/Integer
let fruit = "Manggo" //String
let isColor = true  //Boolean

console.log(typeof angka)
console.log(angka)
console.log(fruit)
console.log(isColor)

if (isColor) {
    console.log(typeof fruit === "string")
}

//Object
const student = {
    name: "Faris",
    age: 22,
    address: "Jakarta"
}

console.log("Namaku " + student.name, "Umurku " + student.age, "Alamatku " + student.address)

//* Operator aritmatika
let a = 20
const b = 12
const c = 2


const tambah = a + b + c // Pertambahan
const kurang = a - b - c // Pengurangan
const kali = a * b * c // Perkalian
const bagi = a / b / c // Pembagian
const total = tambah + kurang + kali + bagi
console.log(tambah, kurang, kali, bagi, total)

//* Operertor Logika

const validasiPertama = a > 10 && b < 6
const validasiKedua = tambah < kurang || a < total

if (!validasiPertama) {
    console.log("Masuk kondisi if pertama")
} else if (validasiKedua){
    console.log("Masuk kondisi if kedua")
}


//* operator penugasan
// Perbandingan
console.log(2 === "2")

let user = "Bima"

if (user === "Bima") {
    console.log("User Bima")
} else {
    console.log("User bukan Bima")
}
// Operator Penugasan Pertambahan
a += b 
a = a + b
// Operator Penugasan Pengurangan
a -= b 
a = a - b
console.log(`a: `, a)