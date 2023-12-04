import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf } = format;
const customLogFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
})

const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
}

const logger = createLogger({
    levels: logLevels,
    format: combine(timestamp(), customLogFormat),

    transports: [
        new transports.Console(),
        // new transports.File({
        //     filename: 'logs/news-service.log'
        // })
    ]
})

export default logger
