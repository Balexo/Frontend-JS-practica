import { notificationController } from "./notifications/notifications-controller.js";
import { singupController } from "./sign-up/signup-controller.js";

const register = document.querySelector("#register");
const notifications = register.querySelector("#notifications");

const { showNotification } = notificationController(notifications);

register.addEventListener("signup-notification", (event)=>{
    event.stopPropagation();
    showNotification(event.detail.message, event.detail.type)
    
})

singupController(register);