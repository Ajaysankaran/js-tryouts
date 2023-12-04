export interface FootballLeagueStandings {
    teamName: string
    points: number
    won: number
    lost: number
    drawn: number
    goalDifference: number
    goalsScored: number
    goalsConceded: number
    logoUri: string
}

export interface FootballLeagueStandingsQuery {
    leagueName?: string
    country?: string
}
