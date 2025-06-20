const express = require('express');

const {marketing} = require('../data/cursos.js').infoCursos;

const routerMarketing = express.Router();

routerMarketing.get('/', (req, res) => {
    res.send(JSON.stringify(marketing)); 
});

routerMarketing.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = marketing.filter(curso => curso.tema === tema);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }

    if (req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }
     res.send(JSON.stringify(resultados));
});


routerMarketing.get('/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;

    const resultados = marketing.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    if (req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});

// Ruta para agregar un nuevo curso de marketing

routerMarketing.post('/',(req, res) => {
    let cursoNuevo = req.body;
    marketing.push(cursoNuevo);
    res.send(JSON.stringify(marketing));
 });

 // Ruta para actualizar un curso de marketing por ID

 routermarketing.put('/:id', (req, res) => {
  const cursoActualizado = req.body; // Obtiene el curso actualizado del cuerpo de la solicitud

  const id = req.params.id; // Obtiene el ID del curso a actualizar desde los parámetros de la ruta

  const indice = marketing.findIndex(curso => curso.id == id); // Busca el índice del curso por ID

  if (indice >= 0) {
    marketing[indice] = cursoActualizado; // Actualiza el curso en el índice encontrado
  }
  res.json(marketing);
});

// Ruta para modificar parcialmente un curso de marketing por ID

routermarketing.patch('/:id', (req, res) => {
  const infoNueva = req.body;
  const id = req.params.id; // Obtiene el ID del curso a modificar desde los parámetros de la ruta

  const indice = marketing.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = marketing[indice];
    Object.assign(cursoAModificar, infoNueva); // Modifica el curso con la nueva información
  }
  res.json(marketing);
});

// Ruta para eliminar un curso de marketing por ID

routermarketing.delete('/:id', (req, res) => {
  const id = req.params.id;
    // Obtiene el ID del curso a eliminar desde los parámetros de la ruta
  const indice = marketing.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    marketing.splice(indice, 1); // Elimina el curso del array
  }
  res.json(marketing);
});

module.exports = routerMarketing;