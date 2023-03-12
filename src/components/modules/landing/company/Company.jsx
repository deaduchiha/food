import { Flex } from "@chakra-ui/react";
import React from "react";

import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { DiGulp } from "react-icons/di";

const Company = () => {
  return (
    <Flex
      fontSize="5.3rem"
      color="#b99d9e"
      justifyContent={{ sm: "space-around", base: "space-between" }}
      gap={10}
      flexWrap="wrap"
      alignItems="center"
      whiteSpace={7}
      my={20}
    >
      <DiApple />
      <DiAndroid />
      <DiPhotoshop />
      <DiGulp />
    </Flex>
  );
};

export default Company;
