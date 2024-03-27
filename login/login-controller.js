import { loadSpinner } from "../utils/loadingSpinner.js";
import { dispatchEvent } from "../dispatchEvent.js";
import { loginUser } from "./login-model.js";
import { goBackButton } from "../utils/button.js";

export const loginController = (loginForm) => {
    const backButton = loginForm.querySelector("#back-button");
    goBackButton(backButton);

    loginForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        submitLogin(loginForm);
    })
    
    async function submitLogin (loginForm){
        const {email, password} = getLoginData(loginForm);

        try {
            loadSpinner("load-spinner", loginForm); 
            const jwt = await loginUser(email, password);
            localStorage.setItem("token", jwt);
            loadSpinner("hide-spinner", loginForm) 
            dispatchEvent("loginUser", {
                message: "Usuario registrado correctamente",
                type: "success"
            }, loginForm);
            //alert("logeado correctamente")
            setTimeout(() => {
                window.location = "./index.html";
            }, 3000);

        } catch (error) {
            dispatchEvent("loginUser",{
            message: "Error en el registro del usuario",
            type: "error"
        }, loginForm)
        }
        finally{
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