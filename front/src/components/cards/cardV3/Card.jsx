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
import { useCallApi } from "../../../hooks/useCallApi";
import Spinner from "../../spinner/Spinner";

const Card = () => {
  const language = useSelector((state) => state.language.language);
  const { data, error, isLoading } = useCallApi("events");

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  const event = data[0];
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
              src={event.media}
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
                ? "événnements"
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
              <Text color={"gray.400"}>{event.date?.split("T")?.[0]}</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default Card;
