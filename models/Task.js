const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
});

// Set up Model
// All tasks that we will push to our db
// Mongoose: A model is a wrapper for the Schema - defines

module.exports = mongoose.model('Task', TaskSchema)