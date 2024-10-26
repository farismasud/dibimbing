/**
 * Rotate array 2 Dimensi
 * 
 * NOTE : BEBAS MENGGUNAKAN JS FUNCTION APAPUN
 */


const rotate = (arr, num) => {
  // tulis code di sini
  
}

let array2d = [
  [1,2,3],
  [4,5,6,7], // jumlah tiap row bebas, minimal 1
  [8,9,10]
];

/*
rotasi 1 kali
[
  [10,1,2],
  [3,4,5,6], // jumlah tiap row bebas, minimal 1
  [7,8,9]
];

rotasi 2 kali
[
  [9,10,1],
  [2,3,4,5], // jumlah tiap row bebas, minimal 1
  [6,7,8]
];
*/

/*
cara simpelnya:
1. buat array 2 d nya menjadi 1 dimensi
    [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10 ] ] => [1,2,3,4,5,6,7,8,9,10]
2. clone array 2 d nya => new2d
    new array 2 d
3. rotate array 1 dimensinya
    misal rotasi 2 kali, hasilnya jadi: [9,10,1,2,3,4,5,6,7,8]

4. ubah setiap value dari new2d, ganti dengan hasil rotasi
new2d = 
[
  [9, 10 , 1],
  [ 2  , 3, 4, 5], // jumlah tiap row bebas, minimal 1
  [ 7  , 8, 9]
];
*/

console.log('array : ', array2d); // [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10 ] ]
console.log('rotasi ke-1 : ', rotate(array2d, 1)); // output: [ [ 10, 1, 2 ], [ 3, 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log('rotasi ke-2 : ', rotate(array2d, 2)); // output: [ [ 9, 10, 1 ], [ 2, 3, 4, 5 ], [ 6, 7, 8 ] ]
console.log('rotasi ke-12 : ', rotate(array2d, 12)); // output:  [ [ 9, 10, 1 ], [ 2, 3, 4, 5 ], [ 6, 7, 8 ] ]