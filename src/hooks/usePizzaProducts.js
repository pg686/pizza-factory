import { useState,useEffect } from "react";
import * as pizzaService from '../services/pizzaService.js';
const usePizzaProducts = (pizzaId) => {
    const [product ,setProduct] = useState({});
    useEffect(() => {
pizzaService.getOne(pizzaId)
.then(pizzaResult => {
    let products = pizzaResult.product;
    setProduct([...products])
})
    } , [pizzaId]);
    return [
        product,
        setProduct
    ]
};
export default usePizzaProducts;