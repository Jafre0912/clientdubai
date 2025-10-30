// --- FILE UPDATED ---
// All logic now uses 'email' instead of 'username'

const Admin = require("../models/Admin.js");
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// POST /api/admin/login
const loginAdmin = async (req, res) => {
  // --- UPDATED ---
  const { email, password } = req.body; // Changed from username

  try {
    console.log("\n--- NEW ADMIN LOGIN ATTEMPT ---");
    console.log("1. Received data from frontend:");
    // --- UPDATED ---
    console.log(` > Email: ${email}`); // Changed from username
    console.log(" > Password: ********");

    // --- UPDATED ---
    // Find user by email
    const admin = await Admin.findOne({ email: email.toLowerCase() });

    if (!admin) {
      console.log("3. [ERROR] User not found in database.");
      console.log("---------------------------------\n");
      // --- UPDATED ---
      return res.status(401).json({ message: "Invalid email" }); // Changed from username
    }

    console.log("3. User was found. Checking password...");
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      console.log("4. [ERROR] Password mismatch.");
      console.log("---------------------------------\n");
      return res.status(401).json({ message: "Invalid password" });
    }

    console.log("4. Password OK. Generating token...");
    const token = generateToken(admin._id);

    console.log("5. Login successful. Sending token.");
    console.log("---------------------------------\n");

    res.status(200).json({
      _id: admin._id,
      // --- UPDATED ---
      email: admin.email, // Changed from username
      token,
    });
  } catch (err) {
    console.error("5. [SERVER ERROR]", err.message);
    console.log("---------------------------------\n");
    res.status(500).json({ message: "Server error" });
  }
};

// (Optional) POST /api/admin/register - for first time only
const registerAdmin = async (req, res) => {
  // --- UPDATED ---
  const { email, password } = req.body; // Changed from username

  try {
    // --- UPDATED ---
    const userExists = await Admin.findOne({ email }); // Changed from username
    if (userExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // --- UPDATED ---
    const admin = await Admin.create({ email, password }); // Changed from username

    const token = generateToken(admin._id);

    res.status(201).json({
      _id: admin._id,
      // --- UPDATED ---
      email: admin.email, // Changed from username
      token,
    });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  loginAdmin,
  registerAdmin,
};
