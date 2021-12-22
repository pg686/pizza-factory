import { AuthContext } from '../../contexts/AuthContext.js';
import * as authService from '../../services/authServices.js';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../contexts/AuthContext.js';
import {useContext , useState} from 'react';
import { validateRegister } from '../../HelperValidate/validate.js';
import { useNotificationContext,types } from '../../contexts/NotificationContext.js';
const Register = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { addNotification} = useNotificationContext();
    const registerSubmitHandler = (e) => {
        e.preventDefault();
        let {email, password,confirmPassword} = Object.fromEntries(new FormData(e.currentTarget));
        const validateErrors =  validateRegister(email, password,confirmPassword);
        if (Object.keys(validateErrors).length > 0) {
            
			setErrors(validateErrors);
			return;
		}
        authService.register(email,password)
        .then(res => {
            login(res);
            addNotification(`Welcome ${email}, this is your first visit to Pizza Factory` , types.success)
            navigate('/dashboard');
        }).catch(err=>  addNotification("This email has already been used" , types.error) );
    };
    return (
        <section id="register-page" className="register">
        <form id="register-form" onSubmit={registerSubmitHandler}>
            <fieldset>
                <legend>Register Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="Email"/>
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
						<span className="form-error">{errors.password}</span>
					)}
                <p className="field">
                    <label htmlFor="repeat-pass">Repeat Password</label>
                    <span className="input">
                        <input type="password" name="confirmPassword" id="repeat-pass" placeholder="Repeat Password"/>
                    </span>
                </p>
                {errors.confirmPassword && (
						<span className="form-error">{errors.confirmPassword}</span>
					)}
                <input className="button submit" type="submit" value="Register"/>
            </fieldset>
        </form>
    </section>

    );
};
export default Register;  