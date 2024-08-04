import {  Box, Stack, Typography, } from '@mui/material';
import { useGetNbaStandings } from '../api/standings.queries';
import TeamCard from '../components/TeamCard';
import data from '../api/exampleStandings.json'


export function HomePage() {
  // const { data: standings, isLoading } = useGetNbaStandings('east');

// if (isLoading) {
//     return <div>Loading...</div>;
//   }
  console.log(data);
  data.sort((a, b) => parseInt(b.win) - parseInt(a.win));

  return (
    <Box>
    <Stack>
      {/* <Typography>{data.example1.away.win}</Typography> */}
    </Stack>
    <Stack>
      <Stack gap={8}>
        {data.map((team) => (
          <TeamCard props={team} ></TeamCard>
        ))} 

        </Stack>
  
      
    </Stack>
    </Box>
  );
}
