import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Card = () => {
  const language = useSelector((state) => state.language.language);
  const event = {
    title: {
      fr: "Evènements",
      en: "Event",
      ar: "الحدث",
    },
    description: {
      fr: "Evènements",
      en: "Event",
      ar: "الحدث",
    },
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "15/05/2024",
  };
  return (
    <>
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("background", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${event.img})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={event.img}
              alt={event.title?.[language]}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"primary"}
              fontSize={"sm"}
              textTransform={"uppercase"}
              _dark={{
                color: "secondary",
              }}
            >
              {language === "fr"
                ? "Evènements"
                : language === "en"
                ? "Event"
                : "حدث"}
            </Text>
            <Heading
              fontSize={"xxl"}
              fontFamily={"body"}
              color={"text"}
              fontWeight={500}
              _dark={{
                color: "secondary",
              }}
            >
              {event.title?.[language]}
            </Heading>
            <Stack direction={"column"} align={"center"}>
              <Text fontWeight={400} fontSize={"sm"} color={"textSecondary"}>
                {event.description?.[language]}
              </Text>
              <Text color={"gray.400"}>{event.date}</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default Card;
