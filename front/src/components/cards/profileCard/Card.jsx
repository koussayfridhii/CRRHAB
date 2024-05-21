import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Tilt } from "react-tilt";

export default function ProfileCard({ data, language }) {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("background", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Tilt options={defaultOptions}>
          <Avatar
            size={"xl"}
            src={data?.profilePic}
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
            //   _after={{
            //     content: '""',
            //     w: 4,
            //     h: 4,
            //     bg: "green.300",
            //     border: "2px solid white",
            //     rounded: "full",
            //     pos: "absolute",
            //     bottom: 0,
            //     right: 3,
            //   }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {data?.name?.[language]}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            {`@${data?.name?.[language]}`}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {data?.description?.[language]}
          </Text>

          {/* <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #music
          </Badge>
        </Stack> */}

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              as="a"
              href={data?.socialMedia}
              target="_blank"
            >
              {language === "en"
                ? "Follow"
                : language === "fr"
                ? "Suivre"
                : "متابعة"}
            </Button>
          </Stack>
        </Tilt>
      </Box>
    </Center>
  );
}
