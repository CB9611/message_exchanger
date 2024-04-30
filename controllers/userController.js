// userController.js

const User = require('../models/User');

class UserController {
    async registerUser(username, password) {
        try {
            // Check if the user already exists
            const userExists = await User.findOne({ username });
            if (userExists) {
                return { success: false, message: 'User already exists' };
            }
            // Create a new user
            const newUser = new User({ username, password });
            // Save the user to the database
            await newUser.save();
            return { success: true, message: 'User registered successfully' };
        } catch (error) {
            console.error('Error registering user:', error);
            return { success: false, message: 'Failed to register user' };
        }
    }

    async loginUser(username, password) {
        try {
            // Find the user in the database
            const user = await User.findOne({ username, password });
            if (user) {
                return { success: true, message: 'Login successful', userId: user._id };
            } else {
                return { success: false, message: 'Invalid username or password' };
            }
        } catch (error) {
            console.error('Error logging in:', error);
            return { success: false, message: 'Failed to login' };
        }
    }

    async logoutUser(userId) {
        // Logic to logout a user
    }
}

module.exports = new UserController();
