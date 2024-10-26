/**
 * selection sort (asc / desc)
 */

function selectionSortAsc(arr) {
    // tulis code di sini
    let sort1 = arr.length;
    for (let i = 0; i < sort1 - 1; i++) {
      let min = i;
      for (let j = i + 1; j < sort1; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      // console.log(arr);
    }
    return arr;
  }
  
  function selectionSortDesc(arr) {
    // tulis code di sini
    let sort2 = arr.length;
    for (let i = 0; i < sort2 - 1; i++) {
      let max = i;
      for (let j = i + 1; j < sort2; j++) {
        if (arr[j] > arr[max]) {
          max = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[max];
      arr[max] = temp;
      // console.log(arr);
    }
    return arr;
  }

let angka = [1,5,23,3,5,6,3,3,45,6,53,2,6,34,523,912];

console.log('dari kecil ke besar :', selectionSortAsc(angka));

console.log('dari besar ke kecil :', selectionSortDesc(angka));
