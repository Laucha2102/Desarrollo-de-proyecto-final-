const express = require('express');
const app = express();

const inventario = [
    { id: 100, nombre: "Departamento Sol", zona: "Centro" },
    { id: 200, nombre: "Cabaña Luna", zona: "Montaña" }
];

app.get('/catalogo', (req, res) => {
    console.log("[Catalogo] Solicitud recibida");
    res.json(inventario);
});

app.listen(3001, () => console.log('Microservicio CATÁLOGO en puerto 3001'));