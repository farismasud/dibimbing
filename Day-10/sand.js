// linier search
// function linierSearch(data, key)  {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] === key) {
//             return `Key ${key} found at index ${i}`
//         }
//     }
//     return -1;
// }

// const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(linierSearch(data1, 5))
// console.log('===========================')

// // binary search with while
// function binarySearch(sortedArray, target) {
//     let left = sortedArray[0];
//     let right = sortedArray.length -1;
    
//     while (left <= right) {
//         // console.log(left, right);
//         let tengah = Math.floor((left + right) / 2)
//         // console.log(tengah);
//         if ( target == sortedArray[tengah]) {
//             return sortedArray[tengah]
//         } else if (sortedArray[tengah] < target) {
//             left = tengah +1
//         } else {
//             right = tengah -1
//         }
//         // break;
//     } 
//     return `data tidak ditemukan`
// }

// const data = [1, 10, 3, 22, 5, 6, 7, 8, 9];
// console.log(binarySearch(data, 6))
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const kata = ['hello', 'saya', 'adalah', 'programmer'];
let cari = data.indexOf(7)
console.log(cari)
console.log(kata.indexOf('programmer'));

const buah = ['apel', 'jeruk', 'mangga', 'durian', 'nanas'];
let res = buah.filter((buah) => buah.includes('a'));

console.log(res)

// .indexOf() -> return "index"
// .find() -> nilai pertama ketemu "value"
// .findindex() -> index pada nilai pertama ketemu "index"
// .includes() -> mengembalikan nilai yang terkandung "boolean"
// .filter() -> mengembalikan semua nilai yang dicari dan ditempatkan dalam bentuk "array"