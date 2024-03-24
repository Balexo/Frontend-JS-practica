export const buildSession = () =>{
    return`
    <ul>
        <li> 
            <a href="../login.html">Login</a>
            <a href="../signup.html">Signup</a>
        </li>
    `
}

export const buildAuthenticatedSession =() => {
    return `
    <button> Cerrar sesión </button>
    <a href="./create-add.html" > Crear nuevo anuncio </a>
    `
}