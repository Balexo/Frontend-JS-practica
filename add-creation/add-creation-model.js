export const createAdd = async(addDetails) =>{
    const url ="http://localhost:8000/api/adds";
    const token = localStorage.getItem("token");

    let response;

    const body = {
        name: addDetails.name,
        image: addDetails.image,
        description: addDetails.description,
        status: addDetails.status,
        price: addDetails.price,
    }

    try{
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message);
        }
    }catch (error){
        if(error.message){
            throw error.message;
        }else{
            throw error;
        }
    }
}