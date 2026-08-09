import { HStack, Text } from "@chakra-ui/react";
import { FaWindows, FaApple, FaPlaystation } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
interface Props {
  platform: string;
}
const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    "PC (Windows)": FaWindows,
    "Web Browser": FaApple,
  };
  return (
    <HStack marginY={1}>
      <Icon as={iconMap[platform]} color={"gray.500"} />
    </HStack>
  );
};

export default PlatformIconList;
