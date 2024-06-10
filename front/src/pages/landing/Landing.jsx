import React from "react";
import NewsCarrousel from "../../components/NewsCarrousel";
import SideBar from "../../components/sideBar/SideBar";
import { useSelector } from "react-redux";
import Content from "../Content/Content";
import { Divider, chakra, Grid, GridItem, Box } from "@chakra-ui/react";
import Contact from "../../components/Contact";
import "./Landing.scss";
import PartnersSlider from "../../components/PartnenrsSlider";
import UsefulLinks from "../../components/UtilLinks";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav ref={ref1}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          <NewsCarrousel />
        </motion.div>
      </nav>
      <Divider
        my={5}
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
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
        <GridItem mr={{ xl: -10, "2xl": 0 }} ref={ref2}>
          <motion.div
            initial={{ x: -100 }}
            animate={inView2 ? { x: 0 } : { x: -100 }}
            transition={{ duration: 1 }}
          >
            <SideBar />
          </motion.div>
        </GridItem>
        <GridItem ref={ref3}>
          <motion.div
            initial={{ x: 100 }}
            animate={inView3 ? { x: 0 } : { x: 100 }}
            transition={{ duration: 1 }}
          >
            <Content />
          </motion.div>
        </GridItem>
      </Grid>
      <Divider
        my={5}
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
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
        ref={ref4}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={inView4 ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <PartnersSlider data={data} language={language} />
        </motion.div>
      </Box>
      <Divider
        my={5}
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
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
        ref={ref5}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView5 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <UsefulLinks data={utilLinks} language={language} />
        </motion.div>
      </Box>
      <Divider
        my={5}
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
        w={"90%"}
        mx={"auto"}
        borderColor={"primary"}
      />
      <chakra.section px={10} id="contact" ref={ref6}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView6 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.div>
      </chakra.section>
    </motion.div>
  );
};

export default Landing;
