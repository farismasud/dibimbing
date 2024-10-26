// function countAge(lahir) {
//     // let year = new Date();
//     let tahun = getThisYear()
//     let umur = tahun - lahir
//     return umur
// }

// function getThisYear() {
//     let tahun = new Date().getFullYear()
//     return tahun
// }


// console.log(countAge(1991))
// console.log('++===========================++')

// function getData(param) {
//     return param
// }

// function renderName() {
//     return "Faris"
// }

// console.log(getData(renderName()))

//1. membuat function getData dengan argunemen param
//2. membuat function renderName dengan return faris
//3. return argunemnnya
// lalu console.log function getdata lalu callback rendername()


// function handleSay(callback) {
//     const name = 'faris'
//     const age = 23
//     return callback(name, age)
// }
    
// function handleGreeting(name, age) {
//     return `hello ${name}, umur saya ${age}`
// }
// console.log(handleSay(handleGreeting))

function mobil(callback) {
    const car = {
        merk: 'Toyoya Supra',
        type: 'M4',
        color: 'Black',
    }
    return callback(car.merk, car.type, car.color)
}

function superCar(merk, type, color) {
    return `Super Car: ${merk}, Tipe: ${type}, Warna: ${color}`
}

console.log(mobil(superCar))