import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, Flex, Heading, Select } from "@chakra-ui/react";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = (e) => {
    router.push({
      pathname: "/categories",
      query,
    });
  };

  return (
    <Box mt={20} h="container" px={3}>
      <Heading as="h2" mb={4}>
        Categories
      </Heading>
      <Flex gap={5}>
        <Select
          onChange={changeHandler}
          w="base"
          variant="outline"
          value={query.difficulty}
          name="difficulty"
          placeholder="difficulty"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </Select>
        <Select
          onChange={changeHandler}
          w="base"
          variant="outline"
          value={query.time}
          name="time"
          placeholder="Cooking Time"
        >
          <option value="more">More than 30min</option>
          <option value="less">Less than 30min</option>
        </Select>
        <Button
          onClick={searchHandler}
          bg="#d74a3a"
          color="#fbfdff"
          _hover={{
            color: "#e8f1f5",
          }}
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default Search;
