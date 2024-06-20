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
      boxShadow="lg"
    >
      <Box w="full">
        <ScientificOrganization />
      </Box>
    </Box>
  );
};

export default Presentation;
