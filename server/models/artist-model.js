const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

const artistSchema = mongooseSchema({
    name: { type: String, required: true, unique: true },
    yearsActive: { type: String, required: true },
    genres: [{ type: String, required: true, enum:["Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"] }],
    nationality: { type: String, required: true },
    albums: { type:[]},
    imgUrl: { type: String, default: "default-avatar.jpg" },
    bio:{type: String, required: true},
    singles: { type:[]}
});


const Artist = mongoose.model("artist", artistSchema);

module.exports = Artist;