import data from "../../public/testData/standingsData.json";
import NbaTeamCardList from "../../public/ui/NbaTeamCardList";

console.log(data.response)


export default function Home() {
  return (
    <NbaTeamCardList standings={data.response} />
  );
}
