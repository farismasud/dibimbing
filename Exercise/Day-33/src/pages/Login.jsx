import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
    const [form, setForm] = useState({
        username: "", 
        password: ""
    })
    
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setError('');
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        })
    }
    const handleLogin = () => {
        setLoading(true)
    axios
        .post("https://dummyjson.com/auth/login", form)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('access_token', res.data.accessToken)
            localStorage.setItem('refresh_token', res.data.refreshToken)
            setSuccess('login success')
            setTimeout(() => {
            navigate('/')
            }, 2000)
        })
        .catch((err) => {
            console.log(err.response)
            console.log(err?.response?.data?.error)
            setError('login failed')
        })
        .finally(() => {
            setLoading(false)
        }) 
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ textAlign: 'center' }}>Login</h1>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}

                <div style={{ marginBottom: '20px' }}>
                    <p>username</p>
                    <input onChange={handleChange} name="username" type="text" placeholder='username' style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px' }}/>
                    <p>Password</p>
                    <input onChange={handleChange} name="password" type="password" placeholder='password' style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '20px' }}/>
                    <button onClick={handleLogin} style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Login
                    </button>
                    {loading && <p>Loading...</p>}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to='/register'>create an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login