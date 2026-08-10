import useData from "./useData";

// export interface Genres {
//   id: number;
//   genre: string;
//   title: string;
//   thumbnail: string;
//   platform: string;
// }

export interface Genre {
  genre: string;
}

const useGenres = () => {
  const { data, error, isLoading } = useData<Genre>("/games");
  const genres = [...new Set(data.map((game) => game.genre))];

  return {
    data: genres,
    error,
    isLoading,
  };
};
export default useGenres;
