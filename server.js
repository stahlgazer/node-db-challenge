const express = require("express");

// const projectsRouter = require("./projects/projectsRouter.js");
// const tasksRouter = require("./tasks/tasksRouter.js");
// const resourcesRouter = require("./resources/resourcesRouter.js");

const server = express();

server.use(express.json());

// server.use("/api/projects", projectsRouter);
// server.use("/api/tasks", tasksRouter);
// server.use("/api/resources", resourcesRouter)

server.get("/", (req, res) => {
  res.send("<h1>Node Database Sprint Challenge</h1>");
});

module.exports = server;