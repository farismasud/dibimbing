const fruits = ["apple", "banana", "orange", "pineapple", "mango"];
// fruits.forEach((fruit) => console.log(fruit));

for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
} 

// method push menambahkan data di akhir array
fruits.push("guava");
console.log(fruits)

// method unshif menambahkan data di awal array
fruits.unshift("watermelon");
console.log(fruits)

// method shift menghapus data di awal array
fruits.shift();
console.log(fruits)

// method pop menghapus data di akhir array
fruits.pop();
console.log(fruits)

// ganti isi array
fruits[1] = "pear";
console.log(fruits)

// cari index
const findIndex = fruits.indexOf("apple");
console.log(findIndex)

// splice
fruits.splice(1, 2);
console.log(fruits)