import React from "react";
import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";

const CardEl = ({ icon, title }) => {
  return (
    <Card
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="150px"
      h="150px"
      textAlign="center"
    >
      <CardHeader fontSize="2rem">{icon}</CardHeader>
      <CardBody fontSize="1.2rem">
        <Text>{title}</Text>
      </CardBody>
    </Card>
  );
};

export default CardEl;
