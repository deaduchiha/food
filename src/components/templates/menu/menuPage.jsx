import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import FoodCard from "@/components/modules/menu/card";

// components

const MenuPage = ({ data }) => {
  return (
    <Box my={20} px={5}>
      <Heading as="h2" mb={10}>
        Menu
      </Heading>
      <Flex
        justifyContent={{ md: "space-between", base: "center" }}
        flexWrap="wrap"
        gap={10}
      >
        {data.map((food) => (
          <FoodCard key={food.id} {...food} />
        ))}
      </Flex>
    </Box>
  );
};

export default MenuPage;
