import { Box, Divider, Heading, useColorMode } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Missions from "./Missions";
import History from "./History";
import ScientificOrganization from "./ScientificOrganization";
const Presentation = () => {
  const { colorMode } = useColorMode();
  const language = useSelector((state) => state.language.language);
  return (
    <Box
      w={{ base: "full", xl: "90%", "2xl": "80%" }}
      bg="background"
      mx="auto"
      my={10}
      borderRadius="lg"
      minH="100dvh"
      py={10}
      px={{ base: 0, xl: 10 }}
      boxShadow="lg"
    >
      <Box w="full">
        <Missions />
      </Box>
      <Divider
        my={5}
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
        // borderWidth={1}
        w={"90%"}
        mx={"auto"}
        borderColor={"primary"}
      />
      <Box w="full">
        <History />
      </Box>
      <Divider
        my={5}
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
        // borderWidth={1}
        w={"90%"}
        mx={"auto"}
        borderColor={"primary"}
      />
      <Box w="full">
        <ScientificOrganization />
      </Box>
    </Box>
  );
};

export default Presentation;
