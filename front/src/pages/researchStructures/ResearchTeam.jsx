import React, { useEffect, useState } from "react";
import Table from "../../components/tables/tableV1/Table";
import { Box, Button, chakra } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import StatsV1 from "../../components/stats/statsV1/Stats";
import AutoComplete from "../../components/AutoComplete";
import { Link } from "react-router-dom";
const ResearchTeam = ({ add = false, statsHeader = true }) => {
  const language = useSelector((state) => state.language.language);
  const [filtredData, setFiltredData] = useState([]);
  // Define an array of faculty data with information in multiple languages
  const data = [
    {
      grade: {
        fr: "Prof",
        ar: "أستاذ",
        en: "Prof",
      },
      name: {
        fr: "DAAMI-remadi Majda",
        ar: "مجدة دامي رمادي",
        en: "DAAMI-remadi Majda",
      },
      email: "mejda.daami@gmail.com",
      orcid: "0000-0003-2239-5624",
      speciality: {
        fr: "Biologie",
        ar: "علم الأحياء",
        en: "Biology",
      },
    },
    {
      grade: {
        fr: "Prof",
        ar: "أستاذ",
        en: "Prof",
      },
      name: {
        fr: "BRAHAM Mohamed",
        ar: "محمد ابراهيم",
        en: "BRAHAM Mohamed",
      },
      email: "braham.mohamed@gmail.com",
      orcid: "0000-0003-3913-5175",
      speciality: {
        fr: "Agriculture",
        ar: "الزراعة",
        en: "Agriculture",
      },
    },
    {
      grade: {
        fr: "Prof",
        ar: "أستاذ",
        en: "Prof",
      },
      name: {
        fr: "LAARIF Asma",
        ar: "أسماء العارف",
        en: "LAARIF Asma",
      },
      email: "laarif.asma@iresa.agrinet.tn",
      orcid: "0000-0003-2792-9904",
      speciality: {
        fr: "Horticulture",
        ar: "البستنة",
        en: "Horticulture",
      },
    },
    {
      grade: {
        fr: "MCs",
        ar: "ماجستير",
        en: "MCs",
      },
      name: {
        fr: "CHAIEB Ikbal",
        ar: "اقبال شايب",
        en: "CHAIEB Ikbal",
      },
      email: "ikbal_c@yahoo.fr",
      orcid: "0000-0002-7556-7197",
      speciality: {
        fr: "Agronomy",
        ar: "الزراعة",
        en: "Agronomy",
      },
    },
    {
      grade: {
        fr: "MA",
        ar: "ماجستير",
        en: "MA",
      },
      name: {
        fr: "ELBAZ Mounira",
        ar: "منيرة الباز",
        en: "ELBAZ Mounira",
      },
      email: "mounira_elbaz@yahoo.com",
      orcid: "0000-0001-9993-6260",
      speciality: {
        fr: "Genetics",
        ar: "الوراثة",
        en: "Genetics",
      },
    },
    {
      grade: {
        fr: "MA",
        ar: "ماجستير",
        en: "MA",
      },
      name: {
        fr: "CHIKH ROUHOU Hela",
        ar: "هالة شيخ روحو",
        en: "CHIKH ROUHOU Hela",
      },
      email: "hela.chikh.rouhou@gmail.com",
      orcid: "0000-0003-3631-5680",
      speciality: {
        fr: "Agricultural Economics",
        ar: "الاقتصاد الزراعي",
        en: "Agricultural Economics",
      },
    },
    {
      grade: {
        fr: "MA",
        ar: "ماجستير",
        en: "MA",
      },
      name: {
        fr: "MENSI Imène",
        ar: "ايمن المنسي",
        en: "MENSI Imène",
      },
      email: "mensimen@hotmail.fr",
      orcid: "0000-0002-8604-0569",
      speciality: {
        fr: "Plant Physiology",
        ar: "فسيولوجيا النبات",
        en: "Plant Physiology",
      },
    },
    {
      grade: {
        fr: "Assis.",
        ar: "مساعد",
        en: "Assist.",
      },
      name: {
        fr: "BEN AÏSSA Imed",
        ar: "عمر بن عيسى",
        en: "BEN AÏSSA Imed",
      },
      email: "imedsam@gmail.com",
      orcid: "0000-0002-8990-7746",
      speciality: {
        fr: "Biotechnology",
        ar: "التقانة الحيوية",
        en: "Biotechnology",
      },
    },
  ];
  const headers = {
    name: {
      fr: "nom",
      en: "name",
      ar: "الاسم",
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
    grade: {
      fr: "grade",
      en: "grade",
      ar: "المرحلة",
    },
    speciality: {
      fr: "Spécialité",
      en: "Specialty",
      ar: "التخصص",
    },
  };
  useEffect(() => {
    filtredData.length < 1 && setFiltredData([...data]);
  }, []);
  return (
    <Box py={50}>
      {statsHeader && (
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: 4,
            lg: 8,
          }}
          mb={5}
        >
          <Box textAlign="center">
            <chakra.h2
              mt={2}
              fontSize={{
                base: "3xl",
                sm: "4xl",
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              textTransform={"capitalize"}
              color="text"
              _dark={{
                color: "white",
              }}
            >
              {language === "en"
                ? "See How We're Making a Difference!!"
                : language === "ar"
                ? "!!انظر كيف نحدث فرقًا"
                : "Découvrez comment nous faisons la différence!!"}
            </chakra.h2>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{
                lg: "auto",
              }}
              color="textSecondary"
            >
              {language === "en"
                ? " Embark on a journey of transformative impact and discover how we are making a tangible difference in the world."
                : language === "ar"
                ? ".انطلق في رحلة ذات تأثير تحويلي واكتشف كيف نحدث فرقًا ملموسًا في العالم"
                : "Embarquez pour un voyage à impact transformateur et découvrez comment nous faisons une différence tangible dans le monde."}
            </chakra.p>
          </Box>
        </Box>
      )}
      <StatsV1 header={false} />
      {add && (
        <Button as={Link} mb={5} ml={"95%"} to="/admin/create/research_Team">
          Add
        </Button>
      )}
      <AutoComplete
        options={data}
        language={language}
        setFiltredData={setFiltredData}
      />
      <Table data={filtredData} headers={headers} language={language} />
    </Box>
  );
};

export default ResearchTeam;
