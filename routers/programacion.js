const express = require('express');

const {programacion} = require('../data/cursos.js').infoCursos;

const routerProgramacion = express.Router();

routerProgramacion.use(express.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion)); 
}); // Ruta para obtener todos los cursos de programación

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje); // Filtra los cursos por lenguaje

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

    if (req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});
   
 routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel; // Obtiene el lenguaje y el nivel de los parámetros de la ruta
    
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} en el nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));
 });

// Ruta para agregar un nuevo curso de programación

routerProgramacion.post('/',(req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
 });

 // Ruta para actualizar un curso de programación por ID

 routerProgramacion.put('/:id', (req, res) => {
  const cursoActualizado = req.body; // Obtiene el curso actualizado del cuerpo de la solicitud

  const id = req.params.id; // Obtiene el ID del curso a actualizar desde los parámetros de la ruta

  const indice = programacion.findIndex(curso => curso.id == id); // Busca el índice del curso por ID

  if (indice >= 0) {
    programacion[indice] = cursoActualizado; // Actualiza el curso en el índice encontrado
  }
  res.json(programacion);
});

// Ruta para modificar parcialmente un curso de programación por ID

routerProgramacion.patch('/:id', (req, res) => {
  const infoNueva = req.body;
  const id = req.params.id; // Obtiene el ID del curso a modificar desde los parámetros de la ruta

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoNueva); // Modifica el curso con la nueva información
  }
  res.json(programacion);
});

// Ruta para eliminar un curso de programación por ID

routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
    // Obtiene el ID del curso a eliminar desde los parámetros de la ruta
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    programacion.splice(indice, 1); // Elimina el curso del array
  }
  res.json(programacion);
});

 module.exports = routerProgramacion;