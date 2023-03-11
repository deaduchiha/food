import React from "react";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px" alignItems="center">
      <Box display="flex" flexDirection="column" gap={2}>
        <Heading as="h2">Food Bar</Heading>
        <Text as="b">Food delivery and takeout!</Text>
        <Text>
          Food Bar is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </Text>
        <Button
          as={Link}
          href="/menu"
          w="fit-content"
          bg="#003939"
          color="#fbfdff"
          _hover={{
            color: "#42d5a7",
          }}
        >
          See All
        </Button>
      </Box>
      <Box>
        <Image src="/images/banner.png" alt="banner" />
      </Box>
    </SimpleGrid>
  );
};

export default Banner;
