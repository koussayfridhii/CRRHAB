import { Flex, Text, Heading, Box, Highlight } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const SpecializedUnits = () => {
  const language = useSelector((state) => state.language.language);
  const data = {
    ar: `
    وحدة تثمين نتائج البحث مكلفة بتثمين مكتسبات البحث وإقامة شراكة علمية وتكنولوجية مع
    الهيئات الاقتصادية في مجالات نشاط المركز
    `,
    fr: `
      Une unité de valorisation des résultats de recherche chargée de la valorisation des
      acquis de la recherche et de l’institution d’un partenariat scientifique et technologique avec les
      organismes économiques dans les domaines d’activité du centre
    `,
    en: `
      A research results valorization unit responsible for the valorization of research achievements
      and the establishment of a scientific and technological partnership with economic organizations
      in the center's fields of activity
    `,
  };

  return (
    <>
      <Box
        w={{ base: "full", "2xl": "80vw" }}
        bg="background"
        shadow={"lg"}
        minH={"50dvh"}
        mx={"auto"}
        my={"5dvh"}
        dir={language === "ar" ? "rtl" : "ltr"}
        p={20}
      >
        <Flex
          justify={"start"}
          align={"center"}
          py={3}
          px={10}
          bg="primary"
          _dark={{ bg: "secondary" }}
          borderRadius={10}
        >
          <Heading
            color={"white"}
            _dark={{ color: "#fff" }}
            fontSize={"xxl"}
            mb={0}
          >
            {language === "en"
              ? "Specialized Units"
              : language === "fr"
              ? "Unités Spécialisées"
              : "وحدات مختصة"}
          </Heading>
        </Flex>
        <Flex
          justify={"start"}
          align={"center"}
          direction="column"
          py={7}
          mt={2}
          px={10}
          gap={10}
        >
          {data[language].split("/n").map((text, i) => {
            return (
              <Text textAlign="justify" color={"text"} fontSize="xl" mb={2}>
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "white",
                    bg: "primary",
                    px: "2",
                    py: "1",
                    rounded: "full",
                    fontWeight: "bold",
                  }}
                >
                  {text}
                </Highlight>
              </Text>
            );
          })}
        </Flex>
      </Box>
    </>
  );
};

export default SpecializedUnits;
