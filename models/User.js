// User.js

const mongoose = require('mongoose');

// Define the schema for the User collection
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Define the User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
