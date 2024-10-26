const _ = require('lodash')

const fruits = ['apple', 'banana', 'mango']

// function mapFruits(fruit) {
//     console.log(fruit)
// }
// fruits.map(mapFruits)

fruits.map((fruit) => console.log(fruit))

_.each(fruits, (fruit) => console.log(fruit))

console.log("==================================================")

const fruits2 = [
    {
        name: 'apple',
        color: 'red',
        price: 10000,
    },
    {
        name: 'banana',
        color: 'yellow',
        price: 20000,
    },
    {
        name: 'mango',
        color: 'green',
        price: 30000,
    }, 
]

// map
const mapFruits2 =  fruits2.map((x) => x.price)
console.log(mapFruits2)

const mapFruits2WithLodash = _.map(fruits2, 'name')
console.log(mapFruits2WithLodash)

// filter
const filterFruits2 = fruits2.filter((x) => x.price > 20000)
console.log(filterFruits2)

const filterFruits2WithLodash = _.filter(fruits2, (x) => x.price > 10000)
console.log(filterFruits2WithLodash)