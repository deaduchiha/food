import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, Flex, Heading, Image, Select } from "@chakra-ui/react";
import FoodCard from "../menu/card";

const Search = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
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
      <Flex pt={100} justifyContent="center">
        {!data.length ? (
          <Image w="200" src="/images/search.png" alt="categories" />
        ) : undefined}
      </Flex>
      <Flex
        justifyContent={{ md: "space-between", base: "center" }}
        flexWrap="wrap"
        gap={10}
        mt={10}
      >
        {data.map((food) => (
          <FoodCard key={food.id} {...food} />
        ))}
      </Flex>
    </Box>
  );
};

export default Search;
