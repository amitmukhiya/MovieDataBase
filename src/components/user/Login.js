import React, { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginUser = async (event) => {
        event.preventDefault();
        const response = await fetch('https://mbase.netlify.app/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
        const data = await response.json()
        console.log(data)
        if(data.status==='ok'){
            alert('login Successful')
        }else{
            alert('Please check your email and password')
        }

    }
    return (
        <div className='register'>
        <h1 className="registerPage">Login</h1>
            <form className="form" onSubmit={loginUser} >
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                />
                <input
                    type="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <input id='btn' type="submit" value="Login" />
            </form>
            <Link id='link' to="/register">New user? Create an Account</Link>
        </div>
    )
}
