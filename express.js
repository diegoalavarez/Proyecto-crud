const express = require(`express`)
const app = express();

const {infoCourses} = require('./data/courses.js');

const routerMarketing = require('./routers/marketing.js');

const routerProgramming = require('./routers/programming.js')

//Rutas
app.use("/api/courses/programming", routerProgramming);

app.use("/api/courses/marketing", routerMarketing);

//Rutas
app.get('/api/courses', (req, res) =>{
    res.send(JSON.stringify(infoCourses));
} );

app.get("/", (req, res) => {
    res.send(`El servidor está funcionando correctamente. Puedes acceder a las rutas de cursos de programación y marketing.`);
})

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}...`);
});