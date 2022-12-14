import React, { Children, useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const {user,loading } = useContext(AuthContext);
   
    const location = useLocation()

    
    if(!user){
        return <Navigate to ={'/login'} state={{from: location}} replace></Navigate>
    }
    return children
};

export default PrivateRoute;