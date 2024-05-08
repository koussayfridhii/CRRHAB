import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import VideoPlayer from "../../videoPlayer/VideoPlayer";
import { useSelector } from "react-redux";
const Card = () => {
  const VideoLink = "../src/assets/videos/landingSidebarVideo.mp4";
  const posterImg =
    "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const title = { fr: "Video", en: "Video", ar: "فيديو" };
  const description = { fr: "Video", en: "Video", ar: "فيديو" };
  const language = useSelector((state) => state.language.language);
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
            height={"200px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: -3,
              left: 0,
              backgroundImage: `url(${posterImg})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(30px)",
              },
            }}
          >
            <Box rounded={"lg"} height={230} width={282} objectFit={"cover"}>
              <VideoPlayer source={VideoLink} posterImg={posterImg} />
            </Box>
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading
              color={"primary"}
              fontSize={"xxl"}
              fontFamily={"body"}
              fontWeight={500}
              _dark={{
                color: "secondary",
              }}
            >
              {title[language]}
            </Heading>
            <Text fontSize={"sm"} textTransform={"uppercase"}>
              {description[language]}
            </Text>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default Card;
