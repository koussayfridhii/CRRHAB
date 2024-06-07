import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const NationalProjects = () => {
  const language = useSelector((state) => state.language.language);
  const data = [
    {
      title: {
        en: "Integrated and sustainable management of protected vegetable crop systems (CLéProD)/PRM IRESA",
        fr: "Gestion intégrée et durable des systèmes de cultures légumières protégées (CLéProD)/PRM IRESA",
        ar: "الإدارة المتكاملة والمستدامة لنظم محاصيل الخضروات المحمية (CLéProD)/PRM IRESA",
      },
      cordinator: {
        en: "Asma Laarif",
        fr: "Asma Laarif",
        ar: "أسماء العريف",
      },
      duration: "2015-2018",
    },
    {
      title: {
        en: "Valorization of bacterial bio-inoculants for improving the health and productivity of vegetable crops (conventional and organic farming systems) and for preserving the fertility of soils in the Central-East of Tunisia (LegBioFert-CE )",
        fr: "Valorisation de bio-inoculants bactériens pour l'amélioration de la santé et de la productivité des cultures maraîchères (systèmes agricoles conventionnels et biologiques) et pour la préservation de la fertilité des sols dans le Centre-Est de la Tunisie (LegBioFert-CE)",
        ar: "تثمين الملقحات الحيوية البكتيرية لتحسين صحة وإنتاجية محاصيل الخضروات (نظم الزراعة التقليدية والعضوية) وللحفاظ على خصوبة التربة في وسط شرق تونس (LegBioFert-CE)",
      },
      cordinator: {
        en: "Rania Aydi Ben Abdallah",
        fr: "Rania Aydi Ben Abdallah",
        ar: "رانيا عايدي بن عبد اللٌه",
      },
      duration: "2023-2025",
    },
  ];
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
          ? "National  Projects"
          : language === "fr"
          ? "Projets Nationaux "
          : "المشاريع الوطنية"}
      </Heading>
      <DataTable data={data} language={language} />
    </Box>
  );
};
const DataTable = ({ data, language }) => {
  const getText = (item, language) => item[language] || item.en || "";
  const { colorMode } = useColorMode();
  return (
    <TableContainer>
      <Table
        variant="striped"
        colorScheme={colorMode === "light" ? "green" : "blue"}
        // Ensure table does not overflow the container
        width="100%"
        overflowX="auto"
      >
        <Thead bg={"primary"} _dark={{ bg: "secondary" }}>
          <Tr>
            <Th color={"white"}>
              {language === "en"
                ? "National Projects"
                : language === "fr"
                ? "Projets Nationaux"
                : "المشاريع الوطنية"}
            </Th>
            <Th color={"white"}>
              {language === "en"
                ? "Coordinator"
                : language === "fr"
                ? "Coordinateur"
                : "المنسق"}
            </Th>
            <Th color={"white"}>
              {language === "en"
                ? "Duration"
                : language === "fr"
                ? "Durée"
                : "المدة"}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td
                display="flex"
                alignItems="center"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="normal"
                maxW="auto"
              >
                {getText(row.title, language)}
              </Td>
              <Td>{getText(row.cordinator, language)}</Td>
              <Td>{row.duration}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default NationalProjects;
