const express = require("express");
const routerMarketing = express.Router();
const { marketing } = require("../data/courses.js").infoCourses;


routerMarketing.use(express.json());

// incluye funciones auxiliares
const {
  sortByViewsAscending,
  sortByViewsDescending,
} = require("../auxiliaryFunctions.js");

// Only marketing courses

routerMarketing.get("/", (req, res) => {
  res.send(JSON.stringify(marketing));
});

// Marketing courses filter by subject
// Query parameters supported:
// - orderascending=views: Sorts the results by views in ascending order
// - orderdescending=views: Sorts the results by views in descending order

routerMarketing.get("/:subject", (req, res) => {
  const subject = req.params.subject;
  const results = marketing.filter(
    (course) => course.subject === subject.toLowerCase()
  );

  if (results.length === 0) {
    return res.status(404).send(`Could not find "${subject}" courses..`);
  }

  if (req.query.orderascending === "views") {
    return res.send(JSON.stringify(sortByViewsAscending(results)));
  }

  if (req.query.orderdescending === "views") {
    return res.send(JSON.stringify(sortByViewsDescending(results)));
  }

  res.send(JSON.stringify(results));
});

// Marketing courses filter by subject & level

routerMarketing.get("/:subject/:level", (req, res) => {
  const subject = req.params.subject;
  const level = req.params.level;

  const results = marketing.filter(
    (courses) =>
      courses.subject.toLowerCase() === subject.toLowerCase() &&
      courses.level.toLowerCase() === level.toLowerCase()
  );

  if (results.length === 0) {
    return res
      .status(204)
      .json(`Could not find ${subject} courses of ${level} level :(`);
  }

  res.send(JSON.stringify(results));
});

// Post

routerMarketing.post("/", (req, res) => {
  let newCourse = req.body;
  marketing.push(newCourse);
  res.send(JSON.stringify(marketing));
});

// Put

routerMarketing.put("/:id", (req, res) => {
  const updatedCourse = req.body;
  const id = req.params.id;

  const index = marketing.findIndex((course) => course.id == id);

  if (index >= 0) {
    marketing[index] = updatedCourse;
  } else {
    return res
      .status(404)
      .json(`Marketing course with id ${id} could not be found`);
  }
  res.send(JSON.stringify(marketing));
});

// Patch

routerMarketing.patch("/:id", (req, res) => {
  const updatedElement = req.body;
  const id = req.params.id;

  const index = marketing.findIndex((course) => course.id == id);

  if (index >= 0) {
    const courseToBeModified = marketing[index];
    Object.assign(courseToBeModified, updatedElement);
  } else {
    return res
      .status(404)
      .json(`Marketing course with id ${id} could not be found`);
  }
  res.send(JSON.stringify(marketing));
});

// Delete

routerMarketing.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = marketing.findIndex((course) => course.id == id);

  if (index >= 0) {
    marketing.splice(index, 1);
  } else {
    return res
      .status(404)
      .json(`Marketing course with id ${id} could not be found`);
  }
  res.send(JSON.stringify(marketing));
});

module.exports = routerMarketing;