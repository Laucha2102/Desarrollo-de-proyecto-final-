const express = require('express');
const app = express();
app.use(express.json());

let alojamientos = [
    { id: 1, nombre: "Suite Centro", estado: "libre" },
    { id: 2, nombre: "Casa Quinta", estado: "libre" }
];

app.get('/api/alojamientos', (req, res) => {
    res.json(alojamientos);
});

app.post('/api/reservar', (req, res) => {
    const { id, cliente } = req.body;
    const item = alojamientos.find(a => a.id === id);

    if (item && item.estado === 'libre') {
        item.estado = 'reservado';
        res.status(201).json({ 
            mensaje: "ReservaYa: Éxito", 
            ticket: { cliente, lugar: item.nombre } 
        });
    } else {
        res.status(400).json({ error: "No disponible" });
    }
});

app.listen(3000, () => console.log('API ReservaYa corriendo en puerto 3000'));