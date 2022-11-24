import {
  Button,
  Input,
  Text,
  Box,
  Select,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { BiHide, BiShow } from "react-icons/bi";

const EnterDetails = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Text fontSize={16} fontWeight={600} my={1}>
        Personal Details
      </Text>
      <Text fontSize={14} fontWeight={400} my={1}>
        We just need you to fill in some details.
      </Text>

      <Box>
        <Input my={3} placeholder="FirstName" size="lg" />
      </Box>
      <Box>
        <Input my={3} placeholder="MiddleName" size="lg" />
      </Box>
      <Box>
        <Input my={3} placeholder="LastName" size="lg" />
      </Box>
      <Grid my={3} templateColumns={{ base: "25% 5% 70%" }}>
        <GridItem>
          <Select placeholder="+234" size="lg">
            <option value="option1">+234</option>
            {/* <option value="option2">Option 2</option>
            <option value="option3">Option 3</option> */}
          </Select>
        </GridItem>
        <GridItem></GridItem>
        <GridItem>
          <Input placeholder="Phone Number" size="lg" />
        </GridItem>
      </Grid>
      <Button w="100%" my={3} colorScheme="teal" size="lg">
        Create Account
      </Button>
    </>
  );
};

export default EnterDetails;
