import React from "react";
import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Instruction = () => {
  return (
    <Box my={20}>
      <Heading as="h2" mb={5}>
        How to Order?
      </Heading>

      <UnorderedList>
        <ListItem>
          Sign in (or create an account) and set your delivery address.
        </ListItem>
        <ListItem>Choose the restaurant you want to order from.</ListItem>
        <ListItem>Select your items and tap “Add to Cart”.</ListItem>
        <ListItem>
          To place your order, select “View cart” or “Checkout”.
        </ListItem>
        <ListItem>Review your order and tap “Place Order”...</ListItem>
        <ListItem>Track your order progress.</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Instruction;
