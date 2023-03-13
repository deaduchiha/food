import {
  Box,
  Heading,
  List,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const Introduction = (props) => {
  const { introduction, ingredients, recipe, details } = props;

  return (
    <>
      <Box px={3} my={30}>
        <Text>{`${introduction}`}</Text>
      </Box>
      <Box>
        <Heading color="#ed4133" as="h5" size="lg" mb={2}>
          Details
        </Heading>

        <UnorderedList>
          {details.map((detail, index) => (
            <ListItem fontSize="1.325rem" display="flex" gap={2} key={index}>
              <Text>{Object.keys(detail)[0]}: </Text>
              <Text color="grey" as="span">
                {Object.values(detail)[0]}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box my={30}>
        <Heading color="#ed4133" as="h2" mb={2}>
          Ingredients
        </Heading>
        <UnorderedList>
          {ingredients.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box my={30}>
        <Heading color="#ed4133" as="h2" mb={2}>
          Recipe
        </Heading>
        <OrderedList>
          {recipe.map((item, index) => (
            <ListItem mb={5} key={index}>
              <Text>{item}</Text>
            </ListItem>
          ))}
        </OrderedList>
      </Box>
    </>
  );
};

export default Introduction;
