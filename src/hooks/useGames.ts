import useData from "./useData";
import type { Genre } from "./useGenres";
import type { Platform } from "./usePlatform";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
) =>
  useData<Game>(
    "/games",
    {
      params: {
        category: selectedGenre?.genre,
        platform: selectedPlatform?.value,
      },
    },
    [selectedGenre, selectedPlatform],
  );

export default useGames;
