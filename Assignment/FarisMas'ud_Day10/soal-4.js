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
    return this.price * this.qty;
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
    let cartDetail = [];
    for (let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      cartDetail[i] = {
        name: product.name,
        qty: product.qty,
        price: product.price,
      };
    }
    return cartDetail; // mengembalikan detail cart
  }

  getTotal() {
    // code for get total
    this.total = 0; // reset total
    for (let i = 0; i < this.products.length; i++) {
      this.total += this.products[i].getTotalPrice();
    }
    return this.total; // mengembalikan total
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
    if (this.money >= this.totalPay) {
      let change = this.money - this.totalPay;
      this.paymentResult = change > 0 ? `Payment Success, your change is ${change}` : `Payment Success!!`; // jika change > 0, payment success
    } else {
      this.paymentResult = "Sorry, your money is not enough!!"; // jika change < 0, payment gagal
    }
    return this.paymentResult; // mengembalikan payment
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
