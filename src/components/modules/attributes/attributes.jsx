import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import CardEl from "./card";

import { FaPlaneDeparture } from "react-icons/fa";

const Attributes = () => {
  return (
    <Box>
      <Heading as="h2">Why us!?</Heading>
      <Flex mt={5} justifyContent="space-between">
        <CardEl icon={<FaPlaneDeparture />} title="fast" />
        <CardEl icon={<FaPlaneDeparture />} title="fast" />
        <CardEl icon={<FaPlaneDeparture />} title="fast" />
        <CardEl icon={<FaPlaneDeparture />} title="fast" />
      </Flex>
    </Box>
  );
};

export default Attributes;
