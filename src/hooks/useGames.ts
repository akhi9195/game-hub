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
        "sort-by": gameQuery.sortOrder,
      },
    },
    [gameQuery],
  );

export default useGames;
