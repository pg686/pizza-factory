
import { Link } from 'react-router-dom';

const PizzaCard = ({
    pet
}) => {


    return (
        <li className="otherPet">
        <h3>Name: {pet.name}</h3>
        <p>Type:  {pet.type}</p>
        <p className="img"><img src={pet.imageUrl} /></p>
        <Link className="button" to={`/details/${pet._id}`}>Details</Link>
    </li>
    );
};
export default PizzaCard;