import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    "/games",
    {
      params: { category: selectedGenre?.genre },
    },
    [selectedGenre],
  );

export default useGames;
