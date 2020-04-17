const db = require("../data/db-config");

module.exports = {
  allTasks,
  add,
  findProjectTasks
};

function allTasks() {
  return db("projects")
  .join("tasks", "tasks.project_id", "projects.id")
  .select(
    "tasks.id as task_id",
    "tasks.description as task_description",
    "tasks.notes as task_notes",
    "tasks.completed as task_completed",
    "projects.id as project_id",
    "projects.name as project_name",
    "projects.description as project_description"
    )
}

function add(task) {
    return db("tasks").insert(task, "id");
  }

function findProjectTasks(id) {
  return db("projects")
  .join("tasks", "tasks.project_id", "projects.id")
  .select(
    "tasks.id as task_id",
    "tasks.description as task_description",
    "tasks.notes as task_notes",
    "tasks.completed as task_completed",
    "projects.id as project_id",
    "projects.name as project_name",
    "projects.description as project_description"
    )
    .where("projects.id", id)
}