/**
 * counting sort (asc / desc)
 */

function countingSortAsc(arr){
    // tulis code di sini
    let count = [];
    for (let i = 0; i < arr.length; i++) {
        // create 0 if not exist
        if (!count[ arr[i] ]) {
            count[arr[i]] = 0;
        }
        // add value counter
        count[arr[i]]++
    }

    let resultSort = [];
    for (let i = 0; i < count.length; i++) {
        if (count[i] !== undefined) {
            
            for (let j = 1 ; j <= count[i] ; j++) {
                resultSort.push(i);
            }
        }
    }
    return resultSort
}

function countingSortDesc(arr){
    // tulis code di sini
    let count = [];
    for (let i = 0; i < arr.length; i++) {
        // create 0 if not exist
        if (!count[ arr[i] ]) {
            count[arr[i]] = 0;
        }
        // add value counter
        count[arr[i]]++
    }
}

let angka = [1,5,23,3,5,6,3,3,45,6,53,2,6,34,523,912];

console.log('dari kecil ke besar :', countingSortAsc(angka));

console.log('dari besar ke kecil :', countingSortDesc(angka));
