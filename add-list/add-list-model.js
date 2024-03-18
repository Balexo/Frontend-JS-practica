export async function parseAdds(data){
    return data.map(data=>({
        name: data.name,
        image: data.image,
        description: data.description,
        status: data.status,
        price: data.price
    }))
}
    /*return [
        {
            userId: '1',
            name: 'Computer',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/MSI_laptop_with_English_Wikipedia_screenshot_20100614.jpg/1280px-MSI_laptop_with_English_Wikipedia_screenshot_20100614.jpg',
            description: "Ordenador MSI",
            status: "Venta",
            price: 150 
        }
    ];*/

    export async function getAdds(){
        const url = 'http://localhost:8000/api/adds'

        let adds= [];

        try {
            const response = await fetch(url);
            const data = await response.json();
            adds = parseAdds(data);
            
        } catch (error) {
            throw new Error ("Error obteniendo los tweets");
        }
    return adds;
}
