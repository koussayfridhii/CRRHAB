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
      <Box>
        <Heading
          _dark={{
            bg: "secondary",
          }}
          fontSize={"xxl"}
          fontFamily={"body"}
          color={"white"}
          bg={"primary"}
          px={5}
          py={2}
          fontWeight={400}
          borderRadius={"lg"}
          mb={6}
        >
          {language === "en" ? "Map" : language === "fr" ? "Carte" : "الخريطة "}
        </Heading>
        <iframe
          className={`map ${colorMode}`}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12924.22053312735!2d10.5691836!3d35.9211505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8976a1b8bb2b%3A0x84edc6b09bdae964!2sCentre%20R%C3%A9gional%20des%20Recherches%20en%20Horticulture%20et%20Agriculture%20Biologique!5e0!3m2!1sfr!2stn!4v1717759134911!5m2!1sfr!2stn"
          width={"100%"}
          height={550}
          style={{
            //   border: "2px solid #0FA239",
            borderRadius: "10px",
            margin: "0 auto",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
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
