import { addColors, createLogger, format, transports } from "winston";
import { TransformableInfo } from "logform";
import { WinstonTransport as AxiomTransport } from "@axiomhq/winston";
import { once } from "events";

//logform is a dependency in winston so it's always part
//of the package installed alongside winston

addColors({
  info: "blue",
  warn: "yellow",
  error: "red",
  debug: "gray",
});

type LogInfo = TransformableInfo & {
  timestamp: string;
  label: string;
};

const consoleFormat = format.combine(
  format.colorize({ all: true }),
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf((info) => {
    return `${info.timestamp} [${info.level.toUpperCase()}] [${info.label}] ${info.message}`;
  }),
);

const axiomFormat = format.combine(
    format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
    format.json()
);

export const logger = createLogger({
    level: "info",
    transports:[
        new transports.Console({
            format:consoleFormat,
        }),
        // new AxiomTransport({
        
            //this is for axiom cloud logging destination
        // })
    ]
})

export const exitAfterFlush = async () => {
  logger.end();
  await once(logger, "finish");
};


