const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

const songSchema = mongooseSchema({
    name: {type: String, required: true},
    album:{type: String, default:'single'},
    artist: { type: String, required: true},
    duration: { type: Number, required: true }
});


const Song = mongoose.model("song", songSchema);

module.exports = Song;