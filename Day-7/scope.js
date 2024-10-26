// import { name, age } from './export.js'
const profil = require('./export.js')
let globalVar = 'ini adalah global variable'

function myFunction(arguments) {
    let functionVar = 'ini adalah function variable'
    var tipeVar = 'ini adalah tipe var variable' 

    if (arguments) {
        let scopeVar = 'ini adalah scope variable'

        console.log(`Inside if block: ${globalVar}, ${functionVar}, ${scopeVar}, ${tipeVar}`)
    } else {
        let scopeVar = 'ini adalah scope variable2'

        console.log(`Inside else block: ${globalVar}, ${functionVar}, ${scopeVar}, ${tipeVar} 2`)
    }
}

myFunction(false)
console.log(profil)
