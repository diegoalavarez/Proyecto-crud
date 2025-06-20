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

module.exports = routerMarketing;