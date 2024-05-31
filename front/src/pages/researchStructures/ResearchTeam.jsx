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
  const data = [
    {
      name: {
        fr: "BETTAIEB Taoufik",
        ar: "توفيق بالطيبي",
        en: "BETTAIEB Taoufik",
      },
      email: "tbettaieb@yahoo.fr",
      orcid: "0000-0002-0053-848X",
      cv: "./assets/cv/CV Taoufik BETTAIEB.pdf",
      speciality: {
        fr: "Sciences Horticoles",
        ar: "علوم البستنة",
        en: "Sciences Horticoles",
      },
    },
    {
      name: {
        fr: "DAAMI-remadi Majda",
        ar: "مجدى دعامي-رمادي",
        en: "DAAMI-remadi Majda",
      },
      email: "mejda.daami@gmail.com",
      orcid: "0000-0003-2239-5624",
      cv: "./assets/cv/CV-Daami-Remadi.pdf",
      speciality: {
        fr: "Phytomycologie",
        ar: "علم الفطريات النباتية",
        en: "Phytomycologie",
      },
    },
    {
      name: {
        fr: "BRAHAM Mohamed",
        ar: "محمد براهم",
        en: "BRAHAM Mohamed",
      },
      email: "braham.mohamed@gmail.com",
      orcid: "0000-0003-3913-5175",
      cv: "./assets/cv/CV  Mohamed BRAHAM.pdf",
      speciality: {
        fr: "Entomologie",
        ar: "علم الحشرات",
        en: "Entomologie",
      },
    },
    {
      name: {
        fr: "LAARIF Asma",
        ar: "أسماء العريف",
        en: "LAARIF Asma",
      },
      email: "laarif.asma@iresa.agrinet.tn",
      orcid: "0000-0003-2792-9904",
      cv: "./assets/cv/CV Asma laarif.pdf",
      speciality: {
        fr: "Entomologie",
        ar: "علم الحشرات",
        en: "Entomologie",
      },
    },
    {
      name: {
        fr: "CHAIEB Ikbal",
        ar: "اقبال الشايب",
        en: "CHAIEB Ikbal",
      },
      email: "ikbal_c@yahoo.fr",
      orcid: "0000-0002-7556-7197",
      cv: "./assets/cv/CV Ikbal Chaieb.pdf",
      speciality: {
        fr: "Entomologie",
        ar: "علم الحشرات",
        en: "Entomologie",
      },
    },
    {
      name: {
        fr: "DBARA Soumaya",
        ar: "سمية دبارة",
        en: "DBARA Soumaya",
      },
      email: "soumayadbara@yahoo.fr",
      orcid: "0000-0002-0095-9604",
      cv: "./assets/cv/CV Dbara Soumaya.pdf",
      speciality: {
        fr: "Horticulture",
        ar: "البستنة",
        en: "Horticulture",
      },
    },
    {
      name: {
        fr: "HATTAB Sabrine",
        ar: "سابرين حطاب",
        en: "HATTAB Sabrine",
      },
      email: "sabrine_hattab1@yahoo.fr",
      orcid: "0000-0003-1180-5253",
      cv: "./assets/cv/CV Hattab Sabrine.pdf",
      speciality: {
        fr: "Sciences du sol",
        ar: "علوم التربة",
        en: "Sciences du sol",
      },
    },
    {
      name: {
        fr: "ELBAZ Mounira",
        ar: "منيرة الباز",
        en: "ELBAZ Mounira",
      },
      email: "mounira_elbaz@yahoo.com",
      orcid: "0000-0001-9993-6260",
      cv: "",
      speciality: {
        fr: "Sélection et amélioration des plantes",
        ar: "اختيار وتحسين النباتات",
        en: "Sélection et amélioration des plantes",
      },
    },
    {
      name: {
        fr: "CHIKH ROUHOU Hela",
        ar: "حلة شيخ روحو",
        en: "CHIKH ROUHOU Hela",
      },
      email: "hela.chikh.rouhou@gmail.com",
      orcid: "0000-0003-3631-5680",
      cv: "./assets/cv/CV Hela ChikhRouhou.pdf",
      speciality: {
        fr: "Cultures maraîchères",
        ar: "زراعة الخضروات",
        en: "Cultures maraîchères",
      },
    },
    {
      name: {
        fr: "MANSOUR Mohsen",
        ar: "محسن منصور",
        en: "MANSOUR Mohsen",
      },
      email: "mansourmohsen@gmail.com",
      orcid: "0000-0002-7526-4540",
      cv: "./assets/cv/CV-Mohsen Mansour .pdf",
      speciality: {
        fr: "Bioclimatologie",
        ar: "البيوكلماتولوجيا",
        en: "Bioclimatologie",
      },
    },
    {
      name: {
        fr: "BAYOUDH Chokri",
        ar: "شكري بايوض",
        en: "BAYOUDH Chokri",
      },
      email: "chokribayoudh@gmail.com",
      orcid: "0000-0002-7531-2979",
      cv: "./assets/cv/CV  Chokri Bayoudh.pdf",
      speciality: {
        fr: "Biotechnologie végétale",
        ar: "التكنولوجيا الحيوية النباتية",
        en: "Biotechnologie végétale",
      },
    },
    {
      name: {
        fr: "JABNOUN-KHIAREDDINE Hayfa",
        ar: "هيفاء جابنون-خيرالدين",
        en: "JABNOUN-KHIAREDDINE Hayfa",
      },
      email: "jkhayfa@yahoo.fr",
      orcid: "0000-0002-0849-3167",
      cv: "./assets/cv/CV Hayfa Jabnoun-Khiareddine.pdf",
      speciality: {
        fr: "Phytomycologie",
        ar: "علم الفطريات النباتية",
        en: "Phytomycologie",
      },
    },
    {
      name: {
        fr: "JEDER Houcine",
        ar: "حسين جيدر",
        en: "JEDER Houcine",
      },
      email: "djederhoucine@yahoo.fr",
      orcid: "0000-0003-1953-8209",
      cv: "./assets/cv/CV_Houcine Jeder.pdf",
      speciality: {
        fr: "Economie Agricole",
        ar: "الاقتصاد الزراعي",
        en: "Economie Agricole",
      },
    },
    {
      name: {
        fr: "AYDI BEN ABDALLAH Rania",
        ar: "رانية عايضي بن عبد الله",
        en: "AYDI BEN ABDALLAH Rania",
      },
      email: "raniaaydi@yahoo.fr",
      orcid: "0000-0001-7875-4652",
      cv: "./assets/cv/CV AYDI-ABDALLAH Rania.pdf",
      speciality: {
        fr: "Microbiologie du sol",
        ar: "علم الجراثيم التربوية",
        en: "Microbiologie du sol",
      },
    },
    {
      name: {
        fr: "CHAIEB Nadia",
        ar: "نادية الشايب",
        en: "CHAIEB Nadia",
      },
      email: "chaiebnadiat@yahoo.fr",
      orcid: "0000-0002-9497-8346",
      cv: "./assets/cv/CV NADIA Chaieb.pdf",
      speciality: {
        fr: "Agriculture de Conservation",
        ar: "زراعة المحافظة",
        en: "Agriculture de Conservation",
      },
    },
    {
      name: {
        fr: "TRAD Mehdi",
        ar: "مهدي التراد",
        en: "TRAD Mehdi",
      },
      email: "mh.trad@yahoo.com",
      orcid: "0000-0003-4887-5212",
      cv: "./assets/cv/CV Mehdi Trad.pdf",
      speciality: {
        fr: "Qualité et Physiologie Post-récolte des Fruits",
        ar: "جودة وفسيولوجيا ما بعد الحصاد للفواكه",
        en: "Qualité et Physiologie Post-récolte des Fruits",
      },
    },
    {
      name: {
        fr: "LACHKAR Amel",
        ar: "آمال لشكر",
        en: "LACHKAR Amel",
      },
      email: "amel.lachkar@yahoo.com",
      orcid: "amelchet00@gmail.com",
      cv: "./assets/cv/CV Amel Lachkar.pdf",
      speciality: {
        fr: "Arboriculture Fruitière",
        ar: "زراعة الفواكه",
        en: "Arboriculture Fruitière",
      },
    },
    {
      name: {
        fr: "BEN AISSA Imed",
        ar: "عماد بن عيسى",
        en: "BEN AISSA Imed",
      },
      email: "imedsam@gmail.com",
      orcid: "0000-0002-8990-7746",
      cv: "./assets/cv/CV Imed Ben AISSA.pdf",
      speciality: {
        fr: "Irrigation agricole",
        ar: "الري الزراعي",
        en: "Irrigation agricole",
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
    cv: {
      fr: "CV",
      en: "CV",
      ar: "CV",
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
