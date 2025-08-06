const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('mongo-sanitize');
const hpp = require('hpp');
const express = require('express');

function applySecurity(app) {
  // Trust proxy when deployed behind Render’s proxy
  app.set('trust proxy', 1);

  // Secure HTTP headers
  app.use(helmet());

  // Enable CORS (open for now since you're deploying on Render)
  app.use(cors());

  // Limit body size to prevent payload abuse
  app.use(express.json({ limit: '10kb' }));

  // Prevent HTTP parameter pollution
  app.use(hpp());

  // Input sanitization for body, params, and query
  app.use((req, res, next) => {
    const sanitizeObject = (obj) => {
      if (obj && typeof obj === 'object') {
        for (const key in obj) {
          obj[key] = mongoSanitize(obj[key]);
        }
      }
    };

    sanitizeObject(req.body);
    sanitizeObject(req.params);
    sanitizeObject(req.query);

    next();
  });

  // Apply rate limiting to all /api routes
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max requests per IP
    message: 'Too many requests, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
  });

  app.use('/api', limiter);
}

module.exports = applySecurity;
