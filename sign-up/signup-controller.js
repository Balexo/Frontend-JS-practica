import { createUser } from "./signup-model";

export function singupController(register){
    register.addEventListener("submit", (event)=>{
        event.preventDefault();
    
    handleSignupForSubmit(register);
    })
};


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
    const regex = new RegExp (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
    return regex.test(email);
}

function validatePassword(register){
    const password = register.querySelector("#password");
    const passwordVerification = register.querySelector("#password-confirmation");
    
    return password.value!==passwordVerification.value
       
}

function showErrors(){
    errors.forEach(error => {
    alert(error);
})
};

async function registerUser(register){
    const email = register.querySelector("#email")
    const password = register.querySelector("#password");

    try {
        await createUser(email.value, password.value)
            alert("Usuario creado correctamente");
            window.location.href= "index.html";
    }catch(error) {
        alert(error);
    }

}

