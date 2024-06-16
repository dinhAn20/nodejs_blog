const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./configs/db");
db.connect();

app.use(morgan("combined"));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
