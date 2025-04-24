const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/home.html");
});

app.listen(4000, () => {
  console.log("Server is running on port http://localhost:4000");
});
