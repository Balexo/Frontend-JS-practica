import { buildAuthenticatedSession, buildSession} from "./session-view.js";


export const sessionController = nav => {
    if (isUserLoggedIn()){
        nav.innerHTML=buildAuthenticatedSession();
        const logoutButton = nav.querySelector("button");
        logoutButton.addEventListener("click", ()=>{
            localStorage.removeItem('token');
            sessionController(nav);
        })
    }else{
        nav.innerHTML= buildSession();
    }
}
function isUserLoggedIn(){
    return localStorage.getItem("token")
}