import { getAddDetail, getUserData, deleteAdd } from "./add-detail-model.js";
import { buildAddDetail } from "./add-detail-view.js";

export async function addDetailController(addDetail){

    const params = new URLSearchParams(window.location.search)
    const addId = params.get("addId");
    if(!addId){
        window.location.href = "./index.html";
    }
    goBackButton(addDetail);

    try {
        const add = await getAddDetail(addId)
        const container = addDetail.querySelector("#container");
        container.innerHTML = buildAddDetail(add)
        handleRemoveAddButton(addDetail, add);
    } catch (error) {
        alert(error)
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
                console.log('pPREEEEE deleteAdd completed')
                await deleteAdd(addId, token)
                console.log('deleteAdd completed')
                setTimeout(()=>{
                    console.log("Inside setTimeout")
                    window.location.href = 'index.html'
                },2000)
            }catch(error){
                console.log("erro in deleted", error)
                alert(error)
            }
        }
    }
}