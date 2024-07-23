import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='Navbar' >
            <Link to="/" >Home</Link>

            <Link to="/cart">Cart</Link>

            <Link to="/contacts" > Contacts</Link>

            <Link to="/login" > Login</Link>

            <Link to="/signup" > Signup</Link>
        </div>
    )
}
