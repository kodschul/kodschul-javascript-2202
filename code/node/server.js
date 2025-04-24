const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { Server } = require("socket.io");

app.use(bodyParser.json());

/** FRONTEND */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/home.html");
});

app.get("/chat", (req, res) => {
  res.sendFile(__dirname + "/client/chat.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/client/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/client/signup.html");
});

/** BACKEND */

const users = [
  {
    firstName: "Max",
    lastName: "Mustermann",
    email: "max@example.com",
    password: "password3",
  },
];

app.get("/api/users", (req, res) => {
  const allUsers = users.map((user) => {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
  });

  res.json(allUsers);
});

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

app.post("/api/login", (req, res) => {
  const loginData = req.body;
  const user = users.find((u) => u.email === loginData.email);

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  if (user.password !== loginData.password) {
    return res.status(401).json({ message: "Incorrect password" });
  }

  res.json({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });
});

const server = app.listen(4000, () => {
  console.log("Server is running on port http://localhost:4000");
});

const io = new Server(server);

/** SOCKET SERVER  */

io.on("connection", (socket) => {
  console.log("New client connected: ", socket.id);

  socket.on("chat_new_message", (message) => {
    console.log("New message: ", message);
    io.emit("chat_new_message", message);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected: ", socket.id);
  });
});
