"use client";

import { StandingsResponse } from "../model/Team";
import NbaTeamCard from "./NbaTeamCard";

export type NbaTeamCardListProps = {
    standings: StandingsResponse[];
};

export default function NbaTeamCardList({ standings }: NbaTeamCardListProps) {
    return (
        <div>
            {standings.map((team) => (
                <NbaTeamCard team={team} key={team.team.id} />
            ))}
        </div>
    )
}