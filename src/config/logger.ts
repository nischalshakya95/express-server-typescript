import { createLogger, format, transports } from 'winston';

const options = {
  console: {
    level: 'info',
    handleException: true,
    format: format.combine(
      format.colorize(),
      format.timestamp(),
      format.printf((log) => {
        return `${log.timestamp} | ${log.level}: ${log.message}`;
      })
    )
  },
  info: {
    filename: './logs/info.log',
    level: 'info',
    format: format.combine(
      format.timestamp(),
      format.printf((log) => {
        return `${log.timestamp} | ${log.level}: ${log.message}`;
      })
    )
  },
  error: {
    filename: './logs/error.log',
    level: 'error',
    format: format.combine(
      format.timestamp(),
      format.printf((log) => {
        return `${log.timestamp} | ${log.level}: ${log.message}`;
      })
    )
  }
};

const logger = createLogger({
  transports: [new transports.Console(options.console), new transports.File(options.error), new transports.File(options.info)],
  exitOnError: false
});

export default logger;
