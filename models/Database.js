const mongoose = require('mongoose');
const config = require('../config/config');

class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(config.mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }    

    getCollection(collectionName) {
        return mongoose.connection.collection(collectionName);
    }
}

module.exports = new Database();
