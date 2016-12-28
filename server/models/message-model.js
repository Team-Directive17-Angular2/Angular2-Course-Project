const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

const messageSchema = mongooseSchema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, required: true, enum: ["Not Processed", "In Process", "Processed"], default: "Not Processed"
    },
    processedBy: { type: String, required: true, default: "Not Processed" },
    sendOn: { type: Date, required: true, default: Date.now }
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message;