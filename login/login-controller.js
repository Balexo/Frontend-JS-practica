import { loaderController } from "../loader/loader-controller.js";
import { dispatchEvent } from "../dispatchEvent.js";
import { loginUser } from "./login-model.js";

export const loginController = (loginForm) => {
    const spinner = loginForm.querySelector("#login-form")
    loginForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        submitLogin(loginForm);
    });



const submitLogin = async (loginForm) =>{
    const {email, password} = getLoginData(loginForm);
    const {showLoader, hideLoader} = loaderController(spinner)

    try {
        showLoader();
        dispatchEvent("startLoginUser", null, loginForm);
        const jwt = await loginUser(email, password);
        alert("User logged correctly.")
        localStorage.setItem("token", jwt);
        window.location = "./index.html"

    } catch (error) {
        alert(error)
    }
    finally{
        dispatchEvent("finishLoginUser", null, loginForm)
        hideLoader();
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
};