import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {

    const stoer = useSelector((store) => console.log(store));
    console.log(stoer)


    // if (!isAuth) {
    //     return <Navigate to="/login" />
    // }

    return (
        <div>
            {children}
        </div>
    )
}



// 