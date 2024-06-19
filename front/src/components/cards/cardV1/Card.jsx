import React from "react";
import "./Card.scss";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Card = () => {
  const language = useSelector((state) => state.language.language);
  const adventages = [
    {
      fr: "Actualités",
      en: "News",
      ar: "المستجدات",
    },
    {
      fr: "évènnements",
      en: "Events",
      ar: "الاحداث",
    },
    {
      fr: "Noter",
      en: "Review",
      ar: "تقييم ",
    },
  ];
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("primary", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("whiteHover", "white")}
            align={"center"}
          >
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("green.50", "green.900")}
              p={2}
              px={5}
              color={"green.500"}
              rounded={"full"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#0fa239"}
                fill={"none"}
              >
                <path
                  d="M10.7927 20.5894C8.32173 20.7602 5.87348 9.23635 7.55462 7.55498C9.23576 5.8736 20.7604 8.32015 20.5896 10.7911C20.472 12.4094 17.733 13.0495 17.813 14.4877C17.8364 14.9089 18.3685 15.2929 19.4327 16.0607C20.1722 16.5942 20.9262 17.1123 21.653 17.6629C21.9432 17.8827 22.0577 18.2522 21.9725 18.6006C21.5634 20.2737 20.2811 21.5616 18.6011 21.9725C18.2528 22.0577 17.8833 21.9431 17.6636 21.653C17.1131 20.926 16.595 20.1719 16.0615 19.4323C15.2938 18.368 14.91 17.8358 14.4888 17.8124C13.0508 17.7324 12.4107 20.4718 10.7927 20.5894Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M9.02968 3.5V2M5 5L4 4M3.5 9.02975H2M5 13L4 14M14 4L13 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text
                fontSize={{ base: "xxxl" }}
                fontWeight={800}
                color={"white"}
              >
                {language === "fr"
                  ? "Joindre"
                  : language === "en"
                  ? "Join"
                  : "انضم"}
              </Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("background", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              {adventages.map((adventage) => {
                return (
                  <ListItem key={adventage.fr} textTransform={"capitalize"}>
                    <ListIcon as={CheckIcon} color="green.400" />
                    {adventage[language]}
                  </ListItem>
                );
              })}
            </List>

            <Button
              mt={10}
              w={"full"}
              bg={"primary"}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgba(15, 162, 57, 0.43)"}
              _hover={{
                bg: "primaryHover",
                boxShadow: "0 5px 20px 0px rgba(0, 147, 95, 0.43)",
              }}
              _focus={{
                bg: "primaryHover",
              }}
              _dark={{
                bg: "secondary",
                boxShadow: "0 5px 20px 0px rgba(47, 129, 196, 0.43)",
              }}
              as={Link}
              to="/login"
            >
              <Text mr={2}>
                {" "}
                {language === "fr"
                  ? "Connection"
                  : language === "en"
                  ? "Login"
                  : "دخول"}
              </Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.9871 10.2401 20.8194 9.05112 20.484C6.18961 19.6769 3.70555 18.3204 3.10956 15.2816C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27704 3.10956 8.71845C3.70555 5.67963 6.18961 4.32314 9.05112 3.516C10.2401 3.18062 10.8346 3.01293 11.3156 3.00116C13.3831 2.95058 14.9264 4.52305 15 6.37499"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 12H21M10 12C10 11.2998 11.9943 9.99153 12.5 9.5M10 12C10 12.7002 11.9943 14.0085 12.5 14.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Card;
