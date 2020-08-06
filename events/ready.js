module.exports = (client) => {
    const fs = require('fs')
    client.upd = true;
    console.log("Bot started, gathering lvl data");
    require('./../parser')().then((data) => {
        client.data = data;
        client.upd = false;
    });
}