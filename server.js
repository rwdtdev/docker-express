const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  console.log("🚀 ~ app.get ~ req:", req);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
