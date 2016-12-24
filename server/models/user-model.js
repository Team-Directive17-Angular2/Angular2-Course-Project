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
    avatar: { type: String, default: "default-avatar.jpg" }
});

userSchema.methods = {
    authenticate(password) {
        const requestedHashedPassword = encryption.generateHashedPassword(this.salt, password);
        return requestedHashedPassword === this.hashedPassword;
    }
};
const User = mongoose.model("user", userSchema);

module.exports = User;