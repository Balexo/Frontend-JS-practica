import { loadSpinner } from "../utils/loadingSpinner.js";
import { getAddDetail, getUserData, deleteAdd } from "./add-detail-model.js";
import { buildAddDetail } from "./add-detail-view.js";
import { dispatchEvent } from "../dispatchEvent.js"; 
import { goBackButton } from "../utils/button.js";
 

export async function addDetailController(addDetail){

    const params = new URLSearchParams(window.location.search);
    const addId = params.get("addId");
    const notifications = addDetail.querySelector("#notification");
    
    if(!addId){
        window.location= "./index.html";
    } 

    goBackButton(addDetail);

    try {
        loadSpinner("load-spinner", addDetail);
        const add = await getAddDetail(addId);
        const container = addDetail.querySelector("#container");
        container.innerHTML = buildAddDetail(add);
        handleRemoveAddButton(addDetail, add);
    } catch (error) {
        dispatchEvent("ad-no-exist", {
            message :"El anuncio no existe",
            type: "error"
        }, notifications);
        setTimeout(() => {
            window.location= "./index.html";
        }, 2000); 
    }finally{
        loadSpinner("hide-spinner", addDetail);
    }
    
    async function handleRemoveAddButton(addDetail, add){
        const token = localStorage.getItem("token");
        const userData = await getUserData(token);
        
        if(add.userId === userData.id){    
            const removeAddButton = addDetail.querySelector("#removeAddButton");
            removeAddButton.removeAttribute("disabled");
            removeAddButton.addEventListener("click", ()=>{
                removeAdd(add.id, token)})
        }
    }

    async function removeAdd(addId, token){
        if(window.confirm("Seguro que quieres borrar el anuncio?")){
            try{
                debugger
                
                debugger
                dispatchEvent("add-deleted", {
                    message: "Anuncio borrado correctamente",
                    type: "success"
                }, notifications);
                console.log("Anuncio presetTimeout")
                setTimeout(() => {
                    console.log("Anuncio insetTimeout")
                    window.location = "./index.html";
                }, 3000);
                await deleteAdd(addId, token);
                console.log("Anuncio postsetTimeout")
            
            }catch(error){
                console.log(error)
            }
        }
    }
}