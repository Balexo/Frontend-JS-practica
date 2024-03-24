import { loadSpinner } from "../utils/loadingSpinner.js";
import { createAdd } from "./add-creation-model.js";


export function addCreationController(addCreation){
    
    submitForm(addCreation)
    
    addCreation.addEventListener("submit", (event)=>{
        event.preventDefault()
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
            alert("Producto creado correctamente");
            setTimeout(() => {
                window.location = "./index.html";
            }, 2000);
        } catch (error) {
            alert(error);
        }finally{
            loadSpinner("hide-spinner", addCreation);
        }
    };
}

