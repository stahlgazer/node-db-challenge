const db = require("../data/db-config.js");

module.exports = {
  all,
  add
};

function all() {
  return db("projects");
}

function add(project) {
  return db("projects").insert(project, "id");
}