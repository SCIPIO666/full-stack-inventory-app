const pino = require('pino');

// Determine the log level from Environment Variables (defaults to 'info')
const logLevel = process.env.LOG_LEVEL || 'info';

const logger = pino({
  level: logLevel,
  // Automatically masks sensitive keys
  redact: {
    paths: [
      'password', 
      'confirmPassword', 
      'creditCard', 
      'card_number', 
      'cvv', 
      'otp', 
      'auth_token'
    ],
    placeholder: '[REDACTED]'
  },
  base: {
    env: process.env.NODE_ENV || 'development'
  },
  transport: process.env.NODE_ENV !== 'production' ? {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname'
    }
  } : undefined 
});

module.exports = logger;