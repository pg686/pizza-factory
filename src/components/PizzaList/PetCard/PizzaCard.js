
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import * as likeService from '../../../services/likeService.js';
import './PizzaCard.css';
import { useState, useEffect, useContext } from "react";
import usePizzaProducts from '../../../hooks/usePizzaProducts.js';
const PizzaCard = ({
    getPizza
}) => {
const [getLikes, setLikes] =  useState({});
useEffect(() => {
    likeService.getPizzaLikes(getPizza._id)
        .then(likes => {
            setLikes(state => ({...state, likes}))
        })
}, []);

    return (
    <div class="card">
        <Card style={{ width: '18rem' }}>
  <h3>Name: {getPizza.name}</h3>
        <p>Type:  {getPizza.type}</p>
        <p className="price">Price:  {getPizza.price} $</p>
        <p>Likes:  { getLikes.likes?.length } </p>
        <p>Products: { getPizza.numberOfProducts } </p>
        <p className="img"><img src={getPizza.imageUrl} /></p>
        <Link className="button" to={`/details/${getPizza._id}`}>Details</Link>
        </Card>
</div>
  
    );
};
export default PizzaCard;