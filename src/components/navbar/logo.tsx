import { Icon, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FaShopify } from "react-icons/fa";
import styles from "../../../styles/Navbar.module.css";

const Logo: React.FC = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <>
      <Text
        fontSize={{ base: "20px", lg: "28px" }}
        fontWeight={500}
        className={styles.logo}
        mr={2}
        onClick={() => router.push("/")}
        cursor="pointer"
      >
        ThriftNow
        <Icon
          as={FaShopify}
          color={colorMode === "light" ? "teal" : "#81E6D9"}
          fontSize={{ base: "20px", lg: "28px" }}
        />
      </Text>
    </>
  );
};

export default Logo;
