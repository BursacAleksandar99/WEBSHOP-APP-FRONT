import { createContext, useEffect, useState } from "react";

export const AuthContext= createContext("");


export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        status: false,
        username: '',
        id: 0
    });

    useEffect(() =>{
        const token = localStorage.getItem('token');
        if(token){
            setAuthState({status: true, username: 'someUser', id: 1});
        }
    }, []);

    return( 
        <AuthContext.Provider value={{authState, setAuthState}}>
        {children}
        </AuthContext.Provider>
    )
}


