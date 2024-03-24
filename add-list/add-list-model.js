function parseAdds(data){
    return data.map(data=>({
        name: data.name,
        image: data.image,
        description: data.description,
        status: data.status,
        price: data.price,
        id: data.id,
    }))
}
    
    export async function getAdds(){
        const url = 'http://localhost:8000/api/adds'

        let adds= [];

        try {
            const response = await fetch(url);
            const data = await response.json();
            adds = parseAdds(data);
            
        } catch (error) {
            throw new Error ("Error obteniendo los anuncios");
        }
    return adds;
}
