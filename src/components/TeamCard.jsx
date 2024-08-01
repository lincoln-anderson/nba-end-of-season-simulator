import { Box, Card, Stack, Typography } from "@mui/material";

export default function TeamCard(props) {
    console.log(props.props) 
    return <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
        <Card sx={{width: 200, height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Stack direction={"row"} spacing={2}>
            <Typography>{props.props.gamesBehind}</Typography>
            <Typography>{props.props.win}</Typography>
            <Typography>{props.props.loss}</Typography>

        </Stack>
        </Card>
    </Box>;
}