import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    const handleSignup = () => {
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        console.log("data added successfully", email, password)
        navigate("/login")
    }


    return (
        <div>
            <h1>Signup</h1>

            <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

            <input type="text" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />

            <button onClick={handleSignup} >Signup</button>

        </div>
    )
}
