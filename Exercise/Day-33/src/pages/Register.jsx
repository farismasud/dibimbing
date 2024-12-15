import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Register = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleChangeName = (a) => {
        setUserName(a.target.value)
        // console.log(a.target.value)
    }
    const handleChangePassword = (a) => {
        setPassword(a.target.value)
        // console.log(a.target.value)
    }
    const handleLogin = () => {
        
    const payload = {
        username : userName,
        password : password
    }

    axios
        .post("https://dummyjson.com/auth/login", payload)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('access_token', res?.data?.token)
            setTimeout(() => {
            navigate('/')
            }, 2000)
        })
        .catch((err) => {
            console.log(err.response)
            console.log(err?.response?.data?.error)
        })
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <div style={{ marginBottom: '20px' }}>
                    <p>username</p>
                    <input onChange={handleChangeName} type="text" placeholder='username' style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px' }}/>
                    <p>Password</p>
                    <input onChange={handleChangePassword} type="password" placeholder='password' style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '20px' }}/>
                    <button onClick={handleLogin} style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to='/login'>Already have an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Register