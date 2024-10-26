/* ===== Assignment ===== **/
// note:
// tidak boleh menggunakan javascript method, sebisamungkin gunakan metode manual
// setiap penggunaan javascript method akan dikurangi poinnya -3
// .push() .pop() .shift() .unshift() Math. 

// ---------------------------------------------------------------------
// 1. SearchThree
// [INSTRUCTIONS]
// - Anda diminta untuk membuat sebuah function untuk mencari angka yang mengandung angka 3 dari data dibawah
// - kemudian jumlahkan berapa banyak angka 3 tersebut
console.log(
  SearchThree([
    [10, 20, 30, 40, 50],
    [30, 11, 3, 13, 24],
    [12, 13, 44, 93, 21],
    [[11, 20], [33], [3]],
  ])
);
// output: Dari data tersebut terdapat angka 3 berjumlah 9 character
console.log(
  SearchThree([
    [[1133, 210], [50]],
    [13, 2, 3, 77, 60],
    [23, 1, 4, 3, 55],
    [[3, 200], [333]],
  ])
);
// output: Dari data tersebut terdapat angka 3 berjumlah 10 character
console.log(SearchThree([[31, 20, 98, 36, 333]]));
// output: Dari data tersebut terdapat angka 3 berjumlah 5 character
console.log(SearchThree([]));
// output: Data kosong!

function SearchThree() {
  // here your code
}

// ---------------------------------------------------------------------
// 2. graduates
// [INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk menentukan dan mengelompokan kelulusan, dengan ketentuan sebagai berikut
// - dikempokan berdasarkan kelas
// - data yang ditampilkan yang memiliki nilai minimal 75
// - jika data tidak ada, maka return  kosong

// TEST CASE
console.log(
  graduates([
    { name: "Luffi", score: 90, class: "2A" },
    { name: "Sanji", score: 85, class: "2C" },
    { name: "Zoro", score: 74, class: "2A" },
    { name: "Usop", score: 78, class: "2C" },
    { name: "Chopper", score: 89, class: "2C" },
  ])
);
//OUTPUT
// Dari kelas 2A terdapat 1 orang yang dinyatakan Lulus yaitu Luffi
// Dari kelas 2C terdapat 3 orang yang dinyatakan Lulus yaitu Sanji, Usop dan Chopper

console.log(
  graduates([
    { name: "Naruto", score: 100, class: "ninja" },
    { name: "Sarada", score: 76, class: "berkebun" },
    { name: "Sasuke", score: 92, class: "ninja" },
    { name: "Lee", score: 71, class: "olahraga" },
    { name: "Shikamaru", score: 80, class: "catur" },
  ])
);
//OUTPUT
// Dari kelas ninja terdapat 2 orang yang dinyatakan Lulus yaitu Naruto dan sasuke
// Dari kelas olahraga terdapat 1 orang yang dinyatakan Lulus yaitu Sarada
// Dari kelas catur terdapat 1 orang yang dinyatakan Lulus yaitu Shikamaru

console.log(graduates([]));
//OUTPUT
// Data kosong!!

function graduates() {
  // here your code
}

// ---------------------------------------------------------------------
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
);
// Output:
// ["banana", "banana", "banana",  "banana", "apple", "apple", "apple", "orange", "orange"]
console.log(customSort(["a", "b", "a", "c", "b", "a", "c", "b"]));
// Output:
// ["a", "a", "a", "b", "b", "b", "c", "c"]
console.log(customSort([1, 2, 3, 1, 4, 1, 5, 6, 2, 7, 4, 2, 2]));
// Output:
// [2, 2, 2, 2, 1, 1, 1, 4, 4, 3, 5, 6, 7]

function customSort(data) {
  // here your code
}

// ---------------------------------------------------------------------
// 4. Ecommerce
// [INSTRUCTIONS]
// Lengkapi kode berikut sehingga dapat memenuhi testcase dibawah
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.qty = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Class for Shooing Cart
class ShoppingCart {
  constructor() {
    this.products = [];
    this.cart = [];
    this.total = 0;
  }

  addProduct(product) {
    this.products.push(product);
  }

  getCartDetail() {
    // code for detail cart
    return this.cart;
  }

  getTotal() {
    // code for get total
    return this.total;
  }
}

// Class for Checkout
class Checkout {
  constructor(money, totalPay) {
    this.money = money;
    this.totalPay = totalPay;
    this.paymentResult = "";
  }

  transaction() {
    // code for transaction

    return this.paymentResult;
  }
}

// Testcase
// The product (name, price, qty)
const product1 = new Product("Laptop", 10000000, 2);
const product2 = new Product("Mouse", 200000, 1);
const product3 = new Product("Mouse Pad", 50000, 1);
const product4 = new Product("Kopi", 40000, 10);

const cart = new ShoppingCart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.addProduct(product4);

const cartTotal = cart.getTotal();

// Payment
const pay1 = new Checkout(30000000, cartTotal);
const pay2 = new Checkout(20650000, cartTotal);
const pay3 = new Checkout(10000000, cartTotal);

// poin 1
console.log(pay1.transaction()); // Payment Success, your change is 9350000
console.log(pay2.transaction()); // Payment Success!!
console.log(pay3.transaction()); // Sorry, your money is not enough!!

// pont 2
console.table(cart.getCartDetail());
// output
// ┌─────────┬─────────────┬─────┬──────────┐
// │ (index) │    Name     │ Qty │  Price   │
// ├─────────┼─────────────┼─────┼──────────┤
// │    0    │  'Laptop'   │  2  │ 20000000 │
// │    1    │   'Mouse'   │  1  │  200000  │
// │    2    │ 'Mouse Pad' │  1  │  50000   │
// │    3    │   'Kopi'    │ 10  │  400000  │
// └─────────┴─────────────┴─────┴──────────┘
