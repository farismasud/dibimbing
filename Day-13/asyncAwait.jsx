const getDataUser = async () => {
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
dataUser = async () => {
    let data = await getDataUser()
    console.log(data)
}
dataUser()