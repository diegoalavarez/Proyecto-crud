# Proyecto CRUD de Cursos con Node.js y Express

Este proyecto es una API RESTful para la gestión de cursos de **programación** y **marketing**. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los cursos, utilizando Node.js y Express.

## Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior recomendado)
- [npm](https://www.npmjs.com/)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/rafaeltriasdev/Proyecto-crud.git
   cd Proyecto-crud
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

## Dependencias

- **express**: Framework para crear el servidor y las rutas.
- **nodemon**: Herramienta para desarrollo que reinicia el servidor automáticamente al detectar cambios.

## Ejecución

Para iniciar el servidor en modo desarrollo (con recarga automática):

```sh
npm run dev
```

El servidor estará disponible en: [http://localhost:3000](http://localhost:3000)

---

## Endpoints

### General

- **GET /**  
  Respuesta: Mensaje de bienvenida.

- **GET /api/cursos**  
  Respuesta: JSON con todos los cursos de programación y marketing.

---

### Cursos de Programación

Ruta base: `/api/cursos/programacion`

#### Métodos:

- **GET /**  
  Devuelve todos los cursos de programación.

- **GET /:lenguaje**  
  Devuelve cursos filtrados por lenguaje (ej: `javascript`, `python`).
  - Query param opcional: `ordenar=vistas` para ordenar por vistas descendente.

- **GET /:lenguaje/:nivel**  
  Devuelve cursos filtrados por lenguaje y nivel (ej: `/javascript/intermedio`).
  - Query param opcional: `ordenar=vistas`.

- **POST /**  
  Crea un nuevo curso de programación.  
  **Body:**  
  ```json
  {
    "id": 7,
    "titulo": "Aprende Node.js",
    "lenguaje": "javascript",
    "vistas": 45676,
    "nivel": "basico"
  }
  ```

- **PUT /:id**  
  Reemplaza completamente un curso por ID.  
  **Body:** (estructura completa del curso)

- **PATCH /:id**  
  Modifica parcialmente un curso por ID.  
  **Body:** (solo los campos a modificar)

- **DELETE /:id**  
  Elimina un curso por ID.

---

### Cursos de Marketing

Ruta base: `/api/cursos/marketing`

#### Métodos:

- **GET /**  
  Devuelve todos los cursos de marketing.

- **GET /:tema**  
  Devuelve cursos filtrados por tema (ej: `marketing-digital`, `neuromarketing`).

- **GET /:tema/:nivel**  
  Devuelve cursos filtrados por tema y nivel (ej: `/marketing-digital/basico`).
  - Query param opcional: `ordenar=vistas`.

- **POST /**  
  Crea un nuevo curso de marketing.  
  **Body:**  
  ```json
  {
    "id": 13,
    "titulo": "Nuevo curso",
    "tema": "nuevo-tema",
    "nivel": "basico",
    "vistas": 100
  }
  ```

- **PUT /:id**  
  Reemplaza completamente un curso de marketing por ID.

- **PATCH /:id**  
  Modifica parcialmente un curso de marketing por ID.

- **DELETE /:id**  
  Elimina un curso de marketing por ID.

---

## Ejemplo de uso

Puedes probar los endpoints usando [index.http](index.http) en VS Code con la extensión "REST Client" o herramientas como Postman.

---

## Estructura del Proyecto

- [`express.js`](express.js): Archivo principal del servidor.
- [`data/cursos.js`](data/cursos.js): Datos de cursos.
- [`routers/programacion.js`](routers/programacion.js): Rutas de programación.
- [`routers/marketing.js`](routers/marketing.js): Rutas de marketing.

---

## Autoría

Desarrollado por Rafael