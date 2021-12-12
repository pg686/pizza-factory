import * as pizzaService from '../../services/pizzaService.js';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
const Create = () => {
const { user }  = useContext(AuthContext);

  

    const navigate = useNavigate();


    const onPetCreate = (e) => {
e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');    
        pizzaService.create({
            name,
            description,
            imageUrl,
            type    
        }, user.accessToken).then(res => {
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
                    <span className="input">
                        <textarea name="description" id="description" placeholder="Description"></textarea>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image"/>
                    </span>
                </p>

                <p className="field">
                    <label htmlFor="type">Type</label>
                    <span className="input">
                        <select id="type" name="type">
                        <option value="cats">Cats</option>)
                    
                        </select>
                    </span>
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

    
