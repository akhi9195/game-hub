import type { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        category: gameQuery?.genre,
        platform: gameQuery?.platform?.value,
      },
    },
    [gameQuery],
  );

export default useGames;
