import React from "react";
import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Guide = () => {
  return (
    <Box my={20}>
      <Flex justifyContent="space-around">
        <Card as={Link} href="/menu">
          <CardBody>
            <Text>Menu</Text>
          </CardBody>
        </Card>
        <Card as={Link} href="/categories">
          <CardBody>
            <Text>Categories</Text>
          </CardBody>
        </Card>
        <Card as={Link} href="/">
          <CardBody>
            <Text>Discount</Text>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default Guide;
