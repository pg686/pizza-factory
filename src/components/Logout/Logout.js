import  { Navigate } from 'react-router-dom';
import * as authService from '../../services/authServices.js';
const Logout = ({onLogout}) => {
authService.logout();
onLogout();

return <Navigate to="/login" />;
};
export default Logout;