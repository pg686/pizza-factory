const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {
 let response  =  await  fetch(`${baseUrl}/users/login`, {
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify({email,password})
   });
   let jsonResult = await response.json();

   if(response.ok){
return jsonResult;

   }else{
       throw jsonResult;
   }

};
export const getUser = () => {
    let username = localStorage.getItem('username');
 
    return username;
};
export const isAuthenticated = () => {
    return Boolean(getUser());
};
export const logout = () => {
 //  fetch(`${baseUrl}/users/logout`)
};

export const register =async (email,password) => {

let response = await fetch(`${baseUrl}/users/register`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({email,password})
});
let jsonResult = await response.json();

if(response.ok){
return jsonResult;

}else{
    throw jsonResult;
}

};