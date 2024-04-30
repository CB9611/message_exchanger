// app.js

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config'); // Require the config file
const app = express();
const path = require('path');
const fs = require('fs');
const userRoutes = require('./routes/userRoutes');
const topicRoutes = require('./routes/topicRoutes');
const messageRoutes = require('./routes/messageRoutes');

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Connect to MongoDB using Mongoose and the URI from config.js
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

// Route for rendering index.ejs when accessing the root route ("/")
app.get('/', (req, res) => {
    res.render('index');
});

// Middleware setup
app.use(express.json());

// Route setup
app.use('/user', userRoutes);
app.use('/topic', topicRoutes);
app.use('/message', messageRoutes);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
