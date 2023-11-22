const express = require("express");
const controller = require("../controllers/cont");
const app = express.Router();

app.get("/", controller.home);
app.post("/add", controller.add);
app.get("/get", controller.get);
app.get("/delete/:id", controller.delete);
module.exports = app;
