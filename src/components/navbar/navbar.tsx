import {
  Box,
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ToggleColorMode from "../chakraUi/ToggleColorMode";
import { ChevronDownIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import Logo from "./logo";
import NavContentContainer from "./navContentContainer";
import { useRouter } from "next/router";
import AccountModal from "./accountModal";

const Navbar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box boxShadow="lg" py={{ base: 2, lg: 3 }}>
        <Container maxW={{ base: "95%", md: "93%", lg: "90%" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Logo />
            </Box>
            <Box flexGrow={1} mx={2}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="Search products, brands and categories"
                />
              </InputGroup>
            </Box>
            <Box mx={2}>
              <Button colorScheme="teal" fontSize={14} shadow="lg">
                SEARCH
              </Button>
            </Box>
            <NavContentContainer onClick={onOpen}>
              <Icon as={RiAccountCircleLine} fontSize={24} />
              <Text fontSize={{ base: 14, md: 16 }} fontWeight={400} pl={1}>
                Account
              </Text>
              <ChevronDownIcon fontSize={24} />
            </NavContentContainer>
            <NavContentContainer onClick={() => router.push("/cart")}>
              <Icon as={MdOutlineShoppingCart} fontSize={24} />
              <Text fontSize={{ base: 14, md: 16 }} fontWeight={400} pl={1}>
                Cart
              </Text>
            </NavContentContainer>
            <Box ml={2}>
              <ToggleColorMode />
            </Box>
          </Box>
        </Container>
      </Box>
      <AccountModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

export default Navbar;
