
import { Routes,  Route, Link } from "react-router-dom";
import PizzaList from "../PizzaList/PizzaList.js";
const Dashboard = () => {

    return (
        <section id="dashboard-page" className="dashboard">
        <h1>Dashboard</h1>
        <nav>
<Link to="types">Types.. </Link>
        </nav>
        <section>           
             <Routes>
            <Route path="/" element={<PizzaList />} />
            <Route path="/types" element={<p>Types...</p>} />
            </Routes></section>

    </section>
    );
};
export default Dashboard;  