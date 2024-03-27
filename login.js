import { loginController } from "./login/login-controller.js";
import { loaderController } from "./loader/loader-controller.js";


document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector("#login-form");
    const initialSpinner = document.querySelector(".lds-roller");
    initialSpinner.classList.add("hidden");

    const {showLoader, hideLoader}=loaderController(loginForm);
  
    loginForm.addEventListener("load-spinner", (event)=>{ //Listener cargar 2º spinner
        debugger
        showLoader();
        event.stopPropagation();
    })

    spinner.addEventListener("hide-spinner", (event)=>{ //Listener ocultar 2º spinner
        hideLoader();
        event.stopPropagation();
    })
       
    loginController(loginForm);

});