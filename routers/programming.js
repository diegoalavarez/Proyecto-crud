const express = require(`express`);
const routerProgramming = express.Router();
const { infoCourses } = require('../data/courses.js');
const programmingCourses = infoCourses.Programming;

//Middleware
routerProgramming.use(express.json());




//P.P.P.D


//Post

routerProgramming.post("/", (req, res) =>{

    let newCourse = req.body;
    programmingCourses.push(newCourse);
    res.json(programmingCourses); 
});



//Put
routerProgramming.put('/:id' , (req,res) =>{

const updatedCourse = req.body;
const id = req.params.id;

const index = programmingCourses.findIndex(curso => curso.id == id);

if(index >= 0){
    programmingCourses[index] = updatedCourse
}else{
    res.status(404).json(`Course with id ${id} could not be found` ); 

}
res.send(JSON.stringify(programmingCourses));

});



//Patch

routerProgramming.patch('/:id' , (req,res) =>{

    const updatedElement = req.body;
    const id = req.params.id;

    const index = programmingCourses.findIndex(curso => curso.id == id);

    if(index >= 0){
        const courseToBeModified = programmingCourses[index];
        Object.assign(courseToBeModified, updatedElement);
        res.json(programmingCourses); 
    } else {
        res.status(404).json(`Course with id ${id} could not be found` ); 
    }

}); 




//Delete

routerProgramming.delete('/:id' , (req,res) =>{

    const id = req.params.id;

    const index = programmingCourses.findIndex(curso => curso.id == id);

    if(index >= 0){
        programmingCourses.splice(index, 1);
    }else{
        res.status(404).json(`Course with id ${id} could not be found` ); 

    }

    res.send(JSON.stringify(programmingCourses))

});




routerProgramming.get('/' ,(req,res) =>{
    res.send(programmingCourses);
})



//ONLY Programming Courses

routerProgramming.get('/:language' ,(req,res) =>{
    const language = req.params.language;
    const results = programmingCourses.filter(course => course.language === language.toLowerCase());
    

    if(results.length === 0) {
        return res.status(404).send(`Could not find "${language}" courses..`);
    }
        res.send(JSON.stringify(results));
    
});




//Programming courses sorted by language & level

routerProgramming.get('/:language/:level', (req, res) => {
    const language = req.params.language;
    const level = req.params.level;

    const results = programmingCourses.filter(courses =>
        courses.language.toLowerCase() === language.toLowerCase() && courses.level.toLowerCase() === level.toLowerCase()
    );

    if (results.length === 0) {
        return res.status(404).json( `Could not find ${language} courses of ${level} level :(` );
    }

    res.send(JSON.stringify(results));
});



module.exports = routerProgramming;