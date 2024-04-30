// Message.js

const mongoose = require('mongoose');

// Define the schema for the Message collection
const messageSchema = new mongoose.Schema({
    content: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
    timestamp: { type: Date, default: Date.now }
});

// Define the Message model based on the schema
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
