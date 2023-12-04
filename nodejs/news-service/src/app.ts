import express, { Application } from 'express';
import sportsRouter from './routes/sports';
import { connectRedisServer } from './config/redis-config';
import rateLimit from 'express-rate-limit';

const app: Application = express();
const PORT = process.env.PORT || 9001
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // Window of 5 minutes
    max: 200, // limit to 200 requests for a window of 5 minutes
    message: 'You are asking too many things!'
})



app.use(express.json())
app.use(sportsRouter)
connectRedisServer()

app.get("/", (req, res) => {
    res.status(200).send("HTTP working successfully")
})

console.log("Starting Server....")
app.listen(PORT, () => {
    console.log("server is up on port:", PORT)
})