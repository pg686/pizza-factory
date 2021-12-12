import { Routes, Route  } from "react-router-dom";
import { useState , useEffect } from 'react';
import * as authService from './services/authServices.js';
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import MyOrders from "./components/MyOrders";
import Create from "./components/Create";
import Details from "./components/Details";
import Logout from './components/Logout';
import { AuthContext } from './contexts/AuthContext.js';
import useLocalStorage from './hooks/useLocalStorage.js';
function App() {
const [user, setUser] = useLocalStorage('user', {accessToken: '', email: '', _id: ''});





const login   = (authData) => {
setUser(authData);
};


const onLogout   = () => {
//
  };

  return (
    <AuthContext.Provider value={{user, login}}>
<div id="container">
        
<Header />
    
        <main id="site-content">
        <Routes>
<Route path="/dashboard/*" element={<Dashboard />} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register />} />
<Route path="/my-orders" element={<MyOrders />} />
<Route path="/create" element={<Create />} />
<Route path="/details/:pizzaId" element={<Details />} />
<Route path="logout" element={<Logout />} />
</Routes>          
          
          
          
          
  </main>   




        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

    </div>
    </AuthContext.Provider>
  );
}

export default App;
