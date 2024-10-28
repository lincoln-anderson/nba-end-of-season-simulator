export type Team = {
    id: number
    name: string
    nickname: string
    code: string
    logo: string
}

export type Conference = {
    name: string
    rank: number
    win: number
    loss: number
}

export type Division = {
    name: string
    rank: number
    win: number
    loss: number
    gamesBehind: string
}

export type WinLossRecord = {
    home: number
    away: number
    total: number
    percentage: string
    lastTen: number
}

export type StandingsResponse = {
    league: string
    season: number
    team: Team
    conference: Conference
    division: Division
    win: WinLossRecord
    loss: WinLossRecord
    gamesBehind: string
    streak: number
    winStreak: boolean
    tieBreakerPoints: number | null
}
