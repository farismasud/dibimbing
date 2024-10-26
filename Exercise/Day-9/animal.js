class Animal {
    constructor(name){
        this.name = name
    }
    speak(){
        return `${this.name} makes a noise`  
    }
}
class Cat extends Animal {
    speak() {
        return `${this.name} meows`
    }
    eat() {
        return `${this.name} eats food`
    }
}
const myCat = new Cat('Whiskers');

console.log(myCat.speak())   
console.log(myCat.eat())