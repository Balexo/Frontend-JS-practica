function parseAdd(add){
    return {
        id:add.id,
        name: add.name,
        image: add.image,
        description: add.description,
        status: add.status,
        price: add.price,
    }
}

export async function getAddDetail(AddId){
    const url= `http://localhost:8000/api/adds/${AddId}`
    

    try {
        const response = await fetch(url);
        const data = await response.json();
        const add = parseAdd(data)
        return add;

    } catch (error) {
        throw new Error("Error obteniendo el anuncio")
    }
}