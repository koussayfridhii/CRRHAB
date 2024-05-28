import {
  Box,
  Card,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const ResearchThemes = ({ full = false }) => {
  const language = useSelector((state) => state.language.language);
  const themes = [
    {
      fr: "Recherche et développement de biopesticides et de biostimulants",
      en: "Research and development of biopesticides and biostimulants",
      ar: "البحث وتطوير المبيدات الحيوية والمحفزات البيولوجية",
    },
    {
      fr: "Amélioration des espèces horticoles pour une production durable",
      en: "Improvement of horticultural species for sustainable production",
      ar: "تحسين أصناف البستنة لإنتاج مستدام",
    },
    {
      fr: "Intégration des bonnes pratiques agricoles pour la durabilité des systèmes maraîchers",
      en: "Integration of good agricultural practices for the sustainability of vegetable systems",
      ar: "دمج الممارسات الزراعية الجيدة لاستدامة أنظمة الخضر",
    },
    {
      fr: "Gestion intégrée des bio-agresseurs (existants et émergents) associés aux espèces arboricoles",
      en: "Integrated management of bio-aggressors (existing and emerging) associated with tree species",
      ar: "الإدارة المتكاملة للمهاجمين الحيوية (الحالية والناشئة) المرتبطة بأنواع الأشجار",
    },
  ];
  return (
    <Box
      w={{ base: "full", "2xl": full ? "full" : "75%" }}
      bg={"background"}
      px={10}
      py={5}
      mx={"auto"}
      my={5}
      shadow={"lg"}
      dir={language === "ar" ? "rtl" : "ltr"}
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
          ? "RESEARCH THEMES"
          : language === "fr"
          ? "THÉMATIQUES DE RECHERCHES"
          : "مواضيع البحث"}
      </Heading>
      <Card py={3} px={5} mb={6}>
        <Text>
          {language === "en"
            ? `The research themes are as follows:`
            : language === "fr"
            ? `Les thématiques de recherches sont les suivantes :`
            : `مواضيع البحث كالتالي :`}
        </Text>
        <OrderedList mx={10} my={5}>
          {themes.map((theme) => {
            return (
              <ListItem mx={5} key={theme.fr}>
                {theme[language]}
              </ListItem>
            );
          })}
        </OrderedList>
      </Card>
    </Box>
  );
};

export default ResearchThemes;
