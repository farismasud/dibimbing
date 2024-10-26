/* 
  Author: zikrimansyursyah
  
  Case : tugas anda adalah mencari kombinasi unik dari sebuah huruf pada string

  Example Input: xyz

  Expected Output: ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"]

  Notes: 
  - tampikan expected output dengan console.log()
*/

function cariKataKombinasi(string){ // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let result = [];
  let arr = string.split('');
  let n = arr.length;
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  for (let i = 0; i < factorial; i++) {
    let temp = '';
    for (let j = 0; j < n; j++) {
      temp += arr[(i + j) % n];
    }
    result.push(temp);
  }

  return result; // kembalikan hasil logika disini
}

// TEST CASE
console.log(cariKataKombinasi('abc'))
console.log(cariKataKombinasi('zzz'))
console.log(cariKataKombinasi('wow'))
console.log(cariKataKombinasi('cool'))