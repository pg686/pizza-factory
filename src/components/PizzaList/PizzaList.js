import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService.js';
import PizzaCard from "./PetCard/PizzaCard.js";
const PizzaList = ({filterPizza,sortPizza}) => {
   const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        pizzaService.getAll()
        .then(result => {

                    setPizzas(result.sort((a,b) => a.price - b.price))
              
        
        } );
        console.log(pizzas);
    } , []);

    
  

    return (
        <div>
            { pizzas.length > 0 ? (
        <ul className="other-pets-list">
{ filterPizza !== 'All' ?  pizzas.filter(x => x.type === filterPizza).map( x =>  <PizzaCard key={x._id} pizza={x} /> ) :
 pizzas.map( x =>  <PizzaCard key={x._id} pizza={x} /> )}
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