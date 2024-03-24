# Frontend-JS-practica

## Descripción
Este repositorio contiene una aplicación de JavaScript para el frontend que permite el registro de anuncios. 

## Funcionalidades
La aplicación tiene las siguientes funcionalidades:

1. **Listado de anuncios**: Cada anuncio muestra su imagen (si tiene), nombre, descripción, precio y si es compra o venta. Los anuncios se obtienen a través de un endpoint.

2. **Detalle de anuncio**: Al pulsar sobre un anuncio, se muestra el detalle del anuncio con foto (si tiene), nombre, descripción, precio y si es compra o venta. Si el usuario está autenticado y el anuncio le pertenece, se muestra un botón que permite eliminar el anuncio.

3. **Creación de un anuncio**: Se muestra un formulario para crear un anuncio con los campos de foto (opcional), nombre (obligatorio), descripción (obligatorio), precio (obligatorio) y compra/venta (obligatorio).

## API REST
La aplicación utiliza sparrest.js como API REST de apoyo para la práctica. Este API REST expone varios endpoints, incluyendo `POST /auth/register`, `POST /auth/login`, `POST /upload` y varios otros en `/api/`.

## Instalación
Para hacer funcionar el servidor, clona el repositorio de sparrest.js e instala las dependencias con `npm install`. Luego, arranca el servidor con `npm start`.

## Contribución
Si deseas contribuir a este proyecto, por favor, crea una cuenta en GitHub y realiza un "fork" de este repositorio.

## Contacto
Para más información, puedes contactar a través de [GitHub].

## Licencia
Este proyecto está bajo la licencia MIT.