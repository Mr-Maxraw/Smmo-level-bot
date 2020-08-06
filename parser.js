module.exports = async () => {
    const fs = require('fs')
    res = [];
    f = () => {
        return new Promise((resolve, reject) => {    
            fs.readFile(__dirname + '/members.list', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                data = data.trim().split("\r").join("").split("\n");
                i = 0;
                resData = [];
                dataEntry = {};
                for (line in data) {
                    if (i % 2 == 0) {
                        line = data[line].split(" ");
                        dataEntry.name = line.slice(0, -2).join(" ");
                        dataEntry.lvl = line.slice(-2).join(" ");
                    }
                    else {
                        dataEntry.lastActive = data[line];
                        resData.push(dataEntry);
                        dataEntry = {};
                    }
                    i++;
                }
                //console.log("this is resData\n", resData);
                res = resData;
                resolve();
            })
        });
    }
    await f()
    console.log("this is res first line\n", res.slice(0,1));
    return res;
}