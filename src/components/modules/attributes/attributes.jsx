import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import CardEl from "./card";

import { FaPlaneDeparture } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";

const Attributes = () => {
  return (
    <Box my={10}>
      <Heading as="h2">Why us!?</Heading>
      <Flex mt={5} justifyContent="space-between" flexWrap="wrap" gap={5}>
        <CardEl icon={<FaPlaneDeparture />} title="fast" />
        <CardEl icon={<BiRestaurant />} title="Best Restaurants" />
        <CardEl icon={<BsFillHandIndexThumbFill />} title="your choice" />
        <CardEl icon={<BsClockHistory />} title="24-7" />
      </Flex>
    </Box>
  );
};

export default Attributes;
