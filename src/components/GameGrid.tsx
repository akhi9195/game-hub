import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
export interface Game {
  id: number;
  title: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Game[]>("/games")
      .then((res) => setGames(res.data))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {error && <Text> {error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
