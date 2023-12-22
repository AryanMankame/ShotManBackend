const bodyParser = require('body-parser');
const cors = require('cors');
const { createRoom, getRoom, updateRoom } = require('./utils/roomOperations');

const mongoose = require('mongoose');
const { updateMany } = require('./models/rooms');
mongoose.connect(`mongodb+srv://aryan672002:aryan672002@cluster0.p2xwit1.mongodb.net/shotman?retryWrites=true&w=majority`)
.then((res) => console.log('DB Connected Successfully')).catch((err) => console.log('Connect Failed',err));

const {io,httpServer,app} = require('./socket.js');
app.use(cors({
  origin : "*"
}));
app.use(bodyParser());

io.on('connection',(socket) => {
  console.log('Connected Successfully to socket',socket.id);
  socket.on("playerPos",(pos) => {
    console.log('pos =>',pos);
    io.to(pos.enemySocketId).emit('data',pos);
    // socket.emit('server',"data");
  })
  socket.on("bulletpos",(pos) => {
    console.log(pos);
    io.to(pos.enemySocketId).emit('bulletpos',pos);
  })
  socket.on('userconnect',(args) => {
    console.log(args)
    io.to(args.hostId).emit('userconnect',{id : args.playerId , hostName : args.hostName, playerName : args.playerName});
    io.to(args.playerId).emit('userconnect',{id : args.hostId, hostName : args.playerName , playerName : args.hostName});
  });
  socket.on('score', (args) => {
    console.log(args);
    io.to(args.sendTo).emit('score',args);  
  })
  io.emit('userconnect',"IM ON");
})



app.post('/api/v1/addroom',createRoom);
app.post('/api/v1/getroom',getRoom);
app.post('/api/v1/updateroom',updateRoom);

httpServer.listen(8000,() => {
    console.log('listening on port 8000');
})
