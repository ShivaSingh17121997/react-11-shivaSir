import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import PrivateRoute from './PrivateRoute'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />
                <Route path='/login' element={<Login />} />

            </Routes >
        </div>
    )
}


// flow of redux action (obj)  ==> reducer  ==> state update(store)