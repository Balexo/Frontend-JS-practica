import { getAddDetail } from "./add-detail-model.js";
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
    } catch (error) {
        alert(error)
    }

    function goBackButton(addDetail){
        const backButton = addDetail.querySelector("#goBack");
        backButton.addEventListener("click", () =>{
            window.history.back()
        })
    }
}