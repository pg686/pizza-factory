import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
const Header = ({
   email
}) => {
    const { user } = useContext(AuthContext);

    let guestNavigation = ( <div id="guest">
    <Link className="button" to="/login">Login</Link>
    <Link className="button" to="/register">Register</Link>
</div> );

let userNavigation = (<div id="user">
<span>Welcome, {user.email}</span>
<Link className="button" to="/my-pets">My Orders</Link>
<Link className="button" to="/create">Make your own pizza</Link>
<Link className="button" to="/logout">Logout</Link>
</div>);

    return (
        <header id="site-header">

        <nav className="navbar">
            <section className="navbar-dashboard">
                <Link to="/dashboard">Dashboard</Link>
            {    user.email ? userNavigation : guestNavigation   }   


            </section>
        </nav>
    </header>

    );
};
export default Header;  