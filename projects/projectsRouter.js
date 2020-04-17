const express = require("express");
const Projects = require("./projectsModel");
const router = express.Router();

router.get("/", (req, res) => {
  Projects.all()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: error.message });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;
  Projects.add(projectData)
    .then((newId) => {
      res.status(201).json(newId);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
