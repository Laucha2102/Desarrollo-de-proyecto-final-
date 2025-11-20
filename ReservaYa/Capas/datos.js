const baseDeDatos = [
    { id: 1, nombre: "Hotel Plaza", precio: 40000, disponible: true },
    { id: 2, nombre: "Cabaña del Rio", precio: 60000, disponible: true }
];

module.exports = {
    obtenerTodos: () => baseDeDatos,
    buscarPorId: (id) => baseDeDatos.find(item => item.id === id),
    actualizarDisponibilidad: (id, estado) => {
        const item = baseDeDatos.find(i => i.id === id);
        if (item) item.disponible = estado;
    }
};