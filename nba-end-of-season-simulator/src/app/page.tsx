"use client";

import { useEffect, useState } from "react";
import testData from "../../public/testData/standingsData.json";
import NbaTeamCardList from "../../public/ui/NbaTeamCardList";

export default function Home() {
  const apiUrl = "https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021";

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "mocked-api-key", // Fake key since MSW intercepts this
          "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        console.log("[CLIENT] API Response:", result); // Debugging Log
        setData(result);
      } catch (error: any) {
        console.error("[CLIENT] API Error:", error.message);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  console.log("[CLIENT] Rendered Data:", data ?? testData.response);

  return <NbaTeamCardList standings={data?.response ?? testData.response} />;
}
