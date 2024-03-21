import { singupController } from "./sign-up/signup-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";

const register = document.querySelector("#register");
const notifications = document.querySelector("#notifications");

const { shownotifications } = notificationController(notifications);

register.addEventListener("")

singupController(register);