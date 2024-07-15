import {
  Box,
  Card,
  Divider,
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
      ar: "بحث وتطوير المبيدات والمنشطات الحيوية",
    },
    {
      fr: "Amélioration des espèces horticoles pour une production durable",
      en: "Improvement of horticultural species for sustainable production",
      ar: "تحسين الأنواع البستانية من أجل الإنتاج المستدام",
    },
    {
      fr: "Intégration des bonnes pratiques agricoles pour la durabilité des systèmes maraîchers",
      en: "Integration of good agricultural practices for the sustainability of vegetable systems",
      ar: "تكامل الممارسات الزراعية الجيدة من أجل استدامة أنظمة زراعة الخضر",
    },
    {
      fr: "Gestion intégrée des bio-agresseurs (existants et émergents) associés aux espèces arboricoles",
      en: "Integrated management of bio-aggressors (existing and emerging) associated with tree species",
      ar: "الإدارة المتكاملة للآفات (القائمة والوافدة) المرتبطة بالأنواع الشجرية",
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
      borderRadius={"lg"}
    >
      <Text textAlign="justify" color={"text"} fontSize="xl" my={10}>
        {language === "fr" ? (`Le laboratoire "Production et Protection pour une Horticulture Durable:
        2PHD (LR21AGR03) est associé à l'Université de Sousse. L’objectif
        stratégique du laboratoire est de développer un système de production
        intégré durable, voire biologique des espèces horticoles dominantes
        (essentiellement des espèces arboricoles et maraîchères) dans la région
        du Centre-Est de la Tunisie dans le respect de l’environnement, la santé
        de l’agriculteur et du consommateur par l’usage raisonné des intrants
        chimiques et des ressources naturelles et en s'adaptant aux changements
        climatiques.`) : language === "en" ? (`The “Production and Protection for Sustainable Horticulture” laboratory:
        2PHD (LR21AGR03) is associated with the University of Sousse. The objective
        strategic strategy of the laboratory is to develop a production system
        integrated sustainable, even organic, dominant horticultural species
        (mainly arboreal and market gardening species) in the region
        of Central-Eastern Tunisia in respect of the environment, health
        of the farmer and the consumer through the reasoned use of inputs
        chemicals and natural resources and adapting to changes
        climatic.`) : (`يرتبط مخبر البحث "إنتاج وحماية من أجل بستنة مستدامة":2PHD (LR21AGR03)  بجامعة سوسة.
الهدف الاستراتيجي لهذا المخبر هو تطوير نظم إنتاج مستدامة،عادية وعضوية، متكاملة للأنواع البستنية (خاصة الخضروات والاشجار المثمرة) السائدة في المنطقة الوسطى الشرقية من البلاد التونسية، في احترام للبيئة وصحة المنتج والمستهلك من خلال الاستخدام الرشيد للمدخلات الكيميائية والموارد الطبيعية والتكيف مع التغيرات المناخية.
`)}
      </Text>
      <Divider
        my={10}
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
      <Card
        py={3}
        px={5}
        mb={6}
        textAlign="justify"
        color={"text"}
        fontSize="xl"
      >
        <Text>
          {language === "en"
            ? `The research themes are as follows:`
            : language === "fr"
            ? `Les thématiques de recherches sont les suivantes :`
            : `يقوم المخبر بالعديد من الأنشطة البحثية في إطار المحاور التالية:`}
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
