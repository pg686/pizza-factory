import { createContext, useContext, useState, useCallback } from "react";
export const NotificationContext  = createContext();
export const types ={
    error:    'danger',
    warn:   'warning',
    info:   'info',
    success:   'success',
}
const initialNotification = { show: false, message: '', type:  types.error
}
export const NotificationProvider = ({
    children
}) => {
    const [notification, setNotification] = useState({ show: false, message: '', type:  types.error
});
const addNotification = useCallback((message, type=types.error) => {
setNotification({show: true ,message, type});
setTimeout(() =>{
    setNotification(initialNotification);
} , 5000);
},[])
const removeNotification = useCallback(() =>setNotification(initialNotification));
  
   return (
       <NotificationContext.Provider value={{notification, addNotification,removeNotification}}>
           {children}
       </NotificationContext.Provider>
   )
}
export const useNotificationContext = () => {
    const state = useContext(NotificationContext);
    return state;
}
