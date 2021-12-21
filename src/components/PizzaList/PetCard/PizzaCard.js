
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const PizzaCard = ({
    getPizza
}) => {


    return (
    <div class="card">
  <h3>Name: {getPizza.name}</h3>
        <p>Type:  {getPizza.type}</p>
        <p>Price:  {getPizza.price} $</p>
        <p className="img"><img src={getPizza.imageUrl} /></p>
        <Link className="button" to={`/details/${getPizza._id}`}>Details</Link>
</div>
  
    );
};
export default PizzaCard;