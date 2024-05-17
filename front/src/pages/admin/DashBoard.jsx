import React from "react";
import { Box, Heading, Wrap } from "@chakra-ui/react";
import SimpleSidebar from "../../components/adminSideBar/AdminSideBar";
import ResearchTeam from "../researchStructures/ResearchTeam";

const DashBoard = () => {
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
        <Heading mb={5}>DashBoard</Heading>
        <ResearchTeam statsHeader={false} add={true} />
      </Box>
    </Wrap>
  );
};

export default DashBoard;
