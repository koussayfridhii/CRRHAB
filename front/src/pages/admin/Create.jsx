import React from "react";
import { Box, Flex, Heading, Wrap } from "@chakra-ui/react";
import SimpleSidebar from "../../components/adminSideBar/AdminSideBar";
import CreatePage from "../page/createPage";
import { useParams } from "react-router-dom";
const Create = () => {
  const { name } = useParams();
  return (
    <Wrap height="100dvh" dir={{ base: "column", "2xl": "row" }}>
      <SimpleSidebar />
      <Box
        bg="background"
        w={{ base: "full", "2xl": "85dvw" }}
        p={10}
        minH={"100dvh"}
        ml={"auto"}
      >
        <Heading mb={5} textTransform={"capitalize"}>
          Create {name.replaceAll("_", " ")}
        </Heading>
        <Flex h="85dvh" w={"100%"} justify={"center"} align={"center"}>
          <CreatePage />
        </Flex>
      </Box>
    </Wrap>
  );
};

export default Create;
