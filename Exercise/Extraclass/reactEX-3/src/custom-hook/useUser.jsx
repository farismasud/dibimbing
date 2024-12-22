import { useState } from 'react'
import axios from 'axios'

const useUser = () => {
const [data, setData] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            // console.log(res.data.data)
            setData(res.data)
        } catch (err) {
            console.log(err.response)
        }
    }

    return {
        setData,
        data,
        getData,
    }    
}
export default useUser