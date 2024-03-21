import { loaderController } from "../loader/loader-controller.js";
import { loginUser } from "./login-model.js";

const login = document.querySelector("#login-form");
login.

export const loginController = (login) => {


}

function validateEmail(email){
    const email = document.querySelector("#email");
    const regex = new RegExp (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    regex.test(email);
}