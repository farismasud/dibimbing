const person = {
    name: "Dibimbing",
    age: 17,
    address: {
        city: "Jakarta",
        country: "Indonesia"
    }
}

console.log(person)
console.log(person.address.city)

person.age = 22
person.job = "Frontend Developer"

delete person.address
console.log(person)

console.log("==============================================================")
/////////////////////////////////////////////////////////////////////////

const car = {
    name: "BMW",
    model: "X5",
    color: "Black",
    year: 2020,

    //menthod
    start: function() {
        console.log("start")
    },
    drive: function() {
        console.log("drive")
    },
    brake: function() {
        console.log("brake")
    },
    stop: function() {
        console.log("stop")
    }
}
console.log(car)
car.start()

console.log("==============================================================")
////////////////////////////////////////////////////////////////////////

function Car(type, model, color) {
    this.type = type
    this.model = model
    this.color = color
    
    this.start = function() {
        console.log("start")
    }
    this.drive = function() {
        console.log("drive")
    }
    this.brake = function() {
        console.log("brake")
    }
    this.stop = function() {
        console.log("stop")
    }
}

const fiaz = new Car("Sedan", "BMW", "Black")
const jazz = new Car("jazz", "All New", "Black")

console.log(fiaz)
console.log(jazz)

console.log("==============================================================")

const student2 = {
    nama: 'Faris',
    nilaiUjian: [80, 78, 85, 90, 75],
    rataNilaiUjian: 0,
    hitungRataNilaiUjian: function (){
        let total = 0;
        for (let i = 0; i < this.nilaiUjian.length; i++){
            total += this.nilaiUjian[i];
        }
        this.rataNilaiUjian = total / this.nilaiUjian.length;
    }
}
student2.hitungRataNilaiUjian(); 
console.log(student2);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(typeof array)
console.log(typeof student2)
