require("dotenv").config();
const express = require("express");
const cors = require("cors"); // <-- ADD THIS LINE
const connectDB = require("./config/db");
const path = require("path");

// Connect to Database
connectDB();

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors()); // <-- ADD THIS LINE

// Define Routes
app.use("/api/applications", require("./routes/applications"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/blog", require("./routes/blog"));
app.use("/api/vacancies", require("./routes/vacancies"));

// Serve static assets (uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --- (Serve frontend in production - you can uncomment this later) ---
/*
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
  });
}
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
