import React from "react";
import { Box, Button, Heading, Text, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <Flex
      flexDirection={{
        lg: "row",
        md: "row",
        base: "column-reverse ",
      }}
      textAlign={{ md: "inherit", base: "center" }}
      gap={{ base: 10 }}
      alignItems="center"
      justifyContent="space-between"
      my={20}
    >
      <Box
        w={{ md: "lg", base: "base" }}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Heading as="h2">Food Bar</Heading>
        <Text as="b">Food delivery and takeout!</Text>
        <Text color="#a0a1a3">
          Food Bar is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </Text>
        <Button
          as={Link}
          href="/menu"
          bg="#d74a3a"
          color="#fbfdff"
          _hover={{
            color: "#473328",
          }}
        >
          See All
        </Button>
      </Box>
      <Box>
        <Image w={"lg"} src="/images/banner.png" alt="banner" />
      </Box>
    </Flex>
  );
};

export default Banner;
