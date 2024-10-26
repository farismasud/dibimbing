function isPalindrome(param) {
    // Mengubah string menjadi huruf kecil, menghapus spasi, memisahkan menjadi array per karakter, lalu membalik urutan karakter.
    const reverseText = param.toLowerCase().replace(/\s+/g, '').split('').reverse();   
    //console.log(reverseText)
    
    // Bandingkan string asli dengan versi terbaliknya
    let length = reverseText.length;
    //console.log(length)
    for (let i = 0; i < length / 2; i++) {
      if (reverseText[i] !== reverseText[length - 1 - i]) {
        return false;
      } else {
        return true;
      }
    }
  }
  
  console.log(isPalindrome("Kasur rusak"));
  //contoh lain
  console.log(isPalindrome("malam"));
  console.log(isPalindrome("katak"));