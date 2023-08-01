const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can only be a maximum of 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

// Set up Model
// All tasks that we will push to our db
// Mongoose: A model is a wrapper for the Schema - defines

module.exports = mongoose.model('Task', TaskSchema)