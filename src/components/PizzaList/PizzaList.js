import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService.js';
import PizzaCard from "./PetCard/PizzaCard.js";
import { Button, ButtonGroup,Dropdown, DropdownButton } from "react-bootstrap";
import './PizzaList.css';
const PizzaList = ({
    pizzas,
    onSort
}) => {


   const [state, setState] = useState('All');



const onClick = (e) => {
    setState(e.target.textContent);
}
    

  

    return (
        <div>
                    <ButtonGroup aria-label="Basic example">
<Button variant="light"   className="margin-buttom" onClick={onClick}>All</Button>
<Button variant="light"  className="margin-buttom" onClick={onClick}>meat</Button>
<Button variant="light"  className="margin-buttom" onClick={onClick}>vegetarian</Button>
<Button variant="light"  className="margin-buttom" onClick={onClick}>vegan</Button>

</ButtonGroup>
<ButtonGroup aria-label="Basic example">
<DropdownButton variant="light"  as={ButtonGroup} title="Sort By..." id="bg-nested-dropdown">
<Dropdown.Item eventKey="1" className="margin-buttom" onClick={onSort}>descending products</Dropdown.Item>
<Dropdown.Item eventKey="2" className="margin-buttom" onClick={onSort}>ascending products</Dropdown.Item>
<Dropdown.Item eventKey="3" className="margin-buttom" onClick={onSort}>descending price</Dropdown.Item>
<Dropdown.Item eventKey="4" className="margin-buttom" onClick={onSort}>ascending price</Dropdown.Item>
  </DropdownButton>

</ButtonGroup>
            { pizzas.length > 0 ? (
        <ul className="other-pets-list">
{ (state !== 'All' &&  pizzas.filter(x => x.type === state).length > 0) ?   
pizzas.filter(x => x.type === state).map( x =>  <PizzaCard key={x._id} getPizza={x} /> ) 
: state !== 'All' && pizzas.filter(x => x.type === state).length === 0  ?   <div>
 <h3 >No pizzas in database!</h3>
<p className="img"><img src="/images/no-pizza.jpg" /></p>

</div> : 
 pizzas.map( x =>  <PizzaCard key={x._id} getPizza={x} /> )}
        </ul> )
            :
            <div>
                  <h3 >No pizzas in database!</h3>
                 <p className="img"><img src="/images/no-pizza.jpg" /></p>
      
        </div>
    }
        </div>
    );
};
export default PizzaList;
