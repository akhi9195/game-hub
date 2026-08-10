import genres from "../data/genres";

export interface Genre {
  genre: string;
}

const useGenres = () => {
  const genresList = [...new Set(genres.map((game) => game.genre))];

  return {
    data: genresList,
    error: null,
    isLoading: false,
  };
};
export default useGenres;
