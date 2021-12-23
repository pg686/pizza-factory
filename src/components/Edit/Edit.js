import * as pizzaService from '../../services/pizzaService.js';
import usePizzaState from '../../hooks/usePizzaState.js';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usePizzaProducts from '../../hooks/usePizzaProducts.js';
import { useNotificationContext,types } from '../../contexts/NotificationContext.js';
import { validatePizza } from '../../HelperValidate/validate.js';
import { Form } from 'react-bootstrap';
import './Edit.css';
const Edit = () => {
const {pizzaId} = useParams();
const [errors, setErrors] = useState({});
const [pizza,setPizza] = usePizzaState(pizzaId);
const [product, setProduct] =  usePizzaProducts(pizzaId);
const { addNotification } = useNotificationContext();

const navigate = useNavigate();

let newProdd = {...pizza.product};
const pizzaEditSubmitHandler = (e) => {

        e.preventDefault();
                let formData = new FormData(e.currentTarget);
                let name = formData.get('name');
                
                let imageUrl = formData.get('imageUrl');
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
                //let type = pizza.type;    
                pizzaService.update(pizzaId,{
                    name,
                    description: pizza.description,
                    imageUrl,
                    type: pizza.type,
                    price: pizza.price,
                    product: pizza.product,
                    numberOfProducts

                    
                }).then(res => {
                    addNotification("success", types.success)
                    navigate('/dashboard');
                } );
            };



const onProductChange = (e) => {
    let newArr = [...product];
    let index = newArr.findIndex(el => el.name == e.target.value);
    newArr[index].isChecked = e.target.checked;
    let currentPrice = newArr[index].price; 
    let currentname = newArr[index].name; 
    let newPrice = pizza.price;
    let descr =pizza.description.length >1 ?  pizza.description.split(', ') : [];
    console.log(descr)
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
    setProduct(newArr);
    let newArrr = product.reduce((a,c) => {
        if(c.isChecked && !a.includes(c.type)){
    a.push(c.type);
        }
        return a;
    }, []);
    let newType =''
    if(newArrr.includes('meat') ){
        newType = 'meat';
    }else if(newArrr.includes('vegetarian')){
        newType = 'vegetarian';
    }else{
        newType = 'vegan';
    }
   setPizza(prev => ({
    ...prev,
    description: descr.join(', '),
    price: newPrice,
    type: newType,
    product: product
})
)
console.log(pizza.description)
    }
    
    return (
        <section  className="wrapper">
        <form id="edit-form" onSubmit={pizzaEditSubmitHandler}>
            <fieldset>
            <h3>Add new Pizza</h3>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Name" defaultValue={pizza.name}/>
                    </span>
                    {errors.name && (
						<span className="form-error">{errors.name}</span>
					)}
                </p>

                <p className="field">
                    <label htmlFor="description">Description</label>
                    <p>{pizza.description}</p>
                </p>
            
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image" defaultValue={pizza.imageUrl}/>
                    </span>
                    {errors.imageUrl && (
						<span className="form-error">{errors.imageUrl}</span>
					)}
                </p>


<Form.Group className="mb-3" controlId="formBasicCheckbox">
  { Object.values(product).map(c => <p><Form.Check type="checkbox" value={c.name} key={c} onChange={ onProductChange} name= {c.name} checked={c.isChecked}/><span>{c.name}</span></p>)}
  </Form.Group>
    {errors.numberOfProducts && (
						<span className="form-error">{errors.numberOfProducts}</span>
					)}

<p className="field">

</p>


                <p className="field">
                    <label htmlFor="type" name="type">Type</label>
                  {pizza.type}
                </p>

                <p className="field">
                    <label htmlFor="type" name="price">Price</label>
                  {pizza.price}
                </p>
                <input className="button submit" type="submit" value="Save"  />
            </fieldset>
        </form>
    </section>
    );
};
export default Edit;  