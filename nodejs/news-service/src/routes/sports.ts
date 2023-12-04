import * as express from "express"
import { Router } from "express-serve-static-core";
import auth from "../middleware/auth";
import { footballLeagueStandings } from "../service/sports-service";


const sportsRouter: Router = express.Router();

sportsRouter.get("/sports/football", auth, async (req, res) => {
    const response = await footballLeagueStandings()
    res.status(200).send(response)
})


export default sportsRouter;
