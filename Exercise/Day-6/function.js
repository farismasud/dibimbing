function greet(name) {
    console.log(`Hello World My name is`, name);
}
greet('John')

function add(a, b, c) {
    const result = a + b - c;

    return result
}

let hasilResult = add(1, 2, 2)
console.log(hasilResult)
console.log(add(2, 3, 2))

function isTrue(param) {
    if (param) {
        return true
    } else {
        return false
    }
}

console.log(isTrue(true))

console.log("==================================================")



let x = function (num) { 
    return num * 2 
}

const resultX = x(3)
console.log(resultX)

let hasilResult1 = function (num1, num2) {
    const result = num1 - num2

    if (result < 0) {
        return 
    } 
    return result
}

let arrow = (name) => {
    console.log(`Hello world my name is`, name);
}
arrow("Faris");

console.log("==================================================")

function greet2(name, callback){
    console.log(`Hello`, name);
    callback("Jakarta")
}

function callMe(address){
    console.log(address);f 
    console.log("I am call back function");
}
greet2("Faris", callMe)