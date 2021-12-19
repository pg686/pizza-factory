import { useParams } from "react-router";
import * as pizzaService from '../../services/pizzaService.js';
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext.js";
import ModalDialog from "../Shared/Modal/ModalDialog.js";
const Details = () => {
    const navigate = useNavigate();
    const { user }  =useAuthContext();
    const { pizzaId } = useParams();
const [pizza ,setPizza] = useState({});
const [showDel, setShowDel] = useState(false);

useEffect(() => {
    pizzaService.getOne(pizzaId)
    .then(result => {
        setPizza(result);
    } );
    
} , []);
console.log(pizza);
const deleteHandler = (e) => {
    e.preventDefault();
pizzaService.remove(pizzaId, user.accessToken)
.then(() => {
    setShowDel(false);
    navigate('/dashboard')});
};

const deleteClickHandler = (e) => {
e.preventDefault();
setShowDel(true);
}

const likeButton = () => {
//   pizzaService.like(pizza._id, user._id)
//   .then(likeCount => {
//       setPizza(state=> ({
//           ...state,
//           likes:likeCount
//       }))
//   })
}
const ownerButtons =  ( 
<><Link className="button" to={`/edit/${pizzaId}`}>Edit</Link>
<a className="button" onClick={deleteClickHandler}>Delete</a></> );
const userButton =<a className="button" href="#">Like</a>

    return (
        <>
        <ModalDialog show={showDel} onClose={() => setShowDel(false)} onSave={deleteHandler}></ModalDialog>
        <section id="details-page" className="details">
        <div className="pet-information">
            <h3>Name: {pizza.name} </h3>
            <p className="type">Type: {pizza.type}</p>
            <p className="img"><img src={pizza.imageUrl}/></p>
            <div className="actions">
                {user._id && (user._id === pizza._ownerId ? ownerButtons
                : userButton )}
<Link className="button" to="/my-orders">Order</Link>
                
                
                
                
                
                
                <div className="likes">
                    <img className="hearts" src="/images/heart.png" />
                    <span id="total-likes">Likes: {pizza.likes}</span>
                </div>
                <div className="price">
                    <img className="hearts" src="/images/heart.png" />
                    <span id="total-likes">Price: {pizza.price} </span>
                </div>
            </div>
        </div>
        <div className="pet-description">
            <h3>Description:</h3>
            <p>{pizza.description}</p>
        </div>
    </section>
    </>
    );
};
export default Details;  


//{pizza.likes.length}