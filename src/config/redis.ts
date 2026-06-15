import { Redis } from "ioredis";

const redisUrl = process.env.REDIS_URL;

const redisConnection = redisUrl
  ? new Redis(redisUrl, { maxRetriesPerRequest: 3 })
  : new Redis({ host: "localhost", port: 6379, maxRetriesPerRequest: 3 });

redisConnection.on("connect", () => {
  console.log("redis connected");
});

redisConnection.on("error", (err) => {
  console.log("redis connection error",{err});
});

// check redis connection

export const checkRedisConnection = async (): Promise<void> => {
  const ping = await redisConnection.ping();
  if (ping === "PONG") {
    console.log("redis connection verified");
  } else {
    console.error("redis connection failed");
  }
};

export default redisConnection;
