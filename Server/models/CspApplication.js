// --- CSP Application Database Schema ---
const mongoose = require('mongoose');

const CspApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  fatherName: { type: String, required: true },
  aadharNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  dob: { type: Date, required: true },
  highestQualification: { type: String },
  socialCategory: { type: String, enum: ['General', 'SC', 'ST', 'OBC'] },
  gender: { type: String, enum: ['Male', 'Female'] },
  isJob: { type: String, enum: ['Yes', 'No'] },
  monthlyIncome: { type: String },
  propertyType: { type: String },
  cashReceiptNo: { type: String },
  photoPath: { type: String, required: true }, // Path to the uploaded photo
  village: { type: String, required: true },
  panchayat: { type: String, required: true },
  post: { type: String },
  district: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: String, required: true },
  nationalisedBank: { type: String },
  privateBank: { type: String },
  status: { type: String, default: 'Pending' } // Admin can change this
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('CspApplication', CspApplicationSchema);
