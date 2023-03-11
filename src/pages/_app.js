import React from "react";
//styles
import "@/styles/globals.css";

import Layout from "@/components/layout/layout";

import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
