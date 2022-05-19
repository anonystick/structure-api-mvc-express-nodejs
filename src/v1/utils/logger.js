const { createLogger, format, transports } = require("winston");
module.exports = createLogger({
    format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.align(),
        format.printf((i) => `${i.level}: ${[i.timestamp]}: ${i.message}`)
    ),
    transports: [
        new transports.File({
            filename: "logs/info.log",
            level: "info",
            format: format.combine(
                format.printf((i) =>
                    i.level === "info" ? `${i.level}: ${i.timestamp} ${i.message}` : ""
                )
            ),
        }),
        new transports.File({
            filename: "logs/error.log",
            level: "error",
        }),
    ],
})