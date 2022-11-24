import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../src/app/store";
import { ChakraProvider, ColorModeScript, Container } from "@chakra-ui/react";
import theme from "../src/utils/theme";
import Navbar from "../src/components/navbar/navbar";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar />
      <Container maxW={{ base: "95%", md: "93%", lg: "90%" }}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
