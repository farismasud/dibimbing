// fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json => console.log(json))
//         .catch(error => console.log(error))

//best practice
const getDataUser = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await res.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}
getDataUser()

// const getDataUser = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const json = await res.json()
//     console.log(json)
// }
// getDataUser()
