import { loginController } from "./login/login-controller.js";
import { loaderController } from "./loader/loader-controller.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector("#login-form");
    
    const spinner= loginForm.querySelector("#spinner")
    const {showLoader, hideLoader}=loaderController(loginForm);

    loginForm.addEventListener("load-spinner", (event)=>{
        debugger
        showLoader();
        event.stopImmediatePropagation();
    })

    loginForm.addEventListener("hide-loader", (event)=>{
   
        hideLoader();
        event.stopPropagation();
    })
  
    loginController(loginForm);

});