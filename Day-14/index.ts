// console.log(1 + "1");
// console.log(null + 1);

console.log("hello world");

// defined variable, string, boolean, number
// assign methods, new value yang tidak sesuai dengan type

// Mendefinisikan variabel dengan tipe data
let nama: string = "Faris Mas'ud"; // Tipe string
let umur: number = 23; // Tipe number
let isActive: boolean = true; // Tipe boolean

// Menampilkan nilai awal
console.log(`Name: ${nama}, Age: ${umur}, Active: ${isActive}`);

// Mengubah nilai variabel dengan tipe yang sesuai
nama = "Faris Masud"; // Valid
umur = 24; // Valid
isActive = false; // Valid

// Menampilkan nilai yang telah diubah
console.log(`Updated Name: ${nama}, Updated Age: ${umur}, Active: ${isActive}`);

// Contoh penugasan yang tidak sesuai dengan tipe
// name = 123; // Error: Type 'number' is not assignable to type 'string'.
// age = "thirty"; // Error: Type 'string' is not assignable to type 'number'.
// isActive = "yes"; // Error: Type 'string' is not assignable to type 'boolean'.


// Mendefinisikan fungsi penjumlahan
function penjumlahan(a: number, b: number): number {
    return a + b;
}

// Menggunakan fungsi penjumlahan
const hasil = penjumlahan(5, 10);
console.log(`Hasil penjumlahan: ${hasil}`); // Output: Hasil penjumlahan: 15


let data: any = 'your name'
data = true

type User = {
    name: string;
    age: number;
    isActive: boolean;
};

function createUser(user: User): User {
    return user;
}

createUser({
    name: 'Faris Masud',
    age: 23,
    isActive: true
})

type getError = {
    status: string;
    message: string;
};

function handleError(): getError {
    return {status: "berhasil", message: "data benar."
    };
}

//=======================================================================
type Obj = {
    name: string;
};

let cars: string[] = ["Toyota", "Honda", "Mitsubishi"];
let cars2: number[] = [1, 2, 3];
let cars3: boolean[] = [true, false, true]
//let objCars: object[] = [{name: "Toyota"}, {name: "Honda"}, {name: "Mitsubishi"}]


let obj: Obj[] = [
    {name: "Toyota"}, 
    {name: "Honda"}, 
    {name: "Mitsubishi"}
]
// Union
let status: 'active' | 'inactive' | 'pending';
let status2: string | number = "test";


//Uknown
let data10: unknown
data10: "test"

if(typeof data10 === "string") {
    data10.toUpperCase();
}


export{}