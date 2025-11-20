const sistema = require('./negocio');

console.log("--- ReservaYa (Arquitectura 3 Capas) ---");
console.log("Usuario intenta reservar...");
const resultado = sistema.procesarReserva(1, "Pedro Mendez");
console.log("Pantalla muestra:", resultado);