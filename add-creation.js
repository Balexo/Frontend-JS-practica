import { loaderController } from "./loader/loader-controller.js";
import { addCreationController } from "./add-creation/add-creation-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const addCreation = document.querySelector("#addCreation");
    const token = localStorage.getItem("token");
    const notification = addCreation.querySelector("#notification")
    const { showNotifications} =notificationController(notification);

    if(!token){
        alert("Debes estar registrado para poder crear un anuncio")
        window.location.href="index.html";
    }

    const spinner = addCreation.querySelector("#spinner")
  
    const {showLoader, hideLoader} = loaderController(spinner)
  

    addCreation.addEventListener("load-spinner", (event)=>{
        showLoader();
        event.stopPropagation();
    })

    addCreation.addEventListener("hide-spinner", (event)=>{
        hideLoader();
        event.stopPropagation();
    })

    addCreation.addEventListener("notification-ad-created", (event)=>{
        event.stopPropagation();
        showNotifications(event.detail.message, event.detail.type);
    }  )

    addCreationController(addCreation);
    
})