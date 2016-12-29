const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;
const encryption = require("../utils/encryption");

const userSchema = mongooseSchema({
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    salt: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["User", "Admin"], default: "User" },
    avatar: { type: String, default: "default-avatar.jpg" },
    followers: { type: [] },
    followings: { type: [] },
    favoriteArtists: { type: [] },
    favoriteAlbums: { type: [] },
    favoriteSongs: { type: [] }
});

userSchema.methods = {
    authenticate(password) {
        const requestedHashedPassword = encryption.generateHashedPassword(this.salt, password);
        return requestedHashedPassword === this.hashedPassword;
    }
};
const User = mongoose.model("user", userSchema);

module.exports = User;

module.exports.seedAdminUser = () => {
    User.find({}).then(users => {
        if (users.length === 0) {
            let salt = encryption.generateSalt();
            let hashedPass = encryption.generateHashedPassword(salt, 'admin');

            User.create({
                username: 'admin',
                firstName: 'Admin',
                lastName: 'Adminov',
                email:'Admin@Angular2Project.com',
                salt: salt,
                hashedPassword: hashedPass,
                role: 'Admin'
            })
        }
    })
};