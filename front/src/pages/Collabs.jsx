import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Collabs = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <Box dir={language === "ar" ? "rtl" : "ltr"}>
      <Box
        minH={"25dvh"}
        bg={"background"}
        borderRadius={"lg"}
        boxShadow={"lg"}
        w={{ base: "full", xl: "90dvw", "2xl": "80dvw" }}
        mx={"auto"}
        my={10}
      >
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
          {language === "en"
            ? "National and InterNational Collaborations"
            : language === "fr"
            ? "Collaborations Nationaux et InterNationaux"
            : "التعاونات الوطنية و الدولية"}
        </Heading>
      </Box>
    </Box>
  );
};

export default Collabs;
