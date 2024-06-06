import React, { useEffect, useState } from "react";
import Table from "../../components/tables/tableV1/Table";
import { Box, Button, Heading, chakra } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import StatsV1 from "../../components/stats/statsV1/Stats";
import AutoComplete from "../../components/AutoComplete";
import { Link } from "react-router-dom";
import { useCallApi } from "../../hooks/useCallApi";
import Spinner from "../../components/spinner/Spinner";
const ResearchTeam = ({ add = false }) => {
  const language = useSelector((state) => state.language.language);
  const [filtredData, setFiltredData] = useState([]);
  const { data, error, isLoading } = useCallApi("research_team");
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
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
    return <div>Error fetching data: {error.message}</div>;
  }
  useEffect(() => {
    filtredData.length < 1 && setFiltredData([...data]);
    console.log(data);
  }, []);
  return (
    <Box
      w={{ base: "full", xl: "80dvw" }}
      bg={"background"}
      mx={"auto"}
      my={10}
      py={50}
      px={10}
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
          ? "Research Network"
          : language === "fr"
          ? "Réseau Chercheurs"
          : "شبكة الباحثين"}
      </Heading>
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
