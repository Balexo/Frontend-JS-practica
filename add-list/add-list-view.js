export function buildAdd(add){
    return `
    <p>${add.name}</p>
    <p>${add.image}</p>
    <p>${add.description}</p>
    <p>${add.status}: ${add.price}€</p>
    `
}