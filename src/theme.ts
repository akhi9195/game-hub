import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { color } from "framer-motion";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  color: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#a0a0a0",
      400: "#f9f9f9",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
});

export default theme;
