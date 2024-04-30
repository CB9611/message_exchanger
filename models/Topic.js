// Topic.js

const mongoose = require('mongoose');

// Define the schema for the Topic collection
const topicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
});

// Define the Topic model based on the schema
const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
