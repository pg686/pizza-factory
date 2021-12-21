import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService.js';
import PizzaCard from "./PetCard/PizzaCard.js";
const PizzaList = ({
    pizzas,
    onSort
}) => {
let getPizzas = [...pizzas]
   const [sortPizza, setSortPizza] = useState(getPizzas);

   const [state, setState] = useState('All');



const onClick = (e) => {
    setState(e.target.textContent);
}
    

  

    return (
        <div>
                    <nav>

<button type="button" className="btn btn-primary" onClick={onClick}>All</button>
<button type="button" className="btn btn-primary" onClick={onClick}>meat</button>
<button type="button" className="btn btn-primary" onClick={onClick}>vegetarian</button>
<button type="button" className="btn btn-primary" onClick={onClick}>vegan</button>


        </nav>
<button type="button" className="btn btn-primary" onClick={onSort}>descending likes</button>
<button type="button" className="btn btn-primary" onClick={onSort}>ascending likes</button>
<button type="button" className="btn btn-primary" onClick={onSort}>descending price</button>
<button type="button" className="btn btn-primary" onClick={onSort}>ascending price</button>
            { pizzas.length > 0 ? (
        <ul className="other-pets-list">
{ state !== 'All' ?  pizzas.filter(x => x.type === state).map( x =>  <PizzaCard key={x._id} getPizza={x} /> ) :
 pizzas.map( x =>  <PizzaCard key={x._id} getPizza={x} /> )}
        </ul> )
            :
        <p className="no-pets">No pizzas in database!</p>
    }
        </div>
    );
};
export default PizzaList;



//switch(sortPizza) {
//    case ['descending', 'likes']:
//     setPizzas(result.sort((a,b) => b.likes - a.likes))
//      break;
//    case ['ascending', 'likes']:
//        setPizzas(result.sort((a,b) => a.likes - b.likes))
//      break;
//    case ['descending', 'price']:
//        setPizzas(result.sort((a,b) => b.price - a.price))
//        break;
//        case ['ascending', 'price']:
//            setPizzas(result.sort((a,b) => a.price - b.price))
//            break;
//    default: