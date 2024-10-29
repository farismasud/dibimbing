function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
/*2.Soal 2

Buat fungsi wrapInArray yang menggunakan generic type untuk mengubah input menjadi array. Fungsi ini menerima satu parameter item dengan tipe T dan mengembalikan sebuah array berisi item tersebut.
Gunakan generic type T untuk mendefinisikan tipe parameter input dan hasil return. */
function wrapInArray(item) {
    return [item];
}
