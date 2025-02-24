"use client";

import { useEffect, useState } from "react";
import NbaTeamCardList from "../../public/ui/NbaTeamCardList";

export default function Home() {
  const apiUrl = "https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021";

  const [data, setData] = useState<any>(null); // Removed explicit type
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "mocked-api-key", // Fake key since MSW intercepts this
          "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("[CLIENT] API Response:", result);
        setData(result);
      } catch (error: any) {
        console.error("[CLIENT] API Error:", error.message);
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  console.log("[CLIENT] Rendered Data:", data);

  if (loading) return <p>Loading standings...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!data || !data.response?.length) return <p>No standings available.</p>; // Handle undefined response

  return <NbaTeamCardList standings={data.response} />;
}
