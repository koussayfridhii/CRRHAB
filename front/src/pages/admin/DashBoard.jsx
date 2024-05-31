import React, { useState } from "react";
import { Box, Button, Heading, Wrap } from "@chakra-ui/react";
import SimpleSidebar from "../../components/adminSideBar/AdminSideBar";
// import ResearchTeam from "../researchStructures/ResearchTeam";
import { Link, useLocation } from "react-router-dom";
import dataAdminPages from "../../dataAdminPages";
import Table from "../../components/tables/tableV2/Table";

const DashBoard = () => {
  const [filtredData, setFiltredData] = useState([]);
  const { pathname } = useLocation();
  const pageName = pathname.replace("/admin/", "").replaceAll("_", " ");
  const pageData = dataAdminPages.find(
    (e) => e.name === pathname.replace("/admin/", "") || true
  );
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
    },
  ];
  return (
    <Wrap height="100dvh" dir={{ base: "column", "2xl": "row" }}>
      <SimpleSidebar />
      <Box
        bg="background"
        w={{ base: "full", "2xl": "85dvw" }}
        p={10}
        minH={"100dvh"}
        ml={"auto"}
      >
        <Heading mb={5} textTransform={"capitalize"}>
          {pageName}
        </Heading>
        <Button
          as={Link}
          mb={5}
          ml={"95%"}
          to={`/admin/create/${pathname.replace("/admin/", "")}`}
        >
          Add
        </Button>
        <Table data={data} headers={pageData.dataHeaders} />
      </Box>
    </Wrap>
  );
};

export default DashBoard;
