import * as pizzaService from '../../services/pizzaService.js';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import { InputGroup } from 'react-bootstrap';
import { useAuthContext } from '../../contexts/AuthContext.js';
import { useNotificationContext,types } from '../../contexts/NotificationContext.js';
import { validatePizza } from '../../HelperValidate/validate.js';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './Create.css';
const Create = () => {
    const [errors, setErrors] = useState({});
const { user }  = useAuthContext();
const [product, setProduct] = useState([]);
const [pizzaType, setPizzaType] = useState('');
const [price, setPrice] = useState(0);
const [description, setDescription] = useState([]);
const { addNotification } = useNotificationContext();
 useEffect(() => {

     fetch('http://localhost:3030/data/ingredients')
        .then(res => res.json())
       .then(res => {
        let typesRes = Object.values(res);
 
 console.log(res);  

 setProduct(typesRes)
 });
}
, [] );
  

    const navigate = useNavigate();
const onProductChange = (e) => {

let newArr = [...product];
let index = newArr.findIndex(el => el.name == e.target.value);
newArr[index].isChecked = e.target.checked;
let currentPrice = newArr[index].price; 
let currentname = newArr[index].name; 
let newPrice = price;
let descr =description.length >1 ?  description.split(', ') : [];
if(e.target.checked === true) {
     newPrice += currentPrice 
    descr.push(e.target.value);
}else{
    newPrice -= currentPrice;
    if(descr.includes(currentname)){
let currentIndex = descr.findIndex(el => el== currentname)
        descr.splice(currentIndex, 1);
    }

}
setDescription(descr.join(', '))
setPrice(newPrice);
setProduct(newArr);

let newArrr = product.reduce((a,c) => {
    if(c.isChecked && !a.includes(c.type)){
a.push(c.type);
    }
    return a;
}, []);
console.log(newArrr);
if(newArrr.includes('meat') ){
    setPizzaType('meat')
}else if(newArrr.includes('vegetarian')){
    setPizzaType('vegetarian')
}else{
    setPizzaType('vegan')
}
console.log(product)
}


    const onPizzaCreate = (e) => {
e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        
        let imageUrl = formData.get('imageUrl');
        let type = pizzaType;
        let  numberOfProducts = product.filter(el=> el.isChecked=== true).length;
        const validationErrors = validatePizza(
            name,
            imageUrl,
            numberOfProducts
		);
        if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
        pizzaService.create({
            name,
            description,
            imageUrl,
            type,
            price,
            product,
            numberOfProducts,
            likes: []
            
        }, user.accessToken).then(res => {
            addNotification("you have successfully create new pizza", types.success)
navigate('/dashboard');
        } );
    };
    return (
<section  className="wrapper">
<form onSubmit={onPizzaCreate}>
    <fieldset>
        <h3>Add new Pizza</h3>
        <p className="field">
            <label htmlFor="name">Name</label>
            <span className="input">
                <input type="text" name="name" id="name" placeholder="Name"/>
            </span>
            {errors.name && (
                <span className="form-error">{errors.name}</span>
            )}
        </p>
     
        <p className="field">
            <label htmlFor="description">Description</label>
            <p>{description}</p>
        </p>
    
        <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
                <input type="text" name="imageUrl" id="image" placeholder="Image"/>
            </span>
            {errors.imageUrl && (
                <span className="form-error">{errors.imageUrl}</span>
            )}
        </p>

           
       <Form.Group className="mb-3 actions" controlId="formBasicCheckbox">
  { Object.values(product).map(c => <p><Form.Check type="checkbox" value={c.name} key={c} onChange={ onProductChange} name= {c.name} checked={c.isChecked}/><span>{c.name}</span></p>)}
  </Form.Group>

{errors.numberOfProducts && (
                <span className="form-error">{errors.numberOfProducts}</span>
            )}
<p className="field">

</p>


        <p className="field">
            <label htmlFor="type" name="type">Type</label>
          {pizzaType}
        </p>

        <p className="field">
            <label htmlFor="type" name="price">Price</label>
          {price}
        </p>
        <input className="button submit" type="submit" value="Add Pizza"/>
    </fieldset>
    
</form>
</section>
      
    );
};
export default Create;  


    
