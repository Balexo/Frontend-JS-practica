import { loadSpinner } from "../utils/loadingSpinner.js";
import { createAdd } from "./add-creation-model.js";
import { goBackButton } from "../utils/button.js";
import { dispatchEvent } from "../dispatchEvent.js"; 


export function addCreationController(addCreation){
    
    const backButton = addCreation.querySelector("#back-button");
    goBackButton(backButton); 

    addCreation.addEventListener("submit", (event)=>{
        event.preventDefault();

        submitForm(addCreation);
    });

    function collectDataFromForm(addCreation){
        
        const formData = new FormData(addCreation);
        
        return {
            name: formData.get("name"),
            image: formData.get("image"),
            description: formData.get("description"),
            status: formData.get("transaction"),
            price: formData.get("price")
        }
    };
    
    async function submitForm(addCreation){
       
        try {
         
            loadSpinner("load-spinner", addCreation);
            const message = collectDataFromForm(addCreation);
            await createAdd(message);
            debugger
            
            dispatchEvent("notification-ad-created", {
              message: "Anuncio creado exitosamente",
              type: "success"  
            }, addCreation );  
            setTimeout(() => {       
                window.location = "./index.html";
            }, 3000);
          
            //alert("Producto creado correctamente");
           
        } catch (error) {
            dispatchEvent("notification-ad-created",{
                message: error,
                type: "error"
            }, addCreation);
        }finally{
            loadSpinner("hide-spinner", addCreation);
        }
    };
}

