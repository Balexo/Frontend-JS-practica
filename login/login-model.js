export async function loginUser(){
    const url = 'http://localhost:8000/auth/register';

    let response;
    try {
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({username: email, password: password}),
            headers: {
                "Content-type": "application/json"
            }
        });
    
        const data = await response.json();
    
        if(!response.ok){
            throw new Error(data.message);
        }
    
        if(response.ok){
            return data.accesToken;
        }
        
    } catch (error) {
        if(error.message){
            throw error.message;
        }else{
            throw error;
        }
        
    }
}