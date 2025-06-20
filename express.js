const express = require('express');
const app = express();

const {infoCursos} = require('./data/cursos.js');

//Routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion',  routerProgramacion);

const routerMarketing = require('./routers/marketing.js');
app.use('/api/cursos/marketing', routerMarketing);

//routing

app.get("/", (req, res) => {
    res.send(`El servidor está funcionando correctamente. Puedes acceder a las rutas de cursos de programación y marketing.`);
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

// ruta del server
const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}...`);
});
