import { rest } from "msw";

export const handlers = [
    rest.get("https://api-nba-v1.p.rapidapi.com/standings", (req, res, ctx) => {
        const url = new URL(req.url);
        const league = url.searchParams.get("league");
        const season = url.searchParams.get("season");

        console.log("[MSW] Intercepted request:", req.url); // Debugging Log
        console.log(`[MSW] Params -> league: ${league}, season: ${season}`); // Debugging Log

        if (league === "standard" && season === "2021") {
            return res(
                ctx.status(200),
                ctx.json({
                    response: [{
                        "league": "standard",
                        "season": 2021,
                        "team": {
                            "id": 41,
                            "name": "Washington Wizards",
                            "nickname": "Wizards",
                            "code": "WAS",
                            "logo": "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png"
                        },
                        "conference": {
                            "name": "east",
                            "rank": 11,
                            "win": 20,
                            "loss": 19
                        },
                        "division": {
                            "name": "southeast",
                            "rank": 4,
                            "win": 6,
                            "loss": 6,
                            "gamesBehind": "10.5"
                        },
                        "win": {
                            "home": 15,
                            "away": 12,
                            "total": 27,
                            "percentage": ".466",
                            "lastTen": 4
                        },
                        "loss": {
                            "home": 15,
                            "away": 16,
                            "total": 31,
                            "percentage": ".534",
                            "lastTen": 6
                        },
                        "gamesBehind": "10.5",
                        "streak": 1,
                        "winStreak": true,
                        "tieBreakerPoints": null
                    },
                    {
                        "league": "standard",
                        "season": 2021,
                        "team": {
                            "id": 5,
                            "name": "Charlotte Hornets",
                            "nickname": "Hornets",
                            "code": "CHA",
                            "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png"
                        },
                        "conference": {
                            "name": "east",
                            "rank": 9,
                            "win": 19,
                            "loss": 18
                        },
                        "division": {
                            "name": "southeast",
                            "rank": 2,
                            "win": 5,
                            "loss": 7,
                            "gamesBehind": "9.5"
                        },
                        "win": {
                            "home": 14,
                            "away": 15,
                            "total": 29,
                            "percentage": ".483",
                            "lastTen": 1
                        },
                        "loss": {
                            "home": 14,
                            "away": 17,
                            "total": 31,
                            "percentage": ".517",
                            "lastTen": 9
                        },
                        "gamesBehind": "9.5",
                        "streak": 3,
                        "winStreak": false,
                        "tieBreakerPoints": null
                    },
                    ],
                })
            );
        }

        return res(ctx.status(404), ctx.json({ message: "Invalid league or season" }));
    }),
];
