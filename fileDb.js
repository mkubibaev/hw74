const fs = require('fs');

const path = './messages/';

module.exports = {
    addMessage(message) {
        fs.writeFile(path + message.datetime, JSON.stringify(message), err => {
            if (err) {
                console.log(err);
            }
        });
    }
};
