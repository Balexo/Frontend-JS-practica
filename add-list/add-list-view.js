export function buildAdd(add){
    return `
    <a class="add" href="add-detail.html?addId=${add.id}">
    <h2>${add.name}</h2>
    <img src="${add.image}" />
    <p id="description">${add.description}</p>
    <p>${add.status}: ${add.price}€</p>
    </a>
    `
}

export function buildEmptyAdds(){
    return `
    <p>Lo sentimos pero no hay anuncios publicados<p>`

}