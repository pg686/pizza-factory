import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService.js';
import PizzaCard from "./PetCard/PizzaCard.js";
const PizzaList = ({filterPizza}) => {
  
   const [sortPizza, setSortPizza] = useState([]);
   
    useEffect(() => {
        pizzaService.getAll()
        .then(result => {

            setSortPizza(result.sort((a,b) => a.price - b.price))
              
        
        } ).catch(err=> console.log('err'));
        console.log(sortPizza);
    } , []);
    const pizzasSort = (pizzas) => {
        return {
            'descending-likes': () => pizzas.sort((a, b) => b.likes - a.likes),
            'ascending-likes': () => pizzas.sort((a, b) =>  a.likes - b.likes),
            'descending-price': () => pizzas.sort((a, b) => b.price - a.price),
            'ascending-price': () => pizzas.sort((a, b) => a.price - b.price),
        }
    }
    const onSortButton = (sortBy) => {
        const sorter = pizzasSort(sortPizza);
        const sortedPizzas = sorter[sortBy]();
    
        setSortPizza([...sortedPizzas]);
        
    }
  

    return (
        <div>
<button type="button" className="btn btn-primary" onClick={() => onSortButton('descending-likes')}>descending likes</button>
<button type="button" className="btn btn-primary" onClick={() => onSortButton('ascending-likes')}>ascending likes</button>
<button type="button" className="btn btn-primary" onClick={() => onSortButton('descending-price')}>descending price</button>
<button type="button" className="btn btn-primary" onClick={() => onSortButton('ascending-price')}>ascending price</button>
            { sortPizza.length > 0 ? (
        <ul className="other-pets-list">
{ filterPizza !== 'All' ?  sortPizza.filter(x => x.type === filterPizza).map( x =>  <PizzaCard key={x._id} pizza={x} /> ) :
 sortPizza.map( x =>  <PizzaCard key={x._id} pizza={x} /> )}
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