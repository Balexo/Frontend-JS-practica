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
            loadSpinner("load-spinner", loginForm); //Segundo spinner
            dispatchEvent("startLoginUser", null, loginForm);
            const jwt = await loginUser(email, password);
            localStorage.setItem("token", jwt);
            setTimeout(() => {
                window.location = "./index.html";
            }, 3000);
            alert("logeado correctamente")

        } catch (error) {
            alert(error)
        }
        finally{
            dispatchEvent("finishLoginUser", null, loginForm)
            loadSpinner("hide-spinner", loginForm) //Segundo spinner
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