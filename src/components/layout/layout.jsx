import React from "react";
import Link from "next/link";

import {
  Box,
  Flex,
  useColorModeValue,
  Container,
  Menu,
  Text,
  Button,
} from "@chakra-ui/react";

const Links = ["menu", "categories"];

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Box
          bg={useColorModeValue("#003939")}
          color={useColorModeValue("#fbfdff")}
          px={4}
        >
          <Container maxW="container.xl">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <Box flex={1}>
                <Button
                  as={Link}
                  href="/"
                  border="none"
                  bg="none"
                  _hover={{
                    color: "#42d5a7",
                    bg: "transparent",
                  }}
                  _focus={{
                    bg: "transparent",
                  }}
                >
                  Food-Bar
                </Button>
              </Box>
              <Menu>
                <Flex gap={6}>
                  {Links.map((link) => (
                    <Button
                      key={link}
                      as={Link}
                      href={`/${link}`}
                      border="none"
                      bg="none"
                      _hover={{
                        color: "#42d5a7",
                        bg: "transparent",
                      }}
                      _focus={{
                        bg: "transparent",
                      }}
                    >
                      {link}
                    </Button>
                  ))}
                </Flex>
              </Menu>
            </Flex>
          </Container>
        </Box>
      </header>
      <Container my={5} maxW="container.xl">
        {children}
      </Container>
      <footer>
        <Box
          bg={useColorModeValue("#42d5a7")}
          color={useColorModeValue("#003939")}
          py={2}
        >
          <Container display="flex" justifyContent="center">
            <Text>Food-Bar | nextJs</Text>
          </Container>
        </Box>
      </footer>
    </>
  );
};
export default Layout;
