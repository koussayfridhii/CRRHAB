import React from "react";
import NewsCarrousel from "../../components/NewsCarrousel";
import SideBar from "../../components/sideBar/SideBar";
import { useSelector } from "react-redux";
import Content from "../Content/Content";
import {
  Divider,
  chakra,
  Grid,
  GridItem,
  Heading,
  Box,
} from "@chakra-ui/react";
import Contact from "../../components/Contact";
import "./Landing.scss";
import PartnersSlider from "../../components/PartnenrsSlider";
import LienUtilsSlider from "../../components/UtilLinks";
import UsefulLinks from "../../components/UtilLinks";
const Landing = () => {
  const language = useSelector((state) => state.language.language);
  const data = [
    {
      title: {
        fr: "iGUESSmed",
        en: "iGUESSmed",
        ar: "iGUESSmed",
      },
      description: {
        fr: "",
        en: "iGUESSmed is a PRIMA (Partnership for Research and Innovation in the Mediterranean Area) project, relates to the Call: Section 1 – Farming Systems 2019 and belongs to the IA – Topic 1.2.2: “Sustainability and competitiveness of Mediterranean greenhouse and intensive horticulture”",
        ar: "",
      },
      link: "https://www.iguessmed.com/",
      img: "./assets/images/iguessmed.png",
    },
    {
      title: {
        fr: "4Biolive",
        en: "4Biolive",
        ar: "4Biolive",
      },
      description: {
        fr: "",
        en: "Production of Biostimulants, Biofertilizers, Biopolymers and Bioenergy from OLIVE-oil chain residues and by-products",
        ar: "",
      },
      link: "https://www.4biolive.eu/",
      img: "./assets/images/biolive.png",
    },
    {
      title: {
        fr: "FruitFlyNet II",
        en: "FruitFlyNet II",
        ar: "FruitFlyNet II",
      },
      description: {
        fr: "Commercialisation d'un système Automatisé de Surveillance et de Contrôle contre la Mouche de l’Olive et la Mouche Méditerranéenne des Fruits",
        en: "",
        ar: "",
      },
      link: "https://www.enicbcmed.eu/fr/projets/fruitflynet-ii#:~:text=A%20propos%20du%20projet&text=Le%20projet%20FruitFlynet%2Dii%20vise,des%20fruits%20(Ceratitis%20capitata)",
      img: "./assets/images/fruitFlyNet.png",
    },
    {
      title: {
        fr: "Kafaci",
        en: "Kafaci",
        ar: "Kafaci",
      },
      description: {
        fr: "",
        en: "to enhance tomato and onion production and productivity for sustainable yields in participating African countries",
        ar: "",
      },
      link: "https://kafaci.org/site/project/02020300/view?pageId=02020300&pageName=Horticulture",
      img: "./assets/images/kafaci.png",
    },
  ];
  const utilLinks = [
    {
      title: {
        fr: "PORTAIL DU GOUVERNEMENT TUNISIEN",
        ar: "بوابة الحكومة التونسية",
        en: "TUNISIAN GOVERNMENT PORTAL",
      },
      link: "http://fr.tunisie.gov.tn/",
      img: "/assets/images/tunisie.png",
    },
    {
      title: {
        fr: "Ministère de l’Agriculture, des Ressources Hydrauliques et de la Pêche",
        ar: "وزارة الــفــلاحــة والموارد المائية والصيد البحري",
        en: "The Minister of Agriculture, Hydraulic Resources and fishing",
      },
      link: "http://www.agriculture.tn/",
      img: "/assets/images/Logo_Ministère_de_l'Agriculture_(Tunisie).png",
    },
    {
      title: {
        fr: "Ministère de l’Enseignement Supérieur et de la Recherche Scientifique",
        ar: "وزارة التعليم العالي والبحث العلمي",
        en: "Ministry of Higher Education and Scientific Research",
      },
      link: "http://www.mes.tn/index.php",
      img: "/assets/images/tunisie.png",
    },
    {
      title: {
        fr: "INSTITUTION DE LA RECHERCHE ET DE L’ENSEIGNEMENT SUPERIEUR AGRICOLES",
        ar: "مؤسسة البحث والتعليم العالي الفلاحي",
        en: "Institution of Agricultural Research and Higher Education",
      },
      link: "http://www.iresa.agrinet.tn/index.php/fr/",
      img: "/assets/images/logoIRESA_couleur_fr.png",
    },
    {
      title: {
        fr: "CENTRE NATIONAL UNIVERSITAIRE DE DOCUMENTATION SCIENTIFIQUE ET TECHNIQUE",
        ar: "المركز الوطني الجامعي للتوثيق العلمي والتقني",
        en: "University National Center of Scientific and Technical Documentation",
      },
      link: "https://www.cnudst.rnrt.tn/",
      img: "/assets/images/cnudest.png",
    },
  ];
  return (
    <div className="landing">
      <nav>
        <NewsCarrousel />
      </nav>
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
      <Grid
        dir={language === "ar" ? "rtl" : "ltr"}
        w={"100%"}
        p={0}
        templateColumns={{ base: "100%", xl: "25% 75%" }}
        templateRows={{ base: "auto auto", xl: "auto" }}
      >
        <GridItem mr={{ xl: -10, "2xl": 0 }}>
          <SideBar />
        </GridItem>
        <GridItem>
          <Content />
        </GridItem>
      </Grid>
      {/* <Divider
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
      <chakra.section px={10}>
        <Personnels />
      </chakra.section> */}
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
      <Box
        minH={"25dvh"}
        borderRadius={"lg"}
        boxShadow={"lg"}
        w={{ base: "full" }}
        mx={"auto"}
        my={10}
      >
        <PartnersSlider data={data} language={language} />
      </Box>
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
      <UsefulLinks data={utilLinks} language={language} />
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

      <chakra.section px={10} id="contact">
        <Contact />
      </chakra.section>
    </div>
  );
};

export default Landing;
