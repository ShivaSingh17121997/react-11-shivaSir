import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Contacts from './Contacts';
import Login from './Login';
import Signup from './Signup';
import SingleProductPage from './SingleProductPage';

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/cart' element={<Cart />} />

                <Route path='/contacts' element={<Contacts />} />

                <Route path='/login' element={<Login />} />

                <Route path='/signup' element={<Signup />} />

                <Route path='/singleproduct' element={<SingleProductPage />} />

            </Routes>

        </div>
    )
}
