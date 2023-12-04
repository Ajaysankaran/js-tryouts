import { createClient } from "redis";

const redisClient = createClient();

redisClient.on('error', err => {
    console.log("Redis client error", err)
})

async function connectRedisServer() {
    await redisClient.connect()
}

export {
    connectRedisServer,
    redisClient
};

