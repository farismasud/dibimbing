/**
 * Show menu sesuai dengan "user role", ketentuan:
 * 
 * administrator:
 * - menu 1, menu 2, menu 3, menu 4, menu 5, menu 6, menu 7 (allowed)
 * 
 * admin:
 * - menu 1, menu 2, menu 3
 * 
 * member:
 * - menu 1, menu 2, menu 5
 */


/**
 * 1. Autentikasi   => login/tidak => user harus login (user harus terautentikasi)
 * 2. Autorisasi    => hak akses => wajib login => role user
 */

const prompt = require('prompt-sync')();

const role = prompt('Role user ? '); // user role
const menus = ["menu 1", "menu 2", "menu 3", "menu 4", "menu 5", "menu 6", "menu 7"]; // available menu

console.log(role); // gunakan "role" untuk mengecek menu yang ditampilkan/tidak

//*Best Practice
// variable rolePermission(object)
let rolePermission = {
    administrator: ["menu 1", "menu 2", "menu 3", "menu 4", "menu 5", "menu 6", "menu 7"],
    admin: ["menu 1", "menu 2", "menu 3"],
    member: ["menu 1", "menu 2", "menu 5"]
}
// console.log(rolePermission[role]);

// kalau pake for
for (let i = 0; i < menus.length; i++) {
    if(rolePermission[role].includes(menus[i])) {
        console.log(menus[i]);
    }
}

//? jawaban sendiri
// for (let i = 0; i < menus.length; i++) {
//         if(role === "administrator") {
//             console.log(menus[i]);
//         }
//         else if (role === "admin") {
//             if(menus[i] === "menu 1" || menus[i] === "menu 2" || menus[i] === "menu 3") {
//                 console.log(menus[i]);
//             }
//         }
//         else if (role === "member") {
//             if(menus[i] === "menu 1" || menus[i] === "menu 2" || menus[i] === "menu 5") {
//                 console.log(menus[i]);
//             }
//         }
// }