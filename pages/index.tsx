import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Text fontSize={32} fontWeight={700} color="teal">
        Hello there
      </Text>
    </div>
  );
};

export default Home;
