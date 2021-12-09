import { useEffect, useState } from "react";
import * as petService from '../../services/petService.js';
import PizzaCard from "./PetCard/PizzaCard.js";
const PizzaList = () => {
   const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
        .then(result => {
            setPets(result);
        } );
        console.log(pets);
    } , []);

    return (
        <div>
            { pets.length > 0 ? (
        <ul className="other-pets-list">

{ pets.map( x =>  <PizzaCard key={x._id} pet={x} /> )}
        </ul> )
            :
        <p className="no-pets">No pets in database!</p>
    }
        </div>
    );
};
export default PizzaList;