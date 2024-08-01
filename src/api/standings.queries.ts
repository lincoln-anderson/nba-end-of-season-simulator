import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const standingRequestKeys = {
  all: ['standings/standard/2023/conference/'] as const,
  detail: (conference: string) => [...standingRequestKeys.all, conference] as const,
};

type ConferenceName = 'east' | 'west'; // Define possible conference names

interface Conference {
  name: ConferenceName;
  rank: string;
  win: string;
  loss: string;
}

interface Division {
  name: string;
  rank: string;
  win: string;
  loss: string;
  GamesBehind: string;
}

interface TeamStats {
  league: string;
  teamId: string;
  win: string;
  loss: string;
  gamesBehind: string;
  lastTenWin: string;
  lastTenLoss: string;
  streak: string;
  seasonYear: string;
  conference: Conference;
  division: Division;
  winPercentage: string;
  lossPercentage: string;
  home: { win: string; loss: string };
  away: { win: string; loss: string };
  winStreak: string;
  tieBreakerPoints: null | string; // Null or string type
}

interface ApiResponse {
  api: {
    status: number;
    message: string;
    results: number;
    filters: string[];
    standings: TeamStats[];
  };
}

export const useGetNbaStandings = (conference: string) => {
  return useQuery({
    queryKey: standingRequestKeys.detail(conference),
    queryFn: async () => {
      const res = await axios.get<ApiResponse>(
        `https://api-nba-v1.p.rapidapi.com/standings/standard/2023/conference/${conference}`,
        {
          headers: {
            'X-RapidAPI-Key': 'ff3a7ae9bcmsh4e698cda74ed1fbp1f4864jsn65a0ee09062d',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
          },
        },
      );
      console.log(res);
      return res;
    },
  });
};
