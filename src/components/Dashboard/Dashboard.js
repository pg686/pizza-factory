
import { Routes,  Route, Link } from "react-router-dom";
import PizzaList from "../PizzaList/PizzaList.js";
import Button from "@restart/ui/esm/Button";
import * as pizzaService from '../../services/pizzaService.js';
import { useState,useEffect } from "react";
const Dashboard = () => {
const [pizza,setPizza]=useState([]);
    useEffect(() => {
        pizzaService.getAll()
        .then(result => {

            setPizza(result)
              
        
        } ).catch(err=> console.log('err'));
      
    } , []);
    const pizzasSort = (pizzas) => {
        return {
 'descending likes' : () => pizzas.sort((a, b) => b.likes - a.likes),
 'ascending likes'  : () => pizzas.sort((a, b) =>  a.likes - b.likes),
 'descending price' : () => pizzas.sort((a, b) => b.price - a.price),
 'ascending price'  : () => pizzas.sort((a, b) => a.price - b.price),
        }
    }
    const onSortButton = (e) => {
        const sorter = pizzasSort(pizza);
        const sortedPizzas = sorter[e.target.textContent]();
    
        setPizza([...sortedPizzas]);
        
    }
    return (
        <section id="dashboard-page" className="dashboard">
        <h1>Dashboard</h1>

      
          <PizzaList pizzas={pizza} onSort={onSortButton}/>
    </section>
    );
};
export default Dashboard;  


//<button type="button" className="btn btn-primary" onClick={onSortHandler}>descending likes</button>
//<button type="button" className="btn btn-primary" onClick={onSortHandler}>ascending likes</button>
//<button type="button" className="btn btn-primary" onClick={onSortHandler}>descending price</button>
//<button type="button" className="btn btn-primary" onClick={onSortHandler}>descending price</button>