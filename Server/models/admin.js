// --- FILE UPDATED ---
// We are now using 'email' instead of 'username'
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
  {
    email: {
      // <-- CHANGED
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true, // Added trim to remove whitespace
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to check password
adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// We will keep the model name 'Admin'
module.exports = mongoose.model("Admin", adminSchema);
