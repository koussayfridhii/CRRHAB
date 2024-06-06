import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
const LaboExecutiveMembers = ({ add = false }) => {
  const language = useSelector((state) => state.language.language);
  const execData = [
    {
      name: {
        fr: "Mougou Atef",
        ar: "عاطف موقو",
        en: "Mougou Atef",
      },
      email: "atef.mougou@yahoo.fr",
      qualite: {
        fr: "Ingénieur en chef  ",
        en: "",
        ar: "",
      },
      affiliation: "CRRHAB",
    },
  ];
  const researchData = [
    {
      grade: {
        fr: "Professeur",
        en: "",
        ar: "",
      },
      name: {
        fr: "DAAMI-REMADI Mejda",
        ar: "ماجدة دعامي-رمادي",
        en: "DAAMI-REMADI Mejda",
      },
      email: "mejda.daami@gmail.com",
      orcid: "0000-0003-2239-5624",
      affiliation: "CRRHAB",
    },
  ];
  const execHeaders = {
    name: {
      fr: "Nom et prénom",
      en: "fullname",
      ar: "الاسم الكامل",
    },
    email: {
      fr: "email",
      en: "email",
      ar: "البريد الالكتروني",
    },
    qualite: {
      fr: "Qualité",
      en: "Quality",
      ar: "",
    },
    affiliation: {
      fr: "établissement",
      en: "establishment",
      ar: "المؤسسة",
    },
  };
  const researchHeaders = {
    grade: {
      fr: "grade",
      en: "grade",
      ar: "المرحلة",
    },
    name: {
      fr: "Nom et prénom",
      en: "fullname",
      ar: "الاسم الكامل",
    },
    email: {
      fr: "email",
      en: "email",
      ar: "البريد الالكتروني",
    },
    orcid: {
      fr: "orcid",
      en: "orcid",
      ar: "orcid",
    },
    affiliation: {
      fr: "établissement d’affiliation",
      en: "affiliation establishment",
      ar: "مؤسسة الانتماء",
    },
  };

  return (
    <Box
      w={{ base: "full", xl: "95dvw", "2xl": "80dvw" }}
      bg={"background"}
      mx={"auto"}
      my={10}
      py={50}
      px={10}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Heading
        _dark={{
          color: "secondary",
        }}
        fontSize={"xxl"}
        fontFamily={"body"}
        color={"primary"}
        px={5}
        py={2}
        fontWeight={"bold"}
        borderRadius={"lg"}
        mb={6}
      >
        {language === "en"
          ? "Laboratory Research Members"
          : language === "fr"
          ? "Chercheurs Membres du Laboratoire"
          : "شبكة الباحثين"}
      </Heading>
      <ResearchTable
        data={researchData}
        headers={researchHeaders}
        language={language}
      />
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
      <Heading
        _dark={{
          color: "secondary",
        }}
        fontSize={"xxl"}
        fontFamily={"body"}
        color={"primary"}
        px={5}
        py={2}
        fontWeight={"bold"}
        borderRadius={"lg"}
        mb={6}
      >
        {language === "en"
          ? "Laboratory Technical Staff"
          : language === "fr"
          ? "Cadres Techniques Membres du Laboratoire"
          : "أعضاء الكادر الفني في المختبر"}
      </Heading>
      <ExecTable data={execData} headers={execHeaders} language={language} />
    </Box>
  );
};

function ExecTable({ data, headers, language = "fr" }) {
  // Définir les couleurs selon le mode de couleur
  const dataColor = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("background", "gray.700");

  return (
    <Flex
      w="full"
      bg="background"
      p={50}
      alignItems="center"
      justifyContent="center"
      _dark={{ bg: "background" }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: "primaryHover" }}
        shadow="lg"
        borderRadius={"lg"}
        p={3}
        _dark={{ bg: "secondary" }}
      >
        {data.map((element, index) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg={dataColor}
              key={index}
              borderRadius={"xl"}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 4 }}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={bg2}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                fontWeight="hairline"
                borderRadius={"xl"}
              >
                <chakra.span>{headers.qualite[language]}</chakra.span>
                <chakra.span>{headers.name[language]}</chakra.span>
                <chakra.span>{headers.email[language]}</chakra.span>
                <chakra.span>{headers.affiliation[language]}</chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 4 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <chakra.span>{element.qualite[language]}</chakra.span>
                <chakra.span>{element.name[language]}</chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {element.email}
                </chakra.span>
                <chakra.span>{element.affiliation}</chakra.span>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}
function ResearchTable({ data, headers, language = "fr" }) {
  const dataColor = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("background", "gray.700");

  return (
    <Flex
      w="full"
      bg="background"
      p={50}
      alignItems="center"
      justifyContent="center"
      _dark={{ bg: "background" }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: "primaryHover" }}
        shadow="lg"
        borderRadius={"lg"}
        p={3}
        _dark={{ bg: "secondary" }}
      >
        {data.map((element, index) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg={dataColor}
              key={index}
              borderRadius={"xl"}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 5 }}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={bg2}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                fontWeight="hairline"
                borderRadius={"xl"}
              >
                <chakra.span>{headers.grade[language]}</chakra.span>
                <chakra.span>{headers.name[language]}</chakra.span>
                <chakra.span>{headers.email[language]}</chakra.span>
                <chakra.span>{headers.orcid[language]}</chakra.span>
                <chakra.span>{headers.affiliation[language]}</chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 5 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <chakra.span>{element.grade[language]}</chakra.span>
                <chakra.span>{element.name[language]}</chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {element.email}
                </chakra.span>
                <Flex>
                  <chakra.a
                    href={`https://orcid.org/${element.orcid}`}
                    target="_blank"
                    color="primary"
                  >
                    {element.orcid}
                  </chakra.a>
                </Flex>
                <chakra.span>{element.affiliation}</chakra.span>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}
export default LaboExecutiveMembers;
