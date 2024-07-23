import React, { useState } from 'react'

export default function Form() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState({});
    const handleForm = (e) => {
        e.preventDefault()
        let error = {};

        if (!email.trim()) {
            error.email = "enter valid email id"
        }

        if (!password.trim()) {
            error.password = "enter a valid password"
        }


        setErrors(error)



    }
    return (
        <div>
            <form onSubmit={handleForm} >
                <input type="name" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email &&   <p style={{color:"red"}} >{errors.email}</p>}

                <input type="name" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <p style={{color:'red'}} >{errors.password}</p>}
                <button>submit</button>
            </form>
        </div>
    )
}
