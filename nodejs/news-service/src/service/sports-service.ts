import logger from "../config/log-config";
import { redisClient } from "../config/redis-config";
import { FootballLeagueStandings, FootballLeagueStandingsQuery } from "../model/sports-models";

const FOOTBALL_BASE_URI = "https://livescore6.p.rapidapi.com"

const options = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        'X-RapidAPI-Key': '<<API_KEY>>',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
};


const footballLeagueStandings = async (query?: FootballLeagueStandingsQuery) => {
    const q = {
        Ccd: query?.country || 'england',
        Scd: query?.leagueName || 'premier-league'
    }
    const url = `${FOOTBALL_BASE_URI}/leagues/v2/get-table?` + new URLSearchParams({
        Category: 'soccer',
        ...q
    })
    const cacheKey = q.Ccd + ":" + q.Scd
    const cachedData = await redisClient.json.get(q.Ccd + ":" + q.Scd) as any
    if (!cachedData) {
        return fetchFootballLeagueStandings(url, cacheKey)
    } else {
        logger.info("fetching data from Cache")
        return cachedData?.data
    }

}

const fetchFootballLeagueStandings = async (url: string, cacheKey?: string) => {
    logger.info("fetching data from API")
    const request = await fetch(url, options)
    const data = await request.json() as any
    const leagueTable = data?.LeagueTable.L?.[0].Tables as any[]
    if (leagueTable) {

        const finalData = leagueTable.flatMap(table => table?.team).map(d => {
            const leagueStanding: FootballLeagueStandings = {
                teamName: d['Tnm'], won: d['win'], lost: d['lst'],
                points: d['pts'], drawn: d['drw'], goalDifference: d['gd'],
                goalsScored: d['gf'], goalsConceded: d['ga'], logoUri: d['Img']
            }
            return leagueStanding
        }).sort((data1, data2) => data2.points - data1.points)
        await redisClient.json.set(cacheKey!, '$', {
            data: finalData
        } as unknown as any);
        return finalData
    }
    return []
}

export {
    footballLeagueStandings
};

