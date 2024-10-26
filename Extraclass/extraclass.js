// function array(){
//     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//     let tengah = Math.floor(array.length / 2)

//     let nilaiTengah = array[tengah]  
//     return nilaiTengah
// }
// console.log(array())


// function getMiddle (param) {
//     const length = param.length
//     if(length % 2 === 0) {
//         const result = (length + 1) / 2
//         return result
//     } else {
//         const result = (length + 1) / 2
//         return result
//     }
// }
// console.log(getMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //5.5
// console.log(getMiddle([1, 2, 3, 4, 5, 6])) // 3.5
// console.log(getMiddle([1, 2, 3, 4, 5])) //3

// psuedocode getMiddle
// - Cari panjang array (menggunakan length)
// = lalu ceka apakah ganjil atau genap
// jika ganjil panjang array tambah 1 dibagi 2
// jika genap panjang array tambah 1 dibagi 2
// keluarkan nilai

// FizzBuzz
var fizzBuzz = function(n) {
    for (let i = 0; i <= n; i++) {
        if((i % 3 === 0) && (i % 5 === 0)) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
    return n
};
fizzBuzz(15)

//two sum
var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++){
        for (let j = 1; j < nums.length; j++) {
            if (nums[i]+nums[j] === target) {
                return[i,j]
            }
        }
    }
};