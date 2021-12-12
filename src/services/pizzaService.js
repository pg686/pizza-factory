//let baseUrl = 'https://softuni-test-server.herokuapp.com/jsonstore';
let baseUrl = 'http://localhost:3030/data';

export const getAll = async () => {
  let response = await fetch(`${baseUrl}/pizza`);
  let pizzas = await response.json();
  let result = Object.values(pizzas);
  return result;
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

export const getOne = async (petId) => {
    let response = await fetch(`${baseUrl}/pizza/${petId}`);
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