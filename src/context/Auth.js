import React, { createContext, useState, useEffect } from 'react';
import {
    setAuthStorage,
    getAuthStorage,
    removeAuthStorage,
  } from "./../utils/auth";

export const AuthContext = createContext({
    auth : null,
    authenticate : () => {},
    logout : () => {}
});

const { Provider } = AuthContext;

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null); // Guarda el token
    
    useEffect(() => {
        const authenticatedData = getAuthStorage();
        if (authenticatedData) setAuth(authenticatedData);
      }, []);

    // Si en Login, user y pass son correctos se pasan a la función authenticate 
    const authenticate = (user, password) => {
        const response = { name: user, token: "randomApiToken" };
        setAuth(response);
        setAuthStorage(response);
    }

    const logout = () => {
        setAuth(null);
        removeAuthStorage();
    }

    return <Provider value={{ auth, authenticate, logout }}>{children}</Provider>;
}