import { addListController } from "./add-list/add-list-controller.js";
import { notificationController } from "./notifications/notifications-controller.js"; 
import { sessionController } from "./session/session-controller.js";
import { loaderController } from "./loader/loader-controller.js";

document.addEventListener("DOMContentLoaded", ()=>{

    const addList = document.querySelector(".add-list");
    
    const spinner = addList.querySelector("#spinner");
    const { showLoader, hideLoader }= loaderController(spinner);
    
    addList.addEventListener("load-spinner",(event)=>{
        showLoader();
        event.stopPropagation();
    });

    addList.addEventListener("hide-spinner", (event)=>{
        hideLoader();
        event.stopPropagation();
    })
    
    const session = document.querySelector("#session");
    sessionController(session);
    
    const notificationList = document.querySelector(".notification-list")
    const { showNotification } = notificationController(notificationList);
    
    addList.addEventListener("error-loading-adds", (event)=>{
        showNotification(event.detail.message, event.detail.type);
        event.stopPropagation();
    });

    addListController(addList);

    window.addEventListener("offline", () =>{
        showNotification("Se ha perdido la conexión!!", "error");
    })
})
