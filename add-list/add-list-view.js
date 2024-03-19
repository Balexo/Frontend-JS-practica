export function buildAdd(add){
    return `
    <p>${add.name}</p>
    <p>${add.image}</p>
    <p>${add.description}</p>
    <p>${add.status}: ${add.price}€</p>
    `
}

export function buildEmptyAdds(){
    return `
    <p>Lo sentimos pero no hay anuncios publicados<p>`

}