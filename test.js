// // Import required modules
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const cors = require('cors');

// // Create an Express app
// const app = express();

// // Use CORS middleware to fix CORS issue
// app.use(cors());

// // Create an HTTP server using the Express app
// const server = http.createServer(app);

// // Create a Socket.io instance attached to the server
// const io = socketIo(server, {
//   cors: {
//     origin: '*', // Allow requests from any origin (replace with your frontend URL in production)
//     methods: ['GET', 'POST'],
//   }
// });

// // Set up a connection event listener
// io.on('connection', (socket) => {
//   console.log('A user connected',socket.id);

//   // Set up a message event listener
//   socket.on('message', (data) => {
//     console.log('Message received:', data);
    
//     // Broadcast the message to all connected clients
//     io.emit('message', data);
//   });

//   // Set up a disconnect event listener
//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 8000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

function timepass(){
  console.log("timepass")
}
module.exports = {timepass};


