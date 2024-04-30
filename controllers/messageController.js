// messageController.js

const Message = require('../models/Message');

class MessageController {
    async postMessage(topicId, userId, content) {
        try {
            // Create a new message
            const newMessage = new Message({ topicId, userId, content, timestamp: new Date() });
            // Save the message to the database
            await newMessage.save();
            return { success: true, message: 'Message posted successfully' };
        } catch (error) {
            console.error('Error posting message:', error);
            return { success: false, message: 'Failed to post message' };
        }
    }

    async getRecentMessagesByUser(userId) {
        try {
            // Find recent messages posted by the user
            const messages = await Message.find({ userId }).sort({ timestamp: -1 }).limit(2);
            return messages;
        } catch (error) {
            console.error('Error getting recent messages by user:', error);
            return [];
        }
    }
}

module.exports = new MessageController();
