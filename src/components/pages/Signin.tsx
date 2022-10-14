import { Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

const Signin = () => {
  return (
    <>
      <Grid templateColumns={{ base: "50% 50%", md: "50% 50%" }}>
        <GridItem></GridItem>
        <GridItem h="100vh">
          <Image
            objectFit="contain"
            src="/assets/images/signin_background.jpg"
            alt="Background"
            style={{ height: "100vh", width: "100%" }}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Signin;
