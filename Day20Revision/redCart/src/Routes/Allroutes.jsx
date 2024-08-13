import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Form from '../Pages/Form';
import Login from '../Pages/Login';
import SingleProductpage from '../Pages/SingleProductpage';
import PrivateRoutes from './PrivateRoutes';

export default function Allroutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <PrivateRoutes>
                        <Home />
                    </PrivateRoutes>
                } />




                <Route path='/about' element={<PrivateRoutes><About /></PrivateRoutes>} />


                <Route path='/Contact' element={<PrivateRoutes><Contacts /></PrivateRoutes>} />


                <Route path='/form' element={<PrivateRoutes><Form /></PrivateRoutes>} />


                <Route path='/login' element={<Login />} />


                <Route path='/singleproductpage' element={<SingleProductpage />} />

            </Routes>
        </div>
    )
}
