import { Button, List, ListItem, Spinner, Heading } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre} paddingY="5px">
            <Button
              whiteSpace="normal"
              textAlign="left"
              onClick={() => onSelectGenre({ genre })}
              fontSize="lg"
              variant="link"
              fontWeight={genre === selectedGenre?.genre ? "bold" : "normal"}
            >
              {genre}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
