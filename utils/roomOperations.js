const RoomModel = require('.././models/rooms');
const {io} = require('.././socket');
exports.createRoom = async (req,res) => {
    const { password,hostName,hostId,playerName,playerId,roomName} = req.body;
    var room = new RoomModel({
        roomName,
        password,
        hostName,
        hostId,
        playerName,
        playerId
    });
    room.save().then(data => {
        console.log(data);res.send("Done");
    }).catch(err => console.error("error found ",err));
    
}
exports.getRoom = async (req,res) => {
    const { roomName, password } = req.body;
    console.log(req.body)
    const data = await RoomModel.find({ roomName, password })
    console.log(data);
    res.send(data);
}
exports.updateRoom = async (req, res) => {
    const {hostId, hostName, roomName, password ,playerName , playerId} = req.body;
    var check = await RoomModel.findOne({ roomName , password })
    // check = await check.json();
    console.log("check => ",check,roomName,password,playerName,playerId);
    if(check && check.playerName !== 'null' && check.playerId !== 'null'){
        RoomModel.updateOne({ roomName , password },{
            playerName : playerName,
            playerId : playerId
        }).then((data) => {
            if(data.modifiedCount === 1) {
                res.send({data : {...req.body , playerName , playerId, hostName : check.hostName, hostId : check.hostId } , message : "Success"});
            }
        })
        .catch((err) => { console.log("error in updating",err);})
    }
    else{
        res.send({data : null, message : "Failure"})
    }
}