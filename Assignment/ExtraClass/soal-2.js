function camelCase(s) {
    let count = 1 // ini nilai awal 

    for (let i = 0; i < s.length; i++) {
        //jika huruf kapital ditambah 1
        if (s[i] === s[i].toUpperCase()) { // jika dipakai toLowerCase cuma mengitung huruf kecil aja
            count++
        }
    }
    return count
}

console.log(camelCase("saveChangesInTheEditor"))
console.log(camelCase("oneTwoThree"))
