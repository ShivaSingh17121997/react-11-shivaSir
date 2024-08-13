import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import PrivateRoutes from './PrivateRoutes'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PrivateRoutes>< Home /></PrivateRoutes>} />

                <Route path="/contact" element={<PrivateRoutes><Contact /></PrivateRoutes>} />

                <Route path="/about" element={<PrivateRoutes><About /></PrivateRoutes>} />

                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}
