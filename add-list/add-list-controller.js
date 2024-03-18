import { getAdds } from "./add-list-model.js";
import { buildAdd } from "./add-list-view.js";

export  function addListController(addList){
    const showAddsButton = document.createElement("button");
    showAddsButton.textContent="Mostrar anuncios";
    addList.appendChild(showAddsButton);
    showAddsButton.addEventListener("click", async ()=>{
    
    handleShowAddsButtonClicked(addList);
}
)}

async function handleShowAddsButtonClicked(addList){

    try {
        const adds = await getAdds();
        renderAdds(adds, addList)
    }catch (error) {
        alert(error);
    }
}


async function renderAdds(adds, addList){
    
    adds.forEach(add => {
        const addItem=document.createElement("div");
        addItem.innerHTML=buildAdd(add);
        addList.appendChild(addItem);
    })
}