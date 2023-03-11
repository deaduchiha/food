import React from "react";
import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";

const CardEl = ({ icon, title }) => {
  return (
    <Card
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="1.9rem"
      w="150px"
      h="150px"
    >
      <CardHeader>{icon}</CardHeader>
      <CardBody>
        <Text>{title}</Text>
      </CardBody>
    </Card>
  );
};

export default CardEl;
