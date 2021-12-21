import { Toast } from "react-bootstrap";
import {types, useNotificationContext} from '../../contexts/NotificationContext.js'
import './Notification.css'
const Notificication = () => {
    const { notification, removeNotification } = useNotificationContext();
    if(!notification.show){
        return null;
    }
    return (
        
            <Toast className="d-inline-block m-1 notification" bg={notification.type} onClose={removeNotification}>
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                
              </Toast.Header>
              <Toast.Body>
               {notification.message}
              </Toast.Body>
            </Toast>
          );
    
}
export default Notificication;