const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride("_method"));

app.use(express.json());

const port = 3000;
const route = require("./routes");
const db = require("./configs/db");
db.connect();

app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
