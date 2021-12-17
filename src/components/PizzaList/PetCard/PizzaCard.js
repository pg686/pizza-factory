
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const PizzaCard = ({
    pizza
}) => {


    return (
    <div class="card">
  <h3>Name: {pizza.name}</h3>
        <p>Type:  {pizza.type}</p>
        <p>Price:  {pizza.price} $</p>
        <p className="img"><img src={pizza.imageUrl} /></p>
        <Link className="button" to={`/details/${pizza._id}`}>Details</Link>
</div>
  
    );
};
export default PizzaCard;