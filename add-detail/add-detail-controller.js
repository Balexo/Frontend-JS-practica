import { loadSpinner } from "../utils/loadingSpinner.js";
import { getAddDetail, getUserData, deleteAdd } from "./add-detail-model.js";
import { buildAddDetail } from "./add-detail-view.js";


export async function addDetailController(addDetail){
    
    const params = new URLSearchParams(window.location.search)
    const addId = params.get("addId");
    if(!addId){
        alert("No existe este anuncio")
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
        alert(error)
    }finally{
        loadSpinner("hide-spinner", addDetail);
    }
    function goBackButton(addDetail){
        const backButton = addDetail.querySelector("#goBack");
        backButton.addEventListener("click", () =>{
            window.history.back()
        })
    }

    async function handleRemoveAddButton(addDetail, add){
        const token = localStorage.getItem("token");
        const userData = await getUserData(token);

        if(add.userId === userData.id){
            const removeAddButton = addDetail.querySelector("#removeAddButton");

            removeAddButton.removeAttribute("disabled");
            removeAddButton.addEventListener("click", async ()=>{
                await removeAdd(add.id, token)})
        }
    }

    async function removeAdd(addId, token){
        if(window.confirm("Seguro que quieres borrar el Add")){
            try{
                
                await deleteAdd(addId, token)
                alert("Anuncio borrado")
                //setTimeout(()=>{
                window.location = "./index.html";
                //},2000)
            }catch(error){
                alert(error)
            }
        }
    }
}