import * as request from "./requester.js";

//let baseUrl = 'https://softuni-test-server.herokuapp.com/jsonstore';
let baseUrl = 'http://localhost:3030/data';



export const getAll = () => request.get(`${baseUrl}/pizza`);

export const getMyPizzas = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/pizza?where=${query}`);
};

export const create = async (pizzaData, token) => {
    let response = await fetch(`${baseUrl}/pizza`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...pizzaData, likes: []})
    });
    let result = await response.json();

    return result;

};
export const update = async (pizzaId, pizzaData) =>  request.put(`${baseUrl}/pizza/${pizzaId}`, pizzaData)


export const getOne = async (pizzaId) => {
    let response = await fetch(`${baseUrl}/pizza/${pizzaId}`);
    let result = await response.json();
    return result;
  };

  export const remove = (pizzaId, token) => {
return fetch(`${baseUrl}/pizza/${pizzaId}`,{
    method: 'DELETE',
    headers: {
        'content-type': 'application/json',
        'X-Authorization': token
    },
}).then(res => res.json());
  };