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
function App() {
const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});

useEffect(() => {
let username= authService.getUser();
setUserInfo({
  isAuthenticated: Boolean(username),
  username
});
}, []);



const onLogin   = (username) => {
setUserInfo({
  isAuthenticated: true,
  username
});
};


const onLogout   = () => {
  setUserInfo({
    isAuthenticated: false,
    username: []
  });
  };

  return (
<div id="container">
        
<Header {...userInfo} />
    
        <main id="site-content">
        <Routes>
<Route path="/dashboard/*" element={<Dashboard />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/my-orders" element={<MyOrders />} />
<Route path="/create" element={<Create />} />
<Route path="/details/:petId" element={<Details />} />
<Route path="logout" element={<Logout onLogout={onLogout} />} />
</Routes>          
          
          
          
          
  </main>   




        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

    </div>
  );
}

export default App;
