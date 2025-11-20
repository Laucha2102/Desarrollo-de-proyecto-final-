const datos = require('./datos');

class GestorReservas {
    procesarReserva(id, usuario) {
        const alojamiento = datos.buscarPorId(id);
        
        if (!usuario || usuario.length < 3) return "Error: Usuario inválido";

        if (alojamiento && alojamiento.disponible) {
            datos.actualizarDisponibilidad(id, false);
            return `ReservaYa: Confirmada para ${usuario} en ${alojamiento.nombre}`;
        }
        return "ReservaYa: Alojamiento ocupado o inexistente";
    }
}

module.exports = new GestorReservas();