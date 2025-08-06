const { createLogger, transports, format } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    // Daily rotated logs
    new DailyRotateFile({
      filename: path.join(__dirname, '../logs', 'app-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      maxFiles: '14d',
      zippedArchive: true,
      level: 'info',
    }),

    // Error-specific rotated logs
    new DailyRotateFile({
      filename: path.join(__dirname, '../logs', 'error-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      maxFiles: '30d',
      zippedArchive: true,
      level: 'error',
    }),

    // Console only in development
    ...(isProd ? [] : [new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    })])
  ]
});

module.exports = logger;
