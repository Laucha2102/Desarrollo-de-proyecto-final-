class ReservaYaApp {
    constructor() {
        this.alojamientos = [
            { id: 1, nombre: "Hotel Plaza", ciudad: "Tucumán", precio: 40000, disponible: true },
            { id: 2, nombre: "Cabaña del Rio", ciudad: "Tafí", precio: 60000, disponible: true }
        ];
        this.reservas = [];
    }

    gestionarReserva(usuario, alojamientoId) {
        const item = this.alojamientos.find(a => a.id === alojamientoId);

        if (item && item.disponible) {
            item.disponible = false; 
            const nuevaReserva = {
                ticket: this.reservas.length + 100,
                cliente: usuario,
                lugar: item.nombre,
                fecha: new Date().toLocaleDateString()
            };
            this.reservas.push(nuevaReserva);
            return `[EXITO] Reserva confirmada: ${JSON.stringify(nuevaReserva)}`;
        } else {
            return `[ERROR] El alojamiento ${alojamientoId} no está disponible.`;
        }
    }

    verCatalogo() {
        return this.alojamientos.filter(a => a.disponible);
    }
}

const app = new ReservaYaApp();
console.log("--- Bienvenido a ReservaYa (Monolito) ---");
console.log("Disponibles:", app.verCatalogo());
console.log(app.gestionarReserva("Ana García", 2));
console.log("Disponibles actualizados:", app.verCatalogo());