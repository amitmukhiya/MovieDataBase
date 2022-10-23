import React, { useState } from 'react'
import "./Register.css"
import { Link , useNavigate} from 'react-router-dom'
import authService from "../authentication/Authentication";
import { NotificationManager } from 'react-notifications';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const loginUser = async (event) => {
        event.preventDefault()
        // https://moviedbackend.herokuapp.com

        const userData={
            email, 
            password
        }
        const res=await authService.login(userData)
        
        if(res.data){
            NotificationManager.success(`Welcome ${res.data.name}`, 'Login Successful', 2000);
            navigate('/')
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
