// percabangan if
let totalBelanja = 100000;

if (totalBelanja > 60000) {
    console.log("Selamat, Anda Mendapat Hadiah");
}

console.log("Terima Kasih");

// percabangan if else
const password = "Dibimbing";

let userInput = "Dibimb1ng"

if (userInput === password) {
    console.log("Password Correct");
} else {
    console.log("Password Incorrect");
}
console.log("Congratulation");

// percabangan else if
const nilaiStudent = 80
let grade = ""

if (nilaiStudent >= 90) {
    grade = "A"
} else if (nilaiStudent > 80) {
    grade = "B"
} else if (nilaiStudent > 70) {
    grade = "C"
} else if (nilaiStudent > 60) {
    grade = "D"
} else {
    grade = "E"
}
console.log(grade)

