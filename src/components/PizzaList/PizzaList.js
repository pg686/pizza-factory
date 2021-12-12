import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService.js';
import PizzaCard from "./PetCard/PizzaCard.js";
const PizzaList = () => {
   const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        pizzaService.getAll()
        .then(result => {
            setPizzas(result);
        } );
        console.log(pizzas);
    } , []);

    return (
        <div>
            { pizzas.length > 0 ? (
        <ul className="other-pets-list">

{ pizzas.map( x =>  <PizzaCard key={x._id} pizza={x} /> )}
        </ul> )
            :
        <p className="no-pets">No pizzas in database!</p>
    }
        </div>
    );
};
export default PizzaList;