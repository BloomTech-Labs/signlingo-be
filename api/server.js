const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("../routes/authRouter");
const levelsRouter = require("../routes/levelsRouter");
const server = express();

// main middleware
server.use(helmet.noSniff()); // Disables CORS from blocking images
server.use(express.json());
server.use(cors());

// routes
server.use("/user", authRouter);
server.use("/levels", levelsRouter);

server.get("/", (req, res) => {
  res.send("IT'S WORKING!!!");
});

module.exports = server;
