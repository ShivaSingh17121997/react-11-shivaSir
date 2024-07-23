import React from 'react'
import { useState } from 'react'

export default function EventHandle() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleform = (e) => {
        e.preventDefault()
        console.log(email, password)
        setEmail("")
        setPassword("")

    }

    const handleClick = () => {
        alert("button is clicked")
       
    }

    return (
        <div>
            <form onSubmit={handleform} >

                <input type="text" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />

                <input type="text" value={password} placeholder='pass' onChange={(e) => setPassword(e.target.value)} />



                <button>submit</button>

            </form>

            <select  >
                <option value=""></option>
                <option value=""></option>
            </select>

            <input  type="checkbox" />

            <button onClick={handleClick} >click</button>

            <div>email:{email}</div>
            <div>password:{password}</div>
        </div>
    )
}
