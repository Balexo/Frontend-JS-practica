
import { buildLoader } from "./loader-view.js";


export function loaderController(loader){

    const showLoader = () => {
        loader.classList.remove("hidden");
        loader.innerHTML = buildLoader(loader);

    }

    const hideLoader = ()=> {
        loader.classList.add("hidden");
        loader.innerHTML = "";
    }

    return {
        showLoader, 
        hideLoader
        }
};