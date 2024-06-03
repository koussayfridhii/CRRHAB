import { Box, Flex, Image, chakra } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, language }) => {
  return (
    <>
      <Box
        maxW="xs"
        mx="auto"
        bg="background"
        minh={"25vh"}
        shadow="xl"
        rounded="lg"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color="text"
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            {data.title?.[language]?.split(" ").slice(0, 3).join(" ")}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            {data.description?.[language]?.split(" ").slice(0, 10).join(" ") +
              "..."}
          </chakra.p>
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src={data.img}
          alt={data.title?.[language]}
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
            as={Link}
            to={"/actualities/" + data._id}
          >
            {language === "fr"
              ? "voir plus"
              : language === "en"
              ? "see More ..."
              : "المزيد"}
          </chakra.button>
        </Flex>
      </Box>
    </>
  );
};

export default Card;
