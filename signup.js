import { notificationController } from "./notifications/notifications-controller.js";
import { singupController } from "./sign-up/signup-controller.js";

const register = document.querySelector("#register");
const notifications = document.querySelector("#notifications");

const { showNotifications} = notificationController(notifications);

register.addEventListener("signup-notification", (event)=>{
    event.stopPropagation();
    showNotifications(event.detail.message, event.detail.type)
    
})

singupController(register);