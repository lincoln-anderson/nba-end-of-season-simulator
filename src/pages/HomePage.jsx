import {  Stack, Typography, } from '@mui/material';
import { useGetNbaStandings } from '../api/standings.queries';
import TeamCard from '../components/TeamCard';
import data from '../api/exampleStandings.json'


export function HomePage() {
  // const { data: standings, isLoading } = useGetNbaStandings('east');

// if (isLoading) {
//     return <div>Loading...</div>;
//   }
  console.log(data.example1);
  return (
    <Stack>
      <Typography>Home Page</Typography>
    </Stack>
  //   <Stack>
  //     {standings &&
  //     <Stack>
  //       {standings.data.api.standings.map((team) => (
  //         <TeamCard props={team} ></TeamCard>
  //       ))} 

  //       </Stack>
  // }
      
  //   </Stack>
  );
}
