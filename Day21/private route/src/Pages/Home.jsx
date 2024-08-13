import React, { useContext } from 'react'
import { authContextProvider } from '../Context/AuthContext'

export default function Home() {

    const { token, logout } = useContext(authContextProvider);

    return (
        <div>
            <h1>Home</h1>
            <button onClick={logout} >Logout</button>
            <h1>{token}</h1>
        </div>
    )
}
