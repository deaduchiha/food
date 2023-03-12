import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Box,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";

import { BsFillPinMapFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";

const FoodCard = (props) => {
  const { id, name, price, details, discount } = props;
  console.log();
  return (
    <Card borderRadius={10} overflow="hidden">
      <Box>
        <Image
          objectFit="cover"
          w={300}
          src={`images/${id}.jpeg`}
          alt={`${name}`}
        />
        {discount ? (
          <Text
            position="absolute"
            top={2}
            left={2}
            bg="#d74a3a"
            userSelect="none"
            color="#fff"
            border="3px solid #fff"
            padding="5px"
            borderRadius={5}
          >
            {`${discount}%`}
          </Text>
        ) : undefined}
      </Box>
      <CardBody>
        <Flex justifyContent="space-between">
          <Text>{`${name}`}</Text>
          <Flex gap={2} alignItems="center" fontSize="0.8rem" color="#d74a3a">
            <BsFillPinMapFill />
            {`${details[0].Cuisine}`}
          </Flex>
        </Flex>
        <Flex gap={3} mt={5} alignItems="center" fontSize="1.625rem">
          <FaMoneyBillAlt />
          {discount ? (
            <Text color="#b52a37">{`${
              (price * (100 - discount)) / 100
            }$`}</Text>
          ) : (
            <Text>{`${price}$`}</Text>
          )}
        </Flex>
      </CardBody>

      <CardFooter>
        <Button
          w="full"
          bg="#d74a3a"
          color="#fbfdff"
          _hover={{
            color: "#e8f1f5",
          }}
        >
          See Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
