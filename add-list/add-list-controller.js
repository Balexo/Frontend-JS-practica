import { getAdds } from "./add-list-model.js";
import { buildAdd, buildEmptyAdds } from "./add-list-view.js";
import { dispatchEvent } from "../dispatchEvent.js";
import { loadSpinner } from "../utils/loadingSpinner.js"; 

export async  function addListController(addList){
    
    try {
        loadSpinner("load-spinner", addList)

        const adds = await getAdds();
        if(adds.length>0){
            renderAdds(adds, addList)
        }else{
            renderEmptyAdds(addList);
        }
    }catch (error) {
        dispatchEvent("error-loading-adds", {
            message: error,
            type: "error"
        }, addList);
    }finally{
        loadSpinner("hide-spinner", addList);
    }
}


async function renderAdds(adds, addList){
    
    adds.forEach(add => {
        const addItem=document.createElement("div");
        addItem.classList.add("add-ref")
        addItem.innerHTML=buildAdd(add);
        addList.appendChild(addItem);
    })
}

function renderEmptyAdds(addList){
    addList.innerHTML=buildEmptyAdds();
}

/*
function dispatchErrorEvent(messageError, addList){
    const event = new CustomEvent("error-loading-adds", {
        detail: {
            message: messageError,
            type: "error"
        }
    });

    addList.dispatchEvent(event);
}
*/
