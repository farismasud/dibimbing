let user = {
    _name: 'John',
    _userName: 'john123',

    get name() {
        return `${this._name}`
    },

    set updateName(value) {
        this._name = value
    },
}

user.updateName = 'lala'
console.log(user.name)

// let test = user.name = "lala"
// console.log(user.name)
// console.log(test)

// let object = {}
// object.name = 'lili'
// console.log(object)