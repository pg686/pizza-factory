import { useParams } from "react-router";
import * as pizzaService from '../../services/pizzaService.js';
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useNavigate, Link } from 'react-router-dom';
const Details = () => {
    const navigate = useNavigate();
    const { user }  = useContext(AuthContext);
    const { pizzaId } = useParams();
const [pizza ,setPizza] = useState({});

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
.then(() => navigate('/dashboard'));
};
const ownerButtons =  ( 
<><Link className="button" to="edit">Edit</Link>
<a className="button" onClick={deleteHandler}>Delete</a></> );
const userButton = <a className="button" href="#">Like</a>;
    return (
        <section id="details-page" className="details">
        <div className="pet-information">
            <h3>Name: {pizza.name} </h3>
            <p className="type">Type: {pizza.type}</p>
            <p className="img"><img src={pizza.imageUrl}/></p>
            <div className="actions">
                {user._id && (user._id === pizza._ownerId ? ownerButtons
                : userButton )}

                
                
                
                
                
                
                <div className="likes">
                    <img className="hearts" src="/images/heart.png" />
                    <span id="total-likes">Likes: {pizza.likes}</span>
                </div>
                
            </div>
        </div>
        <div className="pet-description">
            <h3>Description:</h3>
            <p>{pizza.description}</p>
        </div>
    </section>
    );
};
export default Details;  


//{pizza.likes.length}