import { Button, Stack, Typography } from '@mui/material';
import { useGetNbaStandings } from '../api/standings.queries';

export function HomePage() {
  const standings = useGetNbaStandings('east');
  console.log(standings);
  return (
    <Stack>
      <Typography variant="h1">hello</Typography>
      <Button onClick={() => {}}>hello</Button>
    </Stack>
  );
}
