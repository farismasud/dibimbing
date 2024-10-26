function contohOperator(a, b, ...x) {
    console.log(x)
    x.map((number) => console.log(number))
    const filterX = x.filter((number) => number > 5)
    console.log(filterX)
}

contohOperator(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log("============================================")

const student = {
    name: 'budi',
    age: 22,
    status: 'active',
}

const { name, age, status } = student
console.log('Name: ' + name, 'Age: ' + age, 'Status: ' + status)
////////////////////
const fruits = [
    'banana', 
    'semangka', 
    'apel'
]

const [banana, semangka, apel] = fruits
console.log('buah: ' + banana,'buah: ' + semangka,'buah: ' + apel)


console.log("============================================")

const teacher = {
    name: "budi",
    pelajaran: "Tik",
    umur: 22,
    alamat: "Jl. Jend. Sudirman",
    status: "active",
    car: "supra"
}

const {name: teacherName, pelajaran, ...propertySisa} = teacher
console.log(propertySisa) 

const teacher2 = ['budi', 'siti', 'susan', 'joko']
const [susi, susan, ...teacherSisa] = teacher2
console.log(teacherSisa)
