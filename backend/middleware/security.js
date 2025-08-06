const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('mongo-sanitize');
const hpp = require('hpp');
const express = require('express');

function applySecurity(app) {
  // Trust proxy (important for rate limiters, etc., on Render)
  app.set('trust proxy', 1);

  // Custom Content Security Policy for Stripe
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "https://js.stripe.com"],
          frameSrc: ["'self'", "https://js.stripe.com"],
          connectSrc: ["'self'", "https://api.stripe.com"],
          imgSrc: ["'self'", "data:", "https://*.stripe.com"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          objectSrc: ["'none'"],
          baseUri: ["'self'"],
        },
      },
    })
  );

  // Enable CORS (safe for now on Render)
  app.use(cors());

  // Limit request body size
  app.use(express.json({ limit: '10kb' }));

  // Prevent HTTP parameter pollution
  app.use(hpp());

  // Input sanitization
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

  // Rate limiter for API
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 mins
    max: 100,
    message: 'Too many requests, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
  });

  app.use('/api', limiter);
}

module.exports = applySecurity;
