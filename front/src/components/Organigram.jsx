import React from "react";
import {
  Box,
  chakra,
  Container,
  HStack,
  Flex,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer"; // Importez useInView

// Array containing administrative organization roles with translations and colors
const administrativeOrganization = [
  {
    id: 2,
    title: {
      fr: "Conseil d’administration", // French translation
      en: "Administration council", // English translation
      ar: "مجلس الإدارة", // Arabic translation
    },
    color: "#4F81BD", // Color associated with this role
  },
  {
    id: 3,
    title: {
      fr: "Secrétaire Principal", // French translation
      en: "Principal Secretary", // English translation
      ar: "الكاتب الأول", // Arabic translation
    },
    color: "#C0504D", // Color associated with this role
  },
  {
    id: 4,
    title: {
      fr: "Secrétaire d’établissement", // French translation
      en: "School Secretary", // English translation
      ar: "كاتب المؤسسة", // Arabic translation
    },
    color: "#8064A2", // Color associated with this role
  },
];

const scientificOrganization = [
  {
    id: 6,
    title: {
      fr: "Conseil scientifique", // French translation
      en: "Scientific Council", // English translation
      ar: "المجلس العلمي", // Arabic translation
    },
    color: "#9BBB59", // Color associated with this role
  },
  {
    id: 7,
    title: {
      fr: "Structures de la Recherche", // French translation
      en: "Research Structures", // English translation
      ar: "مخابر ووحدات البحث", // Arabic translation
    },
    color: "#4F81BD", // Color associated with this role
  },
  {
    id: 8,
    title: {
      fr: "Unités d’expérimentation agricole", // French translation
      en: "Agricultural Experimentation Units", // English translation
      ar: "وحدات التجارب الزراعية", // Arabic translation
    },
    color: "#C0504D", // Color associated with this role
  },
  {
    id: 9,
    title: {
      fr: "Unité de valorisation des résultats de la recherche", // French translation
      en: "Research Results Valorization Unit", // English translation
      ar: "وحدة تثمين نتائج البحث", // Arabic translation
    },
    color: "#8064A2", // Color associated with this role
  },
  {
    id: 10,
    title: {
      fr: "Unité d’information et de documentation scientifique", // French translation
      en: "Scientific Information and Documentation Unit", // English translation
      ar: "وحدة الإعلام والتوثيق العلمي", // Arabic translation
    },
    color: "#F79646", // Color associated with this role
  },
];

const Milestones = () => {
  const language = useSelector((state) => state.language.language);
  const [ref1, inView1] = useInView(); // Utilisez useInView pour détecter la visibilité
  const [ref2, inView2] = useInView(); // Utilisez useInView pour détecter la visibilité
  const directeur = {
    id: 1,
    title: {
      fr: "Directeur Général", // French translation
      en: "Director General", // English translation
      ar: "مدير المركز", // Arabic translation
    },
    color: "#9BBB59", // Color associated with this role
  };
  return (
    <SimpleGrid columns={1}>
      <HStack
        px={{ base: 3, sm: 3 }}
        py={3}
        bg={useColorModeValue("primary", "gray.800")}
        _dark={{ bg: "secondary" }}
        color="white"
        spacing={5}
        rounded="lg"
        alignItems="center"
        w={"35%"}
        mx={"auto"}
        my={5}
        shadow="lg"
        justify="center"
      >
        <Flex justify="center">
          <chakra.h1
            _hover={{ color: "whiteHover" }}
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
            textAlign="center"
          >
            {directeur?.title?.[language]}
          </chakra.h1>
        </Flex>
      </HStack>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <Container maxWidth="4xl" p={{ base: 2, sm: 10 }} ref={ref1}>
          {/* <chakra.h3
            fontSize="4xl"
            fontWeight="bold"
            mb={20}
            textAlign="start"
            whiteSpace={{ base: "wrap", "2xl": "nowrap" }}
          >
            {language === "en"
              ? "ADMINISTRATIVE ORGANIZATION"
              : language === "fr"
              ? "ORGANISATION ADMINISTRATIVE"
              : "التنظيم الإداري"}
          </chakra.h3> */}
          {administrativeOrganization.map((milestone, index) => (
            <Flex key={index} mb="10px">
              <LineWithDot />
              <Card {...milestone} language={language} />
            </Flex>
          ))}
        </Container>
        <Container maxWidth="4xl" p={{ base: 2, sm: 10 }} ref={ref2}>
          {/* <chakra.h3
            fontSize="4xl"
            fontWeight="bold"
            mb={20}
            textAlign="center"
          >
            {language === "en"
              ? "SCIENTIFIC ORGANIZATION"
              : language === "fr"
              ? "ORGANISATION SCIENTIFIQUE"
              : "التنظيم العلمي"}
          </chakra.h3> */}
          {scientificOrganization.map((milestone, index) => (
            <Flex key={index} mb="10px">
              <LineWithDot />
              <Card {...milestone} language={language} />
            </Flex>
          ))}
        </Container>
      </SimpleGrid>
    </SimpleGrid>
  );
};

const Card = ({ title, language }) => {
  return (
    <HStack
      px={{ base: 3, sm: 5 }}
      py={3}
      bg={useColorModeValue("primary", "gray.800")}
      _dark={{ bg: "secondary" }}
      color="white"
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: "15px 15px 15px 0",
        position: "absolute",
        left: "-15px",
        display: "block",
      }}
      mb={5}
      shadow="lg"
      w="full"
      // textAlign="center"
    >
      <Box>
        <chakra.h1
          _hover={{ color: "whiteHover" }}
          fontSize="2xl"
          lineHeight={1.2}
          fontWeight="bold"
          w="100%"
        >
          {title?.[language]}
        </chakra.h1>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={language === "ar" ? "0px" : "40px"}
      ml={language !== "ar" ? "0px" : "40px"}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid rgb(4, 180, 180)"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export default Milestones;
