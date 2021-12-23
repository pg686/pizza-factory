import { Routes, Route  } from "react-router-dom";
import { useState , useEffect } from 'react';
import * as authService from './services/authServices.js';
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import MyPizzas from "./components/MyPizzas";
import Create from "./components/Create";
import Details from "./components/Details";
import Logout from './components/Logout';
import { AuthProvider } from './contexts/AuthContext.js';
import useLocalStorage from './hooks/useLocalStorage.js';
import Edit from './components/Edit/Edit.js';
import {NotificationProvider} from './contexts/NotificationContext.js';
import Notificication from "./components/Shared/Notification.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/Shared/PrivateRoute.js';
import GuardedRoute from './components/Shared/PrivateRoute.js';

function App() {


  return (
  <AuthProvider>
    <NotificationProvider>
<div id="container">
        
<Header />
    <Notificication />
        <main id="site-content">
 <Routes>
<Route path="/dashboard/*" element={<Dashboard />} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register />} />
<Route path="/my-pizzas" element={<PrivateRoute><MyPizzas /></PrivateRoute>} />

<Route path="/details/:pizzaId" element={<PrivateRoute><Details /></PrivateRoute>} />
<Route path="logout" element={<Logout />} />



<Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>} />
<Route path="edit/:pizzaId" element={<PrivateRoute><Edit /></PrivateRoute>} />

</Routes>          
          
          

          
  </main>   




        <footer id="site-footer">
            <p>Pizza Factory</p>
        </footer>

    </div>
    </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
