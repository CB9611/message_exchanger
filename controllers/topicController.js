// topicController.js

const Topic = require('../models/Topic');

class TopicController {
    async createTopic(topicName, userId) {
        try {
            // Check if the topic already exists
            const topicExists = await Topic.findOne({ name: topicName });
            if (topicExists) {
                return { success: false, message: 'Topic already exists' };
            }
            // Create a new topic
            const newTopic = new Topic({ name: topicName, creatorId: userId, subscribers: [userId], messages: [] });
            // Save the topic to the database
            await newTopic.save();
            return { success: true, message: 'Topic created successfully' };
        } catch (error) {
            console.error('Error creating topic:', error);
            return { success: false, message: 'Failed to create topic' };
        }
    }

    async getTopicsByUser(userId) {
        try {
            // Find topics where the user is subscribed
            const topics = await Topic.find({ subscribers: userId });
            return topics;
        } catch (error) {
            console.error('Error getting topics by user:', error);
            return [];
        }
    }

    async getAvailableTopics() {
        try {
            // Find all topics
            const topics = await Topic.find();
            return topics;
        } catch (error) {
            console.error('Error getting available topics:', error);
            return [];
        }
    }
}

module.exports = new TopicController();
