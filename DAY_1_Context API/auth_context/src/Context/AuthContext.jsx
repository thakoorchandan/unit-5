import React from 'react'
import { createContext, useState } from "react";

export const AuthContext = createContext("");

function Auth({ children }) {
    const [token, setToken] = useState("");

    return (
        <AuthContext.Provider value={{token, setToken}} >
            {children}
        </AuthContext.Provider>
    )
}

export default Auth;
