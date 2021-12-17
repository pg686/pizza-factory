import  { Navigate, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import { useContext , useEffect } from 'react';
const Logout = ({onLogout}) => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
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