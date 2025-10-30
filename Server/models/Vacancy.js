const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    // --- NEW FIELDS ADDED FOR CONTROLLER CONSISTENCY ---
    state: {
        type: String,
        required: true, // Assuming state is mandatory for filtering
        trim: true,
    },
    district: {
        type: String,
        required: true, // Assuming district is mandatory
        trim: true,
    },
    type: {
        type: String,
        default: 'Full-time', // Matches controller default
        enum: ['Full-time', 'Part-time', 'Contract'], // Example values
    },
    status: {
        type: String,
        default: 'Available', // Matches controller default
        enum: ['Available', 'Filled', 'Pending'], // Example statuses
    },
    // --- END NEW FIELDS ---
    salary: {
        type: String,
        required: false, // Salary is often optional/negotiable
        default: 'Negotiable',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: false,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Vacancy', vacancySchema);
