const logger = require('./logger');

function errorHandler(err, req, res, next) {
  logger.error({
    message: err.message,
    method: req.method,
    path: req.originalUrl,
    stack: err.stack,
    timestamp: new Date().toISOString()
  });

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
}

module.exports = errorHandler;
