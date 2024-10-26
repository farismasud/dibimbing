// 3. Custom Sort
// [INSTRUCTIONS]
// Anda diminta untuk mengurutkan data dengan ketentuan sebagai berikut
// - Urutkan berdasarkan frekuensi kemunculan (yang lebih sering muncul taruh dibagian paling depan).
// - Jika dua atau lebih string memiliki frekuensi kemunculan yang sama, urutkan  ascending.

console.log(
  customSort([
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
    "orange",
    "banana",
    "banana",
  ])
); //clear
// Output:
// ["banana", "banana", "banana",  "banana", "apple", "apple", "apple", "orange", "orange"]  
console.log(customSort(["a", "b", "a", "c", "b", "a", "c", "b"])); // clear
// Output:
// ["a", "a", "a", "b", "b", "b", "c", "c"]
console.log(customSort([1, 2, 3, 1, 4, 1, 5, 6, 2, 7, 4, 2, 2])); // clear
// Output:
// [2, 2, 2, 2, 1, 1, 1, 4, 4, 3, 5, 6, 7]

function customSort(data) {
    // Hitung frekuensi kemunculan setiap elemen
    const frequencyCount = {};
    
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      frequencyCount[element] = (frequencyCount[element] || 0) + 1;
    }

    // Urutkan berdasarkan frekuensi menggunakan perbandingan langsung dan pergeseran
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
          if (frequencyCount[data[j]] > frequencyCount[data[i]]) {
          // Tukar posisi elemen
          const temp = data[i];
              data[i] = data[j];
              data[j] = temp;
              }
          }
      }
      //Kembalikan hasil
      return data;
}