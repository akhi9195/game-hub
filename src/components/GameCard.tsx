import type { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.thumbnail} />
      <CardBody>
        <Heading fontSize="2xl">{game.title}</Heading>

        <HStack justifyContent="space-between">
          <PlatformIconList platform={game.platform} />
          <CriticScore score={game.id} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
