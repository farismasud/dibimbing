const getDataUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // lanjut disisi
            const condition = true
            if (condition) {
                resolve ({
                    name : "John", 
                    age : 25
                })
            } else {
                reject ("error")
            }
        }, 2000);
    });
}

  // disini manggil getDataUser
getDataUser()
    .then((data) => {
        console.log(data)
        console.log(`My name is ${data.name} and I'm ${data.age} years old`)
    })
    .catch((err) => {
        console.log(err)
    })