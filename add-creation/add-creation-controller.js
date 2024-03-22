import { createAdd } from "./add-creation-model.js";


export function addCreationController(addCreation){

    addCreation.addEventListener("submit", async (event)=>{
        event.preventDefault();

        const formData = new FormData(addCreation);
        const name = formData.get("name");
        const image = formData.get("image");
        const description = formData.get("description");
        const transaction = formData.get("transaction");
        const price = formData.get("price")

        const message={
            name: name,
            image: image,
            description: description,
            status: transaction,
            price: price
        }

        try {
            await createAdd(message);
            setTimeout(() => {
                window.location = "./index.html"
              }, 2000);
            alert("Producto creado correctamente")
        } catch (error) {
            alert(error);
        }
    })
}