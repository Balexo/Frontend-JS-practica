import { addDetailController } from "./add-detail/add-detail-controller.js";


document.addEventListener("DOMContentLoaded", () =>{
    const addDetail = document.querySelector("#addDetails");
    
    addDetailController(addDetail);
})