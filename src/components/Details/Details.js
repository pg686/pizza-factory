import { useParams } from "react-router";
import * as pizzaService from '../../services/pizzaService.js';
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext.js";
import ModalDialog from "../Shared/Modal/ModalDialog.js";
import * as likeService from '../../services/likeService';
import { Button } from "react-bootstrap";
import { useNotificationContext,types } from '../../contexts/NotificationContext.js';
import { Card } from "react-bootstrap";
import "./Details.css";
const Details = () => {
    const navigate = useNavigate();
    const { user }  =useAuthContext();
    const { pizzaId } = useParams();
const [pizza ,setPizza] = useState({});
const { addNotification } = useNotificationContext();
const [showDel, setShowDel] = useState(false);

useEffect(() => {
    pizzaService.getOne(pizzaId)
    .then(result => {
        setPizza(result);
    } );
    
} , []);


useEffect(() => {
    likeService.getPizzaLikes(pizzaId)
        .then(likes => {
            setPizza(state => ({...state, likes}))
        })
}, []);
console.log(pizza);
const deleteHandler = (e) => {
    e.preventDefault();
pizzaService.remove(pizzaId, user.accessToken)
.then(() => {
    setShowDel(false);
    addNotification(`You successfully deleted ${pizza.name}`, types.success)
    navigate('/dashboard')});
};

const deleteClickHandler = (e) => {
e.preventDefault();
setShowDel(true);
}


const likeButtonClick = () => {
    if (user._id === pizza._ownerId) {
        return;
    }

    if (pizza.likes.includes(user._id)) {
        //addNotification('You cannot like again')
        return;
    }

    likeService.like(user._id, pizzaId)
        .then(() => {
            setPizza(state => ({...state, likes: [...state.likes, user._id]}));

           // addNotification('Successfuly liked a cat :)', types.success);
        });
};
const ownerButtons =  ( 
<><Link className="button" to={`/edit/${pizzaId}`}>Edit</Link>
<a className="button" onClick={deleteClickHandler}>Delete</a></> );
const userButton = <Button className="button"  onClick={likeButtonClick}  disabled={pizza.likes?.includes(user._id)}>Like</Button>

    return (
        <>
        <ModalDialog show={showDel} onClose={() => setShowDel(false)} onSave={deleteHandler} ></ModalDialog>
        <section id="details-page" className="details">
           <Card>
           <Card.Body>
        <div className="pet-information">
            <h3>Name: {pizza.name} </h3>
            <p className="type">Type: {pizza.type}</p>
            <p className="img"><img src={pizza.imageUrl}/></p>
        
          
                {user._id && (user._id === pizza._ownerId ? ownerButtons
                : userButton )}

                
                
                
                
                
                
                <div className="likes">
                    <img className="like" src="/images/like.png" />
                    <span id="total-likes">Likes: {pizza.likes?.length}</span>
                </div>
                <div className="price">
                    <img className="price" src="/images/price.png" />
                    <span id="total-likes">Price: {pizza.price} </span>
                </div>
           
        </div>
        <Card.Text>
        <h4 >Description:</h4>

        {pizza.description}
    </Card.Text>
          
  
        </Card.Body>
        </Card> 
    </section>
    </>
    );
};
export default Details;  


//{pizza.likes.length}


//<Link className="button" to="/my-orders">Order</Link>