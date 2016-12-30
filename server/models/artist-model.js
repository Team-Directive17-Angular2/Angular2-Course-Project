const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

let nestedAlbumSchema = mongoose.Schema({
    id:String,
    name:String,
    img: String
});

let nestedSingleSchema = mongoose.Schema({
    id:String,
    name:String
});

const artistSchema = mongooseSchema({
    artist: { type: String, required: true, unique: true },
    yearsActive: { type: String, required: true },
    genres: [{ type: String, required: true, enum:["Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"] }],
    nationality: { type: String, required: true },
    albums:[nestedAlbumSchema],
    imgUrl: { type: String, default: "default-avatar.jpg" },
    bio:{type: String, required: true},
    singles: { type:[]}
});


const Artist = mongoose.model("artist", artistSchema);

module.exports = Artist;