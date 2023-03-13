const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Doctors portal server running");
});

app.listen(port, () => {
  console.log(`doctors portal server running on port ${port}`);
});
