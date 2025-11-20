# Proyecto Final: ReservaYa

Evolución de una arquitectura de software

## Estructura del Proyecto

Este repositorio demuestra la evolución de la plataforma "ReservaYa" a través de 4 etapas:

1.  **Parte 1 - Monolito:** (`/Monolito`)
    * Toda la lógica encapsulada en un único script.
    * Ejecución: `node monolito.js`

2.  **Parte 2 - Capas Distribuidas:** (`/Capas`)
    * Separación lógica en Datos, Negocio y Presentación.
    * Ejecución: `node main.js`

3.  **Parte 3 - API REST:** (`/REST`)
    * Exposición de servicios mediante HTTP/JSON con Express.js.
    * Instalación: `npm install`
    * Ejecución: `node api.js`

4.  **Parte 4 - Microservicios:** (`/Microservices`)
    * División de dominio en servicios autónomos (Catálogo y Reservas).
    * Instalación: `npm install` 
    * Ejecución: `node servicio_catalogo.js` y `node servicio_reservas.js`


