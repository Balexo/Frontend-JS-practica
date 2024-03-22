export function buildAddDetail(add){
    return `
    <div class="add-detail">
    <h2>${add.name}</h2>
    <img src="${add.image}" />
    <p>${add.description}</p>
    <p>${add.status}: ${add.price}€</p>
    </div>
    `
}