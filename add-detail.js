import { addDetailController } from "./add-detail/add-detail-controller.js";
import { loaderController } from "./loader/loader-controller.js";


document.addEventListener("DOMContentLoaded", () =>{
    const addDetail = document.querySelector("#addDetails");
    const spinner = document.querySelector('#spinner')
    const { showLoader, hideLoader} = loaderController(spinner)

        
    
    addDetail.addEventListener("load-spinner", (event)=>{
        showLoader();
        event.stopPropagation();
    });

    addDetail.addEventListener("hide-spinner", (event)=>{
        hideLoader();
        event.stopPropagation();
    });

    addDetailController(addDetail);

});