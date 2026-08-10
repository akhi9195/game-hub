import { Button, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre} paddingY="5px">
          <Button
            onClick={() => onSelectGenre({ genre })}
            fontSize="lg"
            variant="link"
          >
            {genre}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
