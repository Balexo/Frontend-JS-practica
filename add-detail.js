import { addDetailController } from "./add-detail/add-detail-controller.js";
import { loaderController } from "./loader/loader-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";

document.addEventListener("DOMContentLoaded", (event) =>{
    event.preventDefault();
    const addDetail = document.querySelector("#addDetails");
    const spinner = document.querySelector('#spinner');
    const { showLoader, hideLoader} = loaderController(spinner);
    const notifications = addDetail.querySelector("#notification");
    const { showNotification } = notificationController(notifications);       
    
    addDetail.addEventListener("load-spinner", (event)=>{
        showLoader();
        event.stopPropagation();
    });

    addDetail.addEventListener("hide-spinner", (event)=>{
        hideLoader();
        event.stopPropagation();
    });

    notifications.addEventListener("ad-no-exist",(event)=>{
        showNotification(event.detail.message, event.detail.type);
        event.stopPropagation();
    });

    notifications.addEventListener("add-deleted", (event)=>{
        showNotification(event.detail.message, event.detail.type);
        event.stopPropagation();
    });

    addDetailController(addDetail);

});