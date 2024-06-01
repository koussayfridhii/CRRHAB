import React from "react";
import {
  Flex,
  IconButton,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Table({ data, headers, language = "fr" }) {
  const dataColor = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("background", "gray.700");

  return (
    <Flex
      w="full"
      bg="background"
      p={50}
      alignItems="center"
      justifyContent="center"
      _dark={{
        bg: "background",
      }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: "primaryHover" }}
        shadow="lg"
        borderRadius={"lg"}
        p={3}
        _dark={{
          bg: "secondary",
        }}
      >
        {data.map((element) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg={dataColor}
              key={element.orcid}
              borderRadius={"xl"}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 5 }}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={bg2}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                fontWeight="hairline"
                borderRadius={"xl"}
              >
                <chakra.span>{headers.name[language]}</chakra.span>
                <chakra.span>{headers.speciality[language]}</chakra.span>
                <chakra.span>{headers.email[language]}</chakra.span>
                <chakra.span textAlign={{ md: "end" }}>
                  {headers.orcid[language]}
                </chakra.span>
                <chakra.span textAlign={{ md: "end" }}>
                  {headers.cv[language]}
                </chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 5 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <chakra.span>{element.name[language]}</chakra.span>
                <chakra.span>{element.speciality[language]}</chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {element.email}
                </chakra.span>
                <Flex justify={{ md: "end" }}>
                  <chakra.a
                    href={`https://orcid.org/${element.orcid}`}
                    target="_blank"
                    color="primary"
                  >
                    {element.orcid}
                  </chakra.a>
                </Flex>
                <Flex justify={{ md: "end" }}>
                  {element.cv !== "" ? (
                    <chakra.a href={element.cv} target="_blank" color="primary">
                      <IconButton
                        colorScheme="blue"
                        icon={<BsBoxArrowUpRight />}
                        aria-label="Up"
                      />
                    </chakra.a>
                  ) : (
                    "-"
                  )}
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}
