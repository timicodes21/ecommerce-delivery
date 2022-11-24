import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiHide, BiShow } from "react-icons/bi";

interface Props {
  login: () => void;
}

const EnterPassword: React.FC<Props> = ({ login }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Text fontSize={16} fontWeight={600} my={1}>
        Welcome Back!!
      </Text>
      <Text fontSize={14} fontWeight={400} my={1}>
        Log back into your Thrift account.
      </Text>
      <InputGroup size="lg" my={3}>
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Icon
            as={show ? BiShow : BiHide}
            fontSize="30px"
            onClick={handleClick}
            cursor="pointer"
          />
        </InputRightElement>
      </InputGroup>
      <Button w="100%" my={3} colorScheme="teal" size="lg" onClick={login}>
        Login
      </Button>
    </>
  );
};

export default EnterPassword;
