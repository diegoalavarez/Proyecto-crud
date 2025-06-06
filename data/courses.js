const infoCursos = {
    programacion: [
        { 
            id: 1, 
            titulo: "Aprende Python", 
            lenguaje: "Python", 
            nivel: "Basico", 
            vistas: 1234 
        },
        { 
            id: 2, 
            titulo: "Aprende JavaScript", 
            lenguaje: "JavaScript", 
            nivel: "Intermedio", 
            vistas: 4321 
        },
        { 
            id: 3, 
            titulo: "Aprende Java", 
            lenguaje: "Java", 
            nivel: "Avanzado", 
            vistas: 5678 
        },
        { 
            id: 4, 
            titulo: "Desarrollo Web con React", 
            lenguaje: "JavaScript", 
            nivel: "Intermedio", 
            vistas: 3500 
        },
        { 
            id: 5, 
            titulo: "Node.js y Express", 
            lenguaje: "JavaScript", 
            nivel: "Avanzado", 
            vistas: 2700 
        },
        { 
            id: 6, 
            titulo: "Bases de Datos con MongoDB", 
            lenguaje: "MongoDB", 
            nivel: "Intermedio", 
            vistas: 3200 
        }
    ],
    marketing: [
        { 
            id: 7, 
            titulo: "Fundamentos de Marketing Digital", 
            lenguaje: "Marketing", 
            nivel: "Basico", 
            vistas: 3000 
        },
        { 
            id: 8, 
            titulo: "Estrategias de Contenido", 
            lenguaje: "Marketing", 
            nivel: "Intermedio", 
            vistas: 2200 
        },
        { 
            id: 9, 
            titulo: "Neuromarketing Avanzado", 
            lenguaje: "Marketing", 
            nivel: "Avanzado", 
            vistas: 1800 
        },
        { 
            id: 10, 
            titulo: "SEO y Posicionamiento Web", 
            lenguaje: "Marketing", 
            nivel: "Intermedio", 
            vistas: 2600 
        },
        { 
            id: 11, 
            titulo: "Publicidad en Redes Sociales",
            lenguaje: "Marketing", 
            nivel: "Basico", 
            vistas: 2800 
        },
        { 
            id: 12, 
            titulo: "Analítica de Datos en Marketing", 
            lenguaje: "Marketing", 
            nivel: "Avanzado", 
            vistas: 2000 
        }
    ]
};

// Simulación de una API para obtener cursos
function obtenerCursos(req) {
    const { categoria, nivel, ordenar } = req;
    let cursos = infoCursos[categoria]?.filter(curso => curso.nivel === nivel) || `La categoría '${categoria}' no existe.`;

    if (ordenar === "vistas" && Array.isArray(cursos)) {
        cursos = cursos.sort((a, b) => b.vistas - a.vistas);
    }

    return cursos;
}

// Ejemplo de uso de la API simulada
const request = { categoria: "programacion", nivel: "Intermedio", ordenar: "vistas" };
console.log(obtenerCursos(request));