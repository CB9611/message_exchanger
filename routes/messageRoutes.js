// messageRoutes.js

const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/messageController');
const Message = require('../models/Message');

// Route for posting a new message
router.post('/post', async (req, res) => {
    const { content, authorId, topicId } = req.body;
    try {
        // Create a new message using the Message model
        const newMessage = new Message({ content, authorId, topicId });
        // Save the message to the database
        await newMessage.save();
        res.json({ success: true, message: 'Message posted successfully' });
    } catch (error) {
        console.error('Error posting message:', error);
        res.status(500).json({ success: false, message: 'Failed to post message' });
    }
});

module.exports = router;
