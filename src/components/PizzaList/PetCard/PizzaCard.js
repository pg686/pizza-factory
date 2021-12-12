
import { Link } from 'react-router-dom';

const PizzaCard = ({
    pizza
}) => {


    return (
        <li className="otherPet">
        <h3>Name: {pizza.name}</h3>
        <p>Type:  {pizza.type}</p>
        <p className="img"><img src={pizza.imageUrl} /></p>
        <Link className="button" to={`/details/${pizza._id}`}>Details</Link>
    </li>
    );
};
export default PizzaCard;