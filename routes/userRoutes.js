// userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const User = require('../models/User');

// Route for user registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Create a new user using the User model
        const newUser = new User({ username, password });
        // Save the user to the database
        await newUser.save();
        res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ success: false, message: 'Failed to register user' });
    }
});

// Route for user login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Find the user in the database
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ success: true, message: 'Login successful', userId: user._id });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ success: false, message: 'Failed to login' });
    }
});

// Route for user logout (if needed)
router.post('/logout', (req, res) => {
    // Logic to logout a user
});

// Route to render login form
router.get('/login', (req, res) => {
    res.render('login');
});

// Route to render registration form
router.get('/register', (req, res) => {
    res.render('register');
});

module.exports = router;
