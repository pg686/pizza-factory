import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
//import CartContext from '../../contexts/card/CardContext.js';

const Header = ({
   email
}) => {
    const { user } = useAuthContext();
   
    let guestNavigation = ( <div id="guest">
    <Link className="button" to="/login">Login</Link>
    <Link className="button" to="/register">Register</Link>
</div> );

let userNavigation = (<div id="user">
<span>Welcome, {user.email}</span>
<Link className="button" to="/my-orders">My Orders</Link>
<Link className="button" to="/create">Make your own pizza</Link>
<Link className="button" to="/logout">Logout</Link>
</div>
);

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


//<div className='nav__right'>
//        <div className='cart__icon'>
//          <i
//            className='fa fa-shopping-cart'
//            aria-hidden='true'
//            onClick={showHideCart}
//          />
//          {cartItems.length > 0 && (
//            <div className='item__count'>
//              <span>{cartItems.length}</span>
//            </div>
//          )}
//        </div>
//      </div>
//</div>