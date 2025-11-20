const express = require('express');
const app = express();
app.use(express.json());

const reservasDB = []; 

app.post('/crear-reserva', (req, res) => {
    const { propiedadId, usuario } = req.body;
    
    
    const nueva = { 
        id: Date.now(), 
        propiedadId, 
        usuario, 
        status: "PENDIENTE_PAGO" 
    };
    reservasDB.push(nueva);
    
    console.log(`[Reservas] Nueva reserva creada para ${usuario}`);
    res.status(201).json(nueva);
});

app.listen(3002, () => console.log('Microservicio RESERVAS en puerto 3002'));