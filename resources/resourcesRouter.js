const express = require("express");
const Resources = require("./resourcesModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  Resources.all()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.post("/", (req, res) => {
  const resourceData = req.body;
  Resources.add(resourceData)
    .then((newId) => {
      res.status(201).json(newId);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
