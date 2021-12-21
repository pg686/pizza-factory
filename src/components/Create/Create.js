import * as pizzaService from '../../services/pizzaService.js';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import { InputGroup } from 'react-bootstrap';
import { useAuthContext } from '../../contexts/AuthContext.js';
import { useNotificationContext,types } from '../../contexts/NotificationContext.js';
const Create = () => {
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


    const onPetCreate = (e) => {
e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        
        let imageUrl = formData.get('imageUrl');
        let type = pizzaType;    
        pizzaService.create({
            name,
            description,
            imageUrl,
            type,
            price,
            product
            
        }, user.accessToken).then(res => {
            addNotification("success", types.success)
navigate('/dashboard');
        } );
    };
    return (
        <section id="create-page" className="create">
        <form id="create-form" onSubmit={onPetCreate}>
            <fieldset>
                <legend>Add new Pet</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Name"/>
                    </span>
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
                </p>
                <p className="field">

    <div>
        <label >
     { Object.values(product).map(c => <p><input type="checkbox" value={c.name} key={c} onChange={ onProductChange} name= {c.name} checked={c.isChecked}/><span>{c.name}</span></p>)}
     </label>
    </div>

</p>
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
                <input className="button submit" type="submit" value="Add Pet"/>
            </fieldset>
            
        </form>
    </section>
    );
};
export default Create;  

//
//<p className="field">
//<label htmlFor="type">Category</label>
//<span className="input">
//    <select id="type" name="type"  onChange={onCategoryChange}>
//     { Object.keys(categories).map(c => <option key={c} value={c} >{c}</option>)}
//    </select>
//</span>
//</p>

//     { types.map(type => <option key={type._id} value={type._id} >{type.name}</option>)}

//const [types, setTypes] = useState([]);
//const [categories, setCategories] = useState([]);
// useEffect(() => {
//
//     fetch('https://softuni-test-server.herokuapp.com/jsonstore/types')
//        .then(res => res.json())
//       .then(res => {
// let typesRes = Object.values(res);
// let categories = typesRes.reduce((a , c) => {
//
// if(!a[c.category]){
//     a[c.category]= [];
// }
// a[c.category].push(c);
//
//return a;
// }, {});
// console.log(categories);
// setCategories(categories);  
// setTypes(typesRes); });
//}
//, [] );

//    const onCategoryChange = (e) => {
//    setTypes(categories[e.target.value]);
//    console.log('ssad');
//} ;

    
