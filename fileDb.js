const fs = require('fs');

const path = './messages/';


module.exports = {
    getLastMessages() {
        try {
            const lastMessages = [];
            const files = fs.readdirSync(path);

            for (let i = files.length - 1; i >= 0; i--) {
                const fileContent = fs.readFileSync(path + files[i]);
                lastMessages.unshift(JSON.parse(fileContent));

                if (lastMessages.length === 5) {
                   break;
                }
            }

            return lastMessages;

        } catch (e) {
            console.log(e);
        }
    },
    addMessage(message) {
        try {
            fs.writeFileSync(path + message.datetime + '.txt', JSON.stringify(message));
        } catch (e) {
            console.log(e);
        }

    }
};
