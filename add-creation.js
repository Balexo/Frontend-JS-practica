import { addCreationController } from "./add-creation/add-creation-controller.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const addCreation = document.querySelector("#addCreation");
    const token = localStorage.getItem("token");

    if(!token){
        window.location.href="index.html";
    }

    addCreationController(addCreation);

    
})