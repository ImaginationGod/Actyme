const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Serve React app for non-API routes
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
