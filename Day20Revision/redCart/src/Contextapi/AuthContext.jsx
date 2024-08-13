import React, { createContext, useState } from 'react'

 export const authContext = createContext();

export default function AuthContext({ children }) {
    const [token, setToken] = useState(null);
    console.log(token, "from context")

    const login = (token) => {
        setToken(token)

    }

    const logout = () => {
        setToken(null)

    }


    return (
        <div>
            <authContext.Provider value={{ login, logout, token }} >
                {children}
            </authContext.Provider>

        </div>
    )
}
