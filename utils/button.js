export function goBackButton(nodeBackButton){
    const backButton = document.querySelector("#back-button");

    nodeBackButton.addEventListener("click", ()=>{
        window.history.back();
    })
}