import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Aboute from '../Pages/Aboute'
import Contact from '../Pages/Contact'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<Aboute />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}
