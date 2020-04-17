const db = require("../data/db-config");

module.exports = {
  all,
  add
};

function all() {
  return db("resources");
}

function add(resource) {
  return db("resources").insert(resource, "id");
}