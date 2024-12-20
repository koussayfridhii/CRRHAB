import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import { useSelector } from "react-redux";
import { useCallApi } from "../hooks/useCallApi";
import Spinner from "../components/spinner/Spinner";
const Card = () => {
  const language = useSelector((state) => state.language.language);
  // const data = {
  //   title: { fr: "Video", en: "Video", ar: "فيديو" },
  //   description: { fr: "Video", en: "Video", ar: "فيديو" },
  //   media: "WUC9acwdmIw",
  //   img: "https://firebasestorage.googleapis.com/v0/b/crrhab-358e9.appspot.com/o/media%2Figuessmed%20coordinators.png?alt=media&token=ddf7b821-a85e-482c-b7b6-44b2914ed894",
  // };
  const { data, error, isLoading } = useCallApi("videos");

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  return (
    <>
      <Flex
        bg="white"
        _dark={{
          bg: "background",
        }}
        p={{ base: 0, md: 20 }}
        w="auto"
        justifyContent="center"
        alignItems="center"
        gap="4"
        wrap="wrap"
      >
        {data?.map((e) => {
          return (
            <Center py={12} key={e._id}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={"background"}
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
                    backgroundImage: `url(${data?.[0]?.img})`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(30px)",
                    },
                  }}
                >
                  <Box
                    rounded={"lg"}
                    height={230}
                    width={282}
                    objectFit={"cover"}
                  >
                    <VideoPlayer id={e?.media} />
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
                    {e?.title[language]}
                  </Heading>
                  <Text fontSize={"sm"} textTransform={"uppercase"}>
                    {e?.description[language]}
                  </Text>
                </Stack>
              </Box>
            </Center>
          );
        })}
      </Flex>
    </>
  );
};

export default Card;
