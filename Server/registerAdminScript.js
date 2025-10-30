// --- THIS IS THE CORRECT (EMAIL) VERSION ---

require("dotenv").config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin.js'); // This model should use EMAIL
const connectDB = require('./config/db.js');

// --- SET YOUR ADMIN DETAILS HERE ---
const ADMIN_EMAIL = 'admin@digitalcsp.in'; // Set your desired email
const ADMIN_PASSWORD = 'admin@123';        // Set your desired password
// ---------------------------------

const registerAdmin = async () => {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('Error: ADMIN_EMAIL and ADMIN_PASSWORD must be set in this script.');
    return;
  }

  console.log('Connecting to database...');
  await connectDB();
  console.log('MongoDB Connected.');

  try {
    // Check if user already exists
    const userExists = await Admin.findOne({ email: ADMIN_EMAIL }); // Check by email
    if (userExists) {
      console.warn(`\nWARNING: An admin with email '${ADMIN_EMAIL}' already exists.`);
      console.log('You can now log in or change the ADMIN_EMAIL in this script to create a new one.');
      mongoose.connection.close();
      return;
    }

    // Create new admin
    console.log(`\nCreating new admin with email: ${ADMIN_EMAIL}`); // Log email
    const admin = await Admin.create({
      email: ADMIN_EMAIL, // Use email
      password: ADMIN_PASSWORD,
    });

    if (admin) {
      console.log('--- SUCCESS ---');
      console.log(`Admin user with email '${admin.email}' created successfully.`);
      console.log('You can now log in using the frontend login page.');
    } else {
      console.error('Error: Failed to create admin user.');
    }

  } catch (err) {
    console.error('\n--- SCRIPT FAILED ---');
    console.error('Error:', err.message);
  } finally {
    console.log('\nClosing database connection.');
    mongoose.connection.close();
  }
};

registerAdmin();

