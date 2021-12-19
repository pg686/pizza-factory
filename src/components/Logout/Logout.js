import  { Navigate, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import { useContext , useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext.js';
const Logout = ({onLogout}) => {
    const navigate = useNavigate();
    const { user, logout } =useAuthContext();
useEffect(() => {
    authService.logout(user.accessToken)
    .then(()=> {
        logout();
        navigate('/dashboard');
    });
});


return null;
};
export default Logout;