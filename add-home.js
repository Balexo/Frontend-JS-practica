import { addListController } from "./add-list/add-list-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";
import { sessionController } from "./session/session-controller.js";

const addList = document.querySelector(".add-list");
const notificationList = document.querySelector(".notification-list")
const session = document.querySelector("#session");

sessionController(session);

const { showNotifications } = notificationController(notificationList);

addList.addEventListener("error-loading-adds", (event)=>{
    showNotifications(event.detail.message, event.detail.type);
    event.stopPropagation();
})
addListController(addList);

window.addEventListener("offline", () =>{
    showNotifications("Se ha perdido la conexión!!", "error");
})
