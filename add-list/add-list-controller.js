import { getAdds } from "./add-list-model.js";
import { buildAdd, buildEmptyAdds } from "./add-list-view.js";
import { dispatchEvent } from "../dispatchEvent.js";

export  function addListController(addList){
    const showAddsButton = document.createElement("button");
    showAddsButton.textContent="Mostrar anuncios";
    addList.appendChild(showAddsButton);
    showAddsButton.addEventListener("click", async ()=>{
    
    handleShowAddsButtonClicked(addList);
}
)
}
async function handleShowAddsButtonClicked(addList){
    const spinner = addList.querySelector(".lds-roller");
    try {
        spinner.classList.toggle("hidden");
        const adds = await getAdds();
        if(adds.length>0){
            renderAdds(adds, addList)
        }else{
            renderEmptyAdds(addList);
        }
    }catch (error) {
        dispatchEvent("error-loading-adds", {
            message: messageError,
            type: "error"
        }, addList);
    }
    spinner.classList.toggle("hidden");
}


async function renderAdds(adds, addList){
    
    adds.forEach(add => {
        const addItem=document.createElement("div");
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
