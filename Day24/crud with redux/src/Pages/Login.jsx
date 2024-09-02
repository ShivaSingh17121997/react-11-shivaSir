import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TOKEN } from '../Redux/ActionTypes';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    // const { token } = useSelector((store) => store.token)
    // console.log("token coming form store", token)

    const handleLogin = (e) => {
        e.preventDefault();

        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: TOKEN, payload: data.token })
                console.log(data.token)
            })

        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin} >
                <div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
                </div> <br />


                <div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password' />
                </div><br />


                <button>Login</button>


            </form>

        </div>
    )
}
