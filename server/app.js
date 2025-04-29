const express = require("express");
const helloRoute = require("./routes/hello");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>🚀 Server is up and running!</h1>");
});

app.use("/api", helloRoute);

module.exports = app;
