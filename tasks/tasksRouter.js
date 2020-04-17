const express = require("express");
const Tasks = require("./tasksModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  Tasks.allTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.findProjectTasks(id)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.post("/", (req, res) => {
  const taskData = req.body;

  Tasks.add(taskData)
    .then((newId) => {
      res.status(201).json(newId);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
