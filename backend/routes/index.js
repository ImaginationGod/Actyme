const express = require('express');
const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is up and running!',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
