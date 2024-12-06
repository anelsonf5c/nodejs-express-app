const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes'); // Import your user routes

const app = express();

// Middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`); // Logs incoming requests
  next();
});

// Routes
app.use('/api/users', userRoutes); // Set up the routes for /api/users

// Catch-all route for undefined routes
app.use((req, res) => {
  res.status(404).send({ error: 'Route not found' });
});

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
