import useData from "./useData";

export interface Genres {
  id: number;
  genre: string;
  title: string;
  thumbnail: string;
  platform: string;
}

const useGenres = () => useData<Genres>("/games");

export default useGenres;
