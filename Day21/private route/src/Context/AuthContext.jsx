import React, { createContext, useState } from 'react'

export const authContextProvider = createContext();
export default function AuthContext({ children }) {

    const [token, setToken] = useState(null)
    const [isAuth, setIsAuth] = useState(false)

    console.log(token, isAuth)

    const login = (token) => {
        setToken(token);
        setIsAuth(true)
    }


    const logout = () => {
        setIsAuth(false)
        setToken(null)

    }

    return (
        <div>
            <authContextProvider.Provider value={{ login, logout, token, isAuth }} >
                {children}
            </authContextProvider.Provider>

        </div>
    )
}
