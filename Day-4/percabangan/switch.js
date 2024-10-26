const nilaiStudent = 85
let grade = ""
switch (true) {
    case (nilaiStudent >= 90):
        grade = "A"
        break;
    case (nilaiStudent > 80):
        grade = "B"
        break;
    case (nilaiStudent > 70):
        grade = "C"
        break;
    case (nilaiStudent > 60):
        grade = "D"
        break;
    default:
        grade = "E"
}
console.log(grade)


let nomorBulan = 0;
let stringBulan = "Juni";

switch (true) {
    case (stringBulan ==="Januari"):
        nomorBulan = 1;
        break;
    case (stringBulan === "Februari"):
        nomorBulan = 2;
        break;
    case (stringBulan === "Juni"):
        nomorBulan = 6;
        break;
    default:
        nomorBulan = "invalid"
        break;
}
console.log(nomorBulan)

let namaHari = "Selasa"
let jenisHari = ""

switch (namaHari) {
    case "Senin":
    case "Selasa":
    case "Rabu":
    case "Kamis":
    case "Jum'at":
        jenisHari = "Hari Kerja"
        break;
    case "Sabtu":
    case "Minggu":
       jenisHari = "Hari Libur"
        break;
    default:
        jenisHari = "Invalid"
}
console.log(jenisHari)

if (namaHari === "Senin" || namaHari === "Selasa" || namaHari === "Rabu" || namaHari === "Kamis" || namaHari === "Jumat") {
    jenisHari = "Hari Kerja"
} else if (namaHari === "Sabtu" || namaHari === "Minggu") {
    jenisHari = "Hari Libur"
} else {
    jenisHari = "Invalid"
}