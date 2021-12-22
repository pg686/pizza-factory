import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService.js';
import PizzaCard from "./PetCard/PizzaCard.js";
import { Button } from "react-bootstrap";

const PizzaList = ({
    pizzas,
    onSort
}) => {


   const [state, setState] = useState('All');



const onClick = (e) => {
    setState(e.target.textContent);
}
    

  

    return (
        <div>
                    <nav>

<Button variant="light" className="margin-buttom" onClick={onClick}>All</Button>
<Button variant="light"  className="margin-buttom" onClick={onClick}>meat</Button>
<Button variant="light"  className="margin-buttom" onClick={onClick}>vegetarian</Button>
<Button variant="light"  className="margin-buttom" onClick={onClick}>vegan</Button>


        </nav>
<Button variant="light" className="margin-buttom" onClick={onSort}>descending products</Button>
<Button variant="light" className="margin-buttom" onClick={onSort}>ascending products</Button>
<Button variant="light" className="margin-buttom" onClick={onSort}>descending price</Button>
<Button variant="light" className="margin-buttom" onClick={onSort}>ascending price</Button>
            { pizzas.length > 0 ? (
        <ul className="other-pets-list">
{ (state !== 'All' &&  pizzas.filter(x => x.type === state).length > 0) ?   
pizzas.filter(x => x.type === state).map( x =>  <PizzaCard key={x._id} getPizza={x} /> ) 
: state !== 'All' && pizzas.filter(x => x.type === state).length === 0  ?  <p className="no-pets">No pizzas in database!</p> : 
 pizzas.map( x =>  <PizzaCard key={x._id} getPizza={x} /> )}
        </ul> )
            :
        <p className="no-pets">No pizzas in database!</p>
    }
        </div>
    );
};
export default PizzaList;
