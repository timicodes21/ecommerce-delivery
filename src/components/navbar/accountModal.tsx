import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorMode,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaShopify } from "react-icons/fa";
import EnterDetails from "../pages/auth/enterDetails";
import EnterMail from "../pages/auth/enterMail";
import EnterPassword from "../pages/auth/enterPassword";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const AccountModal: React.FC<Props> = ({ isOpen, onOpen, onClose }) => {
  const { colorMode } = useColorMode();
  const [page, setPage] = useState<string>("Enter Email");

  const renderPage = () => {
    switch (page) {
      case "Enter Email":
        return <EnterMail checkUserEmail={() => setPage("Enter Password")} />;
      case "Enter Password":
        return <EnterPassword login={() => setPage("Enter Details")} />;
      case "Enter Details":
        return <EnterDetails />;
      default:
        return <EnterMail checkUserEmail={() => setPage("Enter Password")} />;
    }
  };
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={() => {
          setPage("Enter Email");
          onClose();
        }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Box textAlign="center">
              <Icon
                as={FaShopify}
                color={colorMode === "light" ? "teal" : "#81E6D9"}
                fontSize={{ base: "30px", lg: "48px" }}
              />
            </Box>
            <Box textAlign="center">{renderPage()}</Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AccountModal;
