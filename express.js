const express = require(`express`)
const app = express();

const {infoCourses} = require('./data/courses.js');
//const { json } = require('body-parser');

const routerMaths = require('./routers/maths.js');

const routerProgramming = require('./routers/programming.js')

// console.log(infoCourses); // print the courses data

//Routers
app.use("/api/courses/programming", routerProgramming);

app.use("/api/courses/maths", routerMaths);

//Routing
app.get('/api/courses', (req,res) =>{
    res.send(JSON.stringify(infoCourses));
} );

app.get("/", (req, res) => {
    res.send(`The server is running`);
})

    const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`The server is listening to the port ${PORT}..`);
} );



// sintaxis de servidor