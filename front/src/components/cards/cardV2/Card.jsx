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
  const language = useSelector((state) => state.language.language);
  const data = {
    title: { fr: "Video", en: "Video", ar: "فيديو" },
    description: { fr: "Video", en: "Video", ar: "فيديو" },
    media: "WUC9acwdmIw",
    img: "https://firebasestorage.googleapis.com/v0/b/crrhab-358e9.appspot.com/o/media%2Figuessmed%20coordinators.png?alt=media&token=ddf7b821-a85e-482c-b7b6-44b2914ed894",
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
            height={"200px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: -3,
              left: 0,
              backgroundImage: `url(${data?.img})`,
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
              <VideoPlayer id={data?.media} />
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
              {data?.title[language]}
            </Heading>
            <Text fontSize={"sm"} textTransform={"uppercase"}>
              {data?.description[language]}
            </Text>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default Card;
