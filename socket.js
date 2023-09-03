const { Server } = require('socket.io')
const { createServer } = require("http");
const app = require('express')();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
module.exports = { io , httpServer, app };