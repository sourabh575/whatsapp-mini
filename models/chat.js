const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
   from: {
       type: String,
       required: true,
   },
   to: {
       type: String,
       required: true,
   },
   message: {  // Keep the same field name in both schema and usage
       type: String,
       required: true,
       maxLength: 50
   },
   created_at: {
       type: Date,
       default: Date.now  // Automatically set current timestamp
   },
});

// Correctly export the Chat model
const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
