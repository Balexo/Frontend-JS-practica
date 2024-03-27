import { loginController } from "./login/login-controller.js";
import { loaderController } from "./loader/loader-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";


document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector("#login-form");
    const spinner = document.querySelector(".spinner");
    spinner.classList.add("hidden");

    const {showLoader, hideLoader}=loaderController(loginForm);
  
    loginForm.addEventListener("load-spinner", (event)=>{ //Listener cargar 2º spinner
        showLoader();
        event.stopPropagation();
    })

    spinner.addEventListener("hide-spinner", (event)=>{ //Listener ocultar 2º spinner
        hideLoader();
        event.stopPropagation();
    })
    
    const notification = document.querySelector("#notification");
    const {showNotification } = notificationController(notification);
    
    loginForm.addEventListener("loginUser", (event)=>{
        showNotification(event.detail.message, event.detail.type);
        event.stopPropagation();
    })

    loginController(loginForm);

});