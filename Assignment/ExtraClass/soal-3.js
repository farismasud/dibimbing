function alternatingCharacters(s) {
    let deletions = 0;
    
    for (let i = 1; i < s.length; i++) {
        // ini untuk mengecek jika karakter sebelumnya sama dengan karakter index sekarang jadi tambah 1
        if (s[i] === s[i - 1]) {
            deletions++;
        }
    }
    return deletions;
}

console.log(alternatingCharacters('AABAAB')); 
// Ini sample di soal
console.log(alternatingCharacters('AAAA')); 
console.log(alternatingCharacters('BBBBB')); 
console.log(alternatingCharacters('ABABABAB'));
console.log(alternatingCharacters('BABABA')); 
console.log(alternatingCharacters('AAABBB'));

