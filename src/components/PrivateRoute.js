import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../helpers/AuthContext";

const PrivateRoute = ({ children }) => {
    const { authState } = useContext(AuthContext);

    if(!authState || !authState.status){
        return <Navigate to='/login' replace/>
    }

    return children;
}

export default PrivateRoute;