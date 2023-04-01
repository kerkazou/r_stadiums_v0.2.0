const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hello word");
});
app.all("*", (req, res) => {
  res.send("Page not found");
});

// Port
app.listen(process.env.PORT || 2001, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);

module.exports = app;
