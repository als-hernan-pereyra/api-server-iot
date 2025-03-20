// Import the express module
const express = require("express");

// Create an instance of the Express app
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Define a basic route (GET)
app.get("/", (req, res) => {
  res.send("Welcome to the Express API!");
});

// Define another route (GET) for an example API endpoint
app.get("/api/greet", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

// POST endpoint to create a new greeting (example)
app.post("/api/greet", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  res.json({ message: `Hello, ${name}!` });
});

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
