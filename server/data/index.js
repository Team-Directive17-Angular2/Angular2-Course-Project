const path = require("path");
const fs = require("fs");

module.exports = function() {
    const User = require("../models/user-model");
    const Message = require("../models/message-model")
    const Artist = require("../models/artist-model")
    const models = { User, Message, Artist };

    let data = {};

    fs.readdirSync(__dirname)
        .filter(file => file.includes("-data"))
        .forEach(file => {
            let dataModule = require(path.join(__dirname, file))(models);
            Object.keys(dataModule)
                .forEach(key => {
                    data[key] = dataModule[key];
                });
        });

    return data;
};