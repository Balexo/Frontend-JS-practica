import { buildNotification } from "./notifications-view.js";
export function notificationController(notificationContainer){

    function showNotifications(message, type="sucess"){
        const notification= document.createElement("div");
        notification.classList.add("notification", type);
        notification.innerHTML=buildNotification(message);
        notificationContainer.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 6000);
}
    return { showNotifications }
}

