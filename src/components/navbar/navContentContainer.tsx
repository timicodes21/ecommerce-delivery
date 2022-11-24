import { Box, useColorMode } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const NavContentContainer: React.FC<Props> = ({ children, onClick }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        mx={2}
        display="flex"
        alignItems="center"
        cursor="pointer"
        transition={"0.5s"}
        _hover={{ color: colorMode === "light" ? "teal" : "#81E6D9" }}
        onClick={onClick}
      >
        {children}
      </Box>
    </>
  );
};

export default NavContentContainer;
