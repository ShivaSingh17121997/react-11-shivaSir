import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor:"skyblue" , padding:"20px" }} >
            <Link to="/" >Todo</Link>
            <Link to="/login" >Login</Link>
        </div>
    )
}
