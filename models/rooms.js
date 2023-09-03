const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    roomName : String,
    password : String,
    hostName : String,
    hostId : String,
    playerName : String,
    playerId : String
})
const RoomModel = mongoose.model('room',roomSchema);
module.exports = RoomModel;