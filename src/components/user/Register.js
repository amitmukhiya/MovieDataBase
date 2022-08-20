import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css'

export default function Register() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const registerUser = (event) => {
        event.preventDefault()
        password === password1 ? fetch('https://mbase.netlify.app/api/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                password,
                password1
            })
        }): alert('Your password did not match!')

    }
    return (
        <div className="register">
            <h1 className="registerPage">Register</h1>
            <form className="form" onSubmit={registerUser} >
                <input
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    type="text"
                    placeholder="First Name"
                    required
                />
                <input
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    type="text"
                    placeholder="Last Name"
                    required
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    placeholder="Re type Password"
                    required
                />
                <input id="btn" type="submit" value="Sign Up" />
            </form>
            <Link id="link" to="/login">Already have an Account ?</Link>
        </div>
    );
}
