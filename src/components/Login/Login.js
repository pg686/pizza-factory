import { useNavigate } from 'react-router-dom';
import {useContext , useState} from 'react';
import * as authService from '../../services/authServices.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import { useNotificationContext,types } from '../../contexts/NotificationContext.js';
import { validateLogin } from '../../HelperValidate/validate.js';
import './Login.css';
const Login = () => {
    const [errors, setErrors] = useState({});
    const { login } = useAuthContext();
    const { addNotification} = useNotificationContext();
const navigate = useNavigate();
    const onLoginHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        const validateErrors =  validateLogin(email, password);
        if (Object.keys(validateErrors).length > 0) {
			setErrors(validateErrors);
			return;
		}
        authService.login(email,password)
        .then((authData) => {
            login(authData);
            addNotification(`Welcome, ${email}` , types.success)
            navigate('/dashboard');
        }).catch((err) => {
        addNotification("Email and password dont match" , types.error)
    })
    };

    return (
        <section id="login-page" className="login">
        <form id="login-form" onSubmit={onLoginHandler}>
            <fieldset>
                <legend>Login Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    
                    <span className="input">

                        <input type="text" name="email" id="email" placeholder="Email" />
                    </span>
                </p>
                {errors.email && (
						<span className="form-error">{errors.email}</span>
					)}
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">

                        <input type="password" name="password" id="password" placeholder="Password"/>
                        
                    </span>
                
                </p>
                {errors.password && (
						<p className="form-error">{errors.password}</p>
					)}
                <input className="button submit" type="submit" value="Login"/>
            </fieldset>
        </form>
    </section>
    );
};
export default Login;  