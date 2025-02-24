
import { StandingsResponse } from "../model/Team";

export type NbaTeamCardProps = {
    team: StandingsResponse;
};



export default function NbaTeamCard({ team }: NbaTeamCardProps) {
    return (
        <div className="flex flex-row">
            <p>{team.team.name}</p>
            <p>{team.win.total + "-" + team.loss.total}</p>

        </div>
    );
}