import { Button, Input, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  checkUserEmail: () => void;
}

const EnterMail: React.FC<Props> = ({ checkUserEmail }) => {
  return (
    <>
      <Text fontSize={16} fontWeight={600} my={1}>
        Whats your email address?
      </Text>
      <Text fontSize={14} fontWeight={400} my={1}>
        Type your email to log in or create an account
      </Text>
      <Input my={3} placeholder="Email" size="lg" />
      <Button
        w="100%"
        my={3}
        colorScheme="teal"
        size="lg"
        onClick={checkUserEmail}
      >
        Continue
      </Button>
    </>
  );
};

export default EnterMail;
