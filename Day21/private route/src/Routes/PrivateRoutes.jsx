import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContextProvider } from '../Context/AuthContext'

export default function PrivateRoutes({ children }) {

    const { isAuth } = useContext(authContextProvider);

    if (!isAuth) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            {children}
        </div>
    )
}
