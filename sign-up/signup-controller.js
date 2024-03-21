import { createUser } from "./signup-model.js";
import { dispatchEvent } from "../dispatchEvent.js";

export function singupController(register){
    register.addEventListener("submit", (event)=>{
        event.preventDefault();
    
    handleSignupForSubmit(register);
    })

    let errors = [];

    function handleSignupForSubmit(register){
        

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
        const email = register.querySelector("#email").value
        const regex = new RegExp (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        
        return regex.test(email);
    }

    function validatePassword(register){
        const password = register.querySelector("#password");
        const passwordVerification = register.querySelector("#password-confirmation");
        console.log(password)
        console.log(passwordVerification)
      
        return password.value === passwordVerification.value
        
    }

    function showErrors(){
        errors.forEach(error => {
        dispatchEvent("dispatch-error", error, register);
        
    })
    };

    async function registerUser(register){
        const email = register.querySelector("#email")
        const password = register.querySelector("#password");

        try {
            await createUser(email.value, password.value)
                alert("Usuario creado correctamente");
                window.location.href = 'index.html';
        }catch(error) {
            alert(error);
        }

    }

}