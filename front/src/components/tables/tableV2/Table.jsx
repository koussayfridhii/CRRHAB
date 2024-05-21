import React from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

export default function App({ headers, data }) {
  // const data = [
  //   { name: "Daggy", created: "7 days ago" },
  //   { name: "Anubra", created: "23 hours ago" },
  //   { name: "Josef", created: "A few seconds ago" },
  //   { name: "Sage", created: "A few hours ago" },
  // ];
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("background", "gray.800");
  const bg3 = useColorModeValue("primary", "gray.700");

  return (
    <Flex
      w="full"
      bg="background"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: bg }}
        shadow="lg"
      >
        <SimpleGrid
          spacingY={3}
          columns={{ base: 1, md: headers.length + 1 }}
          w={{ base: 120, md: "full" }}
          textTransform="uppercase"
          bg={bg3}
          _dark={{
            bg: "secondary",
          }}
          color={"white"}
          py={{ base: 1, md: 4 }}
          px={{ base: 2, md: 10 }}
          fontSize="md"
          fontWeight="hairline"
        >
          {headers.map((header) => {
            return (
              <chakra.span key={header.title.fr}>{header.title.fr}</chakra.span>
            );
          })}
          <chakra.span textAlign={{ md: "center" }}>Actions</chakra.span>
        </SimpleGrid>
        {data.map((token, tid) => {
          return (
            <Flex direction={{ base: "row", md: "column" }} bg={bg2} key={tid}>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: headers.length + 1 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                {headers.map((header) => {
                  return (
                    <chakra.span key={header.title.fr.toLowerCase()}>
                      {typeof token[header.title.fr.toLowerCase()] === "string"
                        ? token[header.title.fr?.toLowerCase()]
                        : token[header.title.fr.toLowerCase()]?.en}
                    </chakra.span>
                  );
                })}
                <Flex justify={{ md: "center" }}>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="blue"
                      icon={<BsBoxArrowUpRight />}
                      aria-label="Up"
                    />
                    <IconButton
                      colorScheme="green"
                      icon={<AiFillEdit />}
                      aria-label="Edit"
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label="Delete"
                    />
                  </ButtonGroup>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}
