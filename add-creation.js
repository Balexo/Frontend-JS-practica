import { loaderController } from "./loader/loader-controller.js";
import { addCreationController } from "./add-creation/add-creation-controller.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const addCreation = document.querySelector("#addCreation");
    const token = localStorage.getItem("token");

    const spinner = addCreation.querySelector("#spinner")
    debugger
    const {showLoader, hideLoader} = loaderController(spinner)
    debugger

    addCreation.addEventListener("load-spinner", (event)=>{
        showLoader();
        event.stopPropagation();
    })

    addCreation.addEventListener("hide-spinner", (event)=>{
        hideLoader();
        event.stopImmediatePropagation();
    })

    if(!token){
        alert("Debes estar registrado para poder crear un anuncio")
        window.location.href="index.html";
    }

    addCreationController(addCreation);

    
})