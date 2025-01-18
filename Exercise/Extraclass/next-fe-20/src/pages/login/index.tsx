import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { setCookie } from 'cookies-next'


function LoginPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

   const handleLogin = () => {
    axios
        .post('https://api-bootcamp.do.dibimbing.id/api/v1/login', formData, {
        headers: {
            'Content-Type': 'application/json',
            apiKey: process.env.NEXT_PUBLIC_API_KEY ?? '',
        },
        })
        .then((res) => {
            setCookie('token', res.data.token)
            router.push('/')
        })
    }
    return (
    <div>
        <input 
        type="email" 
        placeholder='email' onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />

        <input 
        type="password" 
        placeholder='password' onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        <button onClick={handleLogin}>Login</button>
    </div>
    )
}

export default LoginPage