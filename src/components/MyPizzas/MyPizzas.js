import PizzaList from "../PizzaList/PizzaList.js";
import * as pizzaService from '../../services/pizzaService.js';
import { useState,useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext.js";

const MyPizzas = () => {

const [myPizzas,setMyPizzas] = useState([]);
const { user } = useAuthContext();
useEffect(() => {
    pizzaService.getMyPizzas(user._id)
    .then(result => {

        setMyPizzas(result.sort((a,b) => a.price - b.price))
          
    
    } ).catch(err=> console.log('err'));
  
} , []);
const pizzasSort = (pizzas) => {
    return {
'descending products' : () => pizzas.sort((a, b) => b.numberOfProducts - a.numberOfProducts),
'ascending products'  : () => pizzas.sort((a, b) =>  a.numberOfProducts - b.numberOfProducts),
'descending price' : () => pizzas.sort((a, b) => b.price - a.price),
'ascending price'  : () => pizzas.sort((a, b) => a.price - b.price),
    }
}
const onSortButton = (e) => {
    const sorter = pizzasSort(myPizzas);
    const sortedPizzas = sorter[e.target.textContent]();

    setMyPizzas([...sortedPizzas]);
    
}
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>My Pizzas</h1>
            <PizzaList pizzas={myPizzas} onSort={onSortButton}/>
           
        
          
        </section>
    );
};
export default MyPizzas;  