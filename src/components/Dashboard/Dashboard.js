
import { Routes,  Route, Link } from "react-router-dom";
import PizzaList from "../PizzaList/PizzaList.js";
import Button from "@restart/ui/esm/Button";
import * as pizzaService from '../../services/pizzaService.js';
import { useState } from "react";
const Dashboard = () => {
const [state, setState] = useState('All');



const onClick = (e) => {
    setState(e.target.textContent);
}


    return (
        <section id="dashboard-page" className="dashboard">
        <h1>Dashboard</h1>
        <nav>

<button type="button" className="btn btn-primary" onClick={onClick}>All</button>
<button type="button" className="btn btn-primary" onClick={onClick}>meat</button>
<button type="button" className="btn btn-primary" onClick={onClick}>vegetarian</button>
<button type="button" className="btn btn-primary" onClick={onClick}>vegan</button>


        </nav>
        <section>           
             <Routes>
            <Route path="/" element={<PizzaList filterPizza={state} />} />
          
            </Routes></section>

    </section>
    );
};
export default Dashboard;  


//<button type="button" className="btn btn-primary" onClick={onSortHandler}>descending likes</button>
//<button type="button" className="btn btn-primary" onClick={onSortHandler}>ascending likes</button>
//<button type="button" className="btn btn-primary" onClick={onSortHandler}>descending price</button>
//<button type="button" className="btn btn-primary" onClick={onSortHandler}>descending price</button>