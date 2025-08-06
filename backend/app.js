const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // ✅ Load environment variables

const applySecurity = require('./middleware/security');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const stripeRoutes = require('./routes/stripe');
const apiRoutes = require('./routes/index');

const app = express();

// Apply security middleware
applySecurity(app);

// Parse JSON
app.use(express.json());

// Log all incoming requests
app.use((req, res, next) => {
  logger.info({
    message: 'Incoming Request',
    method: req.method,
    url: req.originalUrl,
    timestamp: new Date().toISOString()
  });
  next();
});

// Routes
app.use('/api/stripe', stripeRoutes);
app.use('/api', apiRoutes);

// Error handler (must be after routes)
app.use(errorHandler);

module.exports = app;