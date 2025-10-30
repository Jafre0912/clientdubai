// --- Blog Post Database Schema ---
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'Admin' // Will be overwritten by admin's email in controller
    },
    // Optional: We can link this to the Admin model later, but for now, a simple string is fine.
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Blog', BlogSchema);
