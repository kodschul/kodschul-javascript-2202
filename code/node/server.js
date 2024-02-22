const express = require("express");
const app = express();

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/create-user", (req, res) => {
  users.push({ id: users.length + 1, name: req.query.name });

  res.send("ok");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
