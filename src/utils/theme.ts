import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f7fafc",
      900: "#171923",
    },
  },
};

export default extendTheme(theme);
