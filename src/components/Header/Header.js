import { Link, NavLink } from 'react-router-dom';
const Header = ({
    isAuthenticated,
    username
}) => {

    let guestNavigation = ( <div id="guest">
    <Link className="button" to="/login">Login</Link>
    <Link className="button" to="/register">Register</Link>
</div> );

let userNavigation = (<div id="user">
<span>Welcome, {username}</span>
<Link className="button" to="/my-pets">My Orders</Link>
<Link className="button" to="/create">Order Pizza</Link>
<Link className="button" to="/logout">Logout</Link>
</div>);

    return (
        <header id="site-header">

        <nav className="navbar">
            <section className="navbar-dashboard">
                <Link to="/dashboard">Dashboard</Link>
            {    isAuthenticated ? userNavigation : guestNavigation   }   


            </section>
        </nav>
    </header>

    );
};
export default Header;  