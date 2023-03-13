import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { BsFillPinMapFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";

const FoodDetails = (props) => {
  const { id, name, price, discount, details } = props;

  return (
    <Box px={3}>
      <Heading mt={20} mb={15} as="h2">
        Details
      </Heading>
      <Card
        w="fit-content"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="unstyled"
      >
        <Image
          mr={5}
          objectFit="cover"
          maxW={{ base: "100%", sm: "300px" }}
          src={`/images/${id}.jpeg`}
          alt={`${name}`}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{`${name}`}</Heading>
            <Flex gap={2} alignItems="center" color="#d74a3a" my={5}>
              <BsFillPinMapFill />
              {`${details[0].Cuisine}`}
            </Flex>

            <Flex gap={3} mt={5} alignItems="center" fontSize="1.625rem">
              <FaMoneyBillAlt />
              {discount ? (
                <Text color="#b52a37">{`${
                  (price * (100 - discount)) / 100
                }$`}</Text>
              ) : (
                <Text>{price}</Text>
              )}
            </Flex>
          </CardBody>

          <CardFooter>
            {discount ? (
              <Button
                w="full"
                variant="unstyled"
                color="#fff"
                bg="#b52a37"
              >{`${discount}% discount`}</Button>
            ) : undefined}
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
};

export default FoodDetails;
