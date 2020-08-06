exports.run = (client, message, args) => {
    const fs = require('fs')
    
    message.channel.send("Begin gathering lvl data");
    require('./../parser')().then((data) => {
        console.log(data[0] == client.data[0]);
        client.data = data
        client.upd = false;
        message.channel.send("Lvl data was updated")
    })
}