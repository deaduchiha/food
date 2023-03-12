import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Definition = () => {
  return (
    <>
      <Box my={20}>
        <Heading as="h2" mb={5}>
          Who We Are?
        </Heading>
        <Text fontSize="1.2rem">
          Food Bar company was founded in 2009 by Garrett Camp and Travis
          Kalanick.The company began food delivery in August 2014 with the
          launch of the UberFRESH service in Santa Monica, California. In 2015,
          the platform was renamed to UberEATS and the ordering software was
          released as its own application, separate from the app for Uber
          rides.In 2016, it commenced operations in both London and Paris.
        </Text>
      </Box>
    </>
  );
};

export default Definition;
