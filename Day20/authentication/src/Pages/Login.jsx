import React, { useState } from 'react'
import axios from "axios";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = () => {
        axios.post("https://reqres.in/api/login", { email, password })
            .then((res) => {
                console.log(res.data.token)
            })
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

            <input type="text" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />

            <button onClick={handleLogin} >Login</button>

        </div>
    )
}






























































// import React, { useState } from 'react'

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");


//     const handleLogin = () => {
//         const signupEmail = localStorage.getItem('email')
//         const signupPassword = localStorage.getItem('password')

//         console.log(signupEmail, signupPassword)


//         if (email === signupEmail && password === signupPassword) {
//             alert("login successfull")
//         } else {
//             alert("your email or password is incorrect")
//         }

//     }
//     return (
//         <div>
//             <h1>Login</h1>
//             <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

//             <input type="text" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />

//             <button onClick={handleLogin} >Login</button>

//         </div>
//     )
// }





