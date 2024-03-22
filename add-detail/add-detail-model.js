function parseAdd(add){
    return {
        id:add.id,
        name: add.name,
        image: add.image,
        description: add.description,
        status: add.status,
        price: add.price,
        userId: add.userId,
    }
}

function parseUser(user){
    return {
        id: user.id
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

export async function getUserData(token){
    const url = 'http://localhost:8000/auth/me';

    try {
        const response = await fetch(url,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
        })
        const data = await response.json();
        return parseUser(data);
    } catch (error) {
        throw new Error("Error datos del usuario")
    }
}

export async function deleteAdd(addId, token){
    const url = `http://localhost:8000/api/adds/${addId}`;

    try {
        const response = await fetch(url,{
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
   
        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message);
        }
    }catch{
        throw new Error("Error removing add")

        }
    };