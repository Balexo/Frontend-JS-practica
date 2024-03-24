import { loadSpinner } from "../utils/loadingSpinner.js";
import { dispatchEvent } from "../dispatchEvent.js";
import { loginUser } from "./login-model.js";

export const loginController = (loginForm) => {
    
    
    submitUserData(loginForm);

    loginForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        submitLogin(loginForm);
    })
    
    function submitLogin (loginForm){
        const {email, password} = getLoginData(loginForm);

        try {
            loadSpinner("load-spinner", loginForm);
            dispatchEvent("startLoginUser", null, loginForm);
            const jwt = await loginUser(email, password);
            //alert("User logged correctly.")
            localStorage.setItem("token", jwt);
            console.log("predugguer")
            setTimeout(() => {
                
                window.location = "./index.html";
                console.log("inside debugger")
            }, 3000);
            alert("logeado correctamente")
            console.log("POST dugguer");

        } catch (error) {
            alert(error)
        }
        finally{
            dispatchEvent("finishLoginUser", null, loginForm)
            loadSpinner("hide-spinner", loginForm)
        }
}

    const getLoginData = (loginForm)=>{
        const formData = new FormData(loginForm);
        const email = formData.get("email");
        const password = formData.get("password");

        return {
            email: email,
            password: password
        }
    }


}