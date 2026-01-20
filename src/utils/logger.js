/**
 * Logger utility for development and production environments
 * Logs only in development mode for security and performance
 */

const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * Log informational messages (only in development)
 * @param {...any} args - Arguments to log
 */
export const logger = {
  /**
   * Log informational messages
   * @param {...any} args - Arguments to log
   */
  log: (...args) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },

  /**
   * Log error messages (always logged, but should use error service in production)
   * @param {...any} args - Arguments to log
   */
  error: (...args) => {
    // Always log errors, but in production should use error tracking service
    if (isDevelopment) {
      console.error(...args);
    } else {
      // In production, you should send to error tracking service (e.g., Sentry)
      // Example: Sentry.captureException(new Error(args.join(' ')));
      console.error(...args); // Keep for now, but consider removing in production
    }
  },

  /**
   * Log warning messages (only in development)
   * @param {...any} args - Arguments to log
   */
  warn: (...args) => {
    if (isDevelopment) {
      console.warn(...args);
    }
  },

  /**
   * Log info messages (only in development)
   * @param {...any} args - Arguments to log
   */
  info: (...args) => {
    if (isDevelopment) {
      console.info(...args);
    }
  },

  /**
   * Log debug messages (only in development)
   * @param {...any} args - Arguments to log
   */
  debug: (...args) => {
    if (isDevelopment) {
      console.debug(...args);
    }
  },
};

export default logger;
