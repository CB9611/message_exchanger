// topicRoutes.js

const express = require('express');
const router = express.Router();
const TopicController = require('../controllers/topicController');
const Topic = require('../models/Topic');

// Route for creating a new topic
router.post('/create', async (req, res) => {
    const { name, creatorId } = req.body;
    try {
        // Create a new topic using the Topic model
        const newTopic = new Topic({ name, creatorId });
        // Save the topic to the database
        await newTopic.save();
        res.json({ success: true, message: 'Topic created successfully' });
    } catch (error) {
        console.error('Error creating topic:', error);
        res.status(500).json({ success: false, message: 'Failed to create topic' });
    }
});

// Route for getting available topics
router.get('/list', async (req, res) => {
    try {
        // Find all topics in the database
        const topics = await Topic.find();
        res.json({ success: true, topics });
    } catch (error) {
        console.error('Error getting available topics:', error);
        res.status(500).json({ success: false, message: 'Failed to get available topics' });
    }
});

module.exports = router;
