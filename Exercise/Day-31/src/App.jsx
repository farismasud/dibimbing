import { useState, useEffect } from 'react'
import axios from "axios";

function App() {
  const [products, setProducts] = useState([])
  const [user, setUser] = useState([])

  //get data product Use promise
  const getData = () => {
    axios
    .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
    .then(res => {
      console.log("res", res)
      setProducts(res.data)
    })
    .catch(err => {
      console.log("err", err)
    })
  }

  // Get data user with async await
  const getDataUser = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/users?offset=0&limit=10")
      setUser(res.data) 
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    getData()
    getDataUser()
  }, [])

  return (
    <>
      <h1>data</h1>
      {/* Products */}
      {
        products.map(product => {
          return (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img src={product.images[0]} alt="" width={100}/>
            </div>
          )
        })
      }
      
      {/* User */}
      {
        user.map(user => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <img src={user.avatar} alt="" width={100}/>
            </div>
          )
        })
      }
    </>
  )
}

export default App
