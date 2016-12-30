const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

const albumSchema = mongooseSchema({
    name: {type: String, required: true},
    artist: { type: String, required: true},
    year: { type: Number, required: true },
    genres: [{ type: String, required: true, enum:["Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"] }],
    imgUrl: { type: String, default: "default-avatar.jpg" },
    songs: { type: [] }
});


const Album = mongoose.model("album", albumSchema);

module.exports = Album;