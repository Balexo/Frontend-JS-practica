import { loaderController } from "../loader/loader-controller.js";
import { dispatchEvent } from "../dispatchEvent.js";
import { createUser } from "./signup-model.js";
import { goBackButton } from "../utils/button.js";
import { dispatchEvent } from "../dispatchEvent.js"; 


export function singupController(register){
    const spinner = register.querySelector("#spinner");
    const {showLoader, hideLoader} = loaderController(spinner);


    document.addEventListener("DOMContentLoaded", ()=>{
        const backButton = register.querySelector("#back-button");
        goBackButton(backButton);
    });

    register.addEventListener("submit", (event)=>{
        event.preventDefault();
    
    handleSignupForSubmit(register);
    })

    function handleSignupForSubmit(register){
        let errors = [];

        if(!validateEmail(register)){
            errors.push("El formato del email no es correcto");
            
        }

        if(!validatePassword(register)){
            errors.push("Las contraseñas no son iguales");
        }

        showErrors(errors);

        if(errors.length===0){
            registerUser(register)
        }
    }

    function validateEmail(register){
        const email = register.querySelector("#email")
        const regex = new RegExp (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        
        return regex.test(email.value);
    }

     function validatePassword(register){
        const password = register.querySelector("#password");
        const passwordVerification = register.querySelector("#password-confirmation");
       
        return password.value === passwordVerification.value
        
    }

    function showErrors(errors){
        errors.forEach(error => {
        dispatchEvent("signup-notification", {
            message: error,
            type: "error"
        }, register);
    })
        console.log(errors)
    };
    

    async function registerUser(register){
        const email = register.querySelector("#email")
        const password = register.querySelector("#password");

        try {
            showLoader()
            await createUser(email.value, password.value) 
            dispatchEvent("signup-notification", {
                message: "Registrado exitosamente",
                type: "success"
            }, register)
                        
            console.log("PRE")
            setTimeout(()=>{
                console.log("IN")
                window.location = "./index.html";
                
            }, 10000);
            console.log("AFT")
            
        }catch(error) {
            dispatchEvent("signup-notification", {
                message: error,
                type: "error"
            }, register)
        }finally {
            hideLoader();
        }
    }

}