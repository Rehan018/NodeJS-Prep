const express = require("express");
const routes = require("./routes/routes");
const sequelize = require("./db/db");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

sequelize
  .sync()
  .then((res) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
