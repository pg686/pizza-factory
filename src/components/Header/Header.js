import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
//import CartContext from '../../contexts/card/CardContext.js';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';

const Header = ({
   email
}) => {
    const { user } = useAuthContext();
   
    let guestNavigation = ( <div id="guest">
        <Nav.Item as="li">
    <Nav.Link   as={Link} to="/login">Login</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
    <Nav.Link   as={Link} to="/register">Register</Nav.Link>
    </Nav.Item>
</div> );

let userNavigation = (<div id="user">
<span>Welcome, {user.email}</span>
<Nav.Item as="li">
<Nav.Link  as={Link} to="/my-pizzas">My Pizzas</Nav.Link>
</Nav.Item>
<Nav.Item as="li">
<Nav.Link  as={Link} to="/create">Make your own pizza</Nav.Link>
</Nav.Item>
<Nav.Item as="li">
<Nav.Link  as={Link} to="/logout">Logout</Nav.Link>
</Nav.Item>
</div>
);

    return (
        <header id="site-header"  >



        <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home"><Nav.Link as={Link}  to="/dashboard">Dashboard</Nav.Link></Navbar.Brand>
    
    <Nav className="ml-auto" as="ul">
      
      {    user.email ? userNavigation : guestNavigation   }   
     
    </Nav>
    </Container>
  </Navbar>

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