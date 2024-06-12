import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  ButtonGroup,
} from "@chakra-ui/react";
import axios from "axios";
import { CiSettings } from "react-icons/ci";

import { useSelector } from "react-redux";

export default function SocialProfileWithImage() {
  const { language } = useSelector((state) => state.language);
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const toggleNews = async () => {
    const data = { ...user, news: !user.news };
    await axios.put(
      `http://localhost:5000/api/users/${user._id}`,
      { data },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
  };
  return (
    <Center py={6}>
      <Box
        minW={"20dvw"}
        maxW={"fit-content"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={user?.profilePic}
            alt={user?.username?.fr}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {user.fullName?.[language]}
            </Heading>
            <Text color={"gray.500"}>{user?.grade?.[language]}</Text>
            <Text color={"gray.500"}>{user?.description?.[language]}</Text>
          </Stack>
          <ButtonGroup mx="auto">
            <Button
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              onClick={() => {
                console.log(user);
              }}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              fontSize={"6xl"}
            >
              <CiSettings />
            </Button>
            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              onClick={toggleNews}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              px={10}
            >
              {language === "fr"
                ? "Notifications par mail"
                : language === "en"
                ? "Mail Notifications"
                : "اشعارات البريد"}
            </Button>
            <Button
              w={"full"}
              mt={8}
              bg="red.600"
              color={"white"}
              rounded={"md"}
              onClick={() => {
                window.location = "/messages?email=kaushik@moneysave.io";
              }}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              {language === "fr"
                ? "Déconnecter"
                : language === "en"
                ? "Disconnect"
                : "خروج"}
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Center>
  );
}
