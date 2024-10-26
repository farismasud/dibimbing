/**
 * Penjumlahan
 * 
 * Ketentuan:
 * - jika input adalah angka, maka jumlahkan dengan angka-angka sebelumnya
 * - jika input bukan angka, misal "=" atau apapun itu, outputkan hasil penjumlahannya
 * 
 * tips: dapat menggunakan regular expression (regex) untuk mengecek apakah input adalah angka
 * input.match(/^\d+$/)
 */

const prompt = require('prompt-sync')();

let sum = 0;
let inputArr = [];
for (let i = 0; true; i++) {
    const input = prompt('input ? ');

    if (input.match(/^\d+$/)) {
        sum += parseFloat(input); 
        inputArr.push(parseFloat(input));
    } 
    else {
        break;
    }
}
let stringInput = inputArr.join(" + ");

console.log(`jumlah akhir = ${stringInput} = ${sum}`);