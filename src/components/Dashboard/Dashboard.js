
import { Routes,  Route, Link } from "react-router-dom";
import PizzaList from "../PizzaList/PizzaList.js";
import Button from "@restart/ui/esm/Button";
import { useState } from "react";
const Dashboard = () => {
const [state, setState] = useState('All');
const [sort, setSort] = useState([]);
const onClick = (e) => {
    setState(e.target.textContent);
}
const onSortHandler = (e) => {
    setSort(e.target.textContent.split(' '));
}
    return (
        <section id="dashboard-page" className="dashboard">
        <h1>Dashboard</h1>
        <nav>
<Link to="types">Types.. </Link>
<button type="button" className="btn btn-primary" onClick={onClick}>All</button>
<button type="button" className="btn btn-primary" onClick={onClick}>meat</button>
<button type="button" className="btn btn-primary" onClick={onClick}>vegetarian</button>
<button type="button" className="btn btn-primary" onClick={onClick}>vegan</button>

        </nav>
        <section>           
             <Routes>
            <Route path="/" element={<PizzaList filterPizza={state} sortPizza={sort}/>} />
            <Route path="/types" element={<p>Types...</p>} />
            </Routes></section>

    </section>
    );
};
export default Dashboard;  


//<button type="button" className="btn btn-primary" onClick={onSortHandler}>descending likes</button>
//<button type="button" className="btn btn-primary" onClick={onSortHandler}>ascending likes</button>
//<button type="button" className="btn btn-primary" onClick={onSortHandler}>descending price</button>
//<button type="button" className="btn btn-primary" onClick={onSortHandler}>descending price</button>