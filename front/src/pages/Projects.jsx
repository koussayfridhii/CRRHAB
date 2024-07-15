import React, { useEffect, useState } from "react";
import { Box, Card, Flex, Heading, Image, List, ListIcon, ListItem, Text, chakra } from "@chakra-ui/react";
import { useSelector } from "react-redux";
// import PartnersSlider from "../components/PartnenrsSlider";
import { useLocation } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";

const Projects = () => {
  const language = useSelector((state) => state.language.language);
    const data= [
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
        closed: false
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
        closed: false
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
        closed: true
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
        closed: false
      },
    ]
  // const slides = [
  //   {
  //     img: "/assets/images/cartina-nuova-4biolove-rev-02.jpg",
  //     title: {
  //       fr: "",
  //       en: "",
  //       ar: "",
  //     },
  //   },
  //   {
  //     img: "/assets/images/iguessmed coordinators.png",
  //     title: {
  //       fr: "",
  //       en: "",
  //       ar: "",
  //     },
  //   },
  // ];
  const { pathname } = useLocation();
  const [dataToSHow, setDataToSHow] = useState([]);
  useEffect(()=>{
    if("/projects/international/closed" === pathname){
      setDataToSHow(data?.filter(item=>item.closed))
    }else{
      setDataToSHow(data?.filter(item=>!item.closed))
    }
  },[pathname, data])
  return (
    <Box dir={language === "ar" ? "rtl" : "ltr"}>
      <Box
        bg="background"
        w={{ base: "full", xl: "90%", "2xl": "80%" }}
        mx={"auto"}
        my={10}
        borderRadius={"lg"}
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
          borderTopRadius={"lg"}
        >
          { language === "en"
              ? "International Projects"
              : language === "fr"
              ? "Projets Internationaux"
              : "المشاريع الدولية"}
        </Heading>
        <Card bg="background" px={5} py={10}>
        <List spacing={5}>
          {dataToSHow?.map((doc) => {
            return (
              <ListItem
                _hover={{
                  color: "secondary",
                  fontSize: "xl",
                  _dark: { color: "primary" },
                }}
                color="primary"
                _dark={{ color: "text" }}
                fontSize={"lg"}
                key={doc.link + doc.title.fr}
              >
                <ListIcon as={MdCheckCircle} />
                <chakra.a
                  href={doc.link}
                  target="_blank"
                  _visited={{
                    color: "red.500",
                  }}
                >
                  {doc.title?.[language]}
                </chakra.a>
              </ListItem>
            );
          })}
        </List>
        </Card>
      </Box>
      {/* <Box
        minH={"25dvh"}
        bg={"background"}
        borderRadius={"lg"}
        boxShadow={"lg"}
        w={{ base: "full", xl: "90dvw", "2xl": "80dvw" }}
        mx={"auto"}
        my={10}
      >
        <PartnersSlider data={slides} title={false} language={language} />
      </Box> */}
    </Box>
  );
};

export default Projects;

const Slider = ({ language, data }) => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = data;
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [currentSlide]); // Re-run the effect when currentSlide changes

  return (
    <Flex w="full" bg="background" alignItems="center" justifyContent="center">
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="80dvh" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box
              as={"a"}
              href={slide.link}
              key={`slide-${sid}`}
              boxSize="full"
              shadow="md"
              flex="none"
              pos="relative"
              target="_blank"
            >
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt={slide?.title?.[language]}
                boxSize="full"
                backgroundSize="cover"
                position="absolute"
                zIndex={-1}
              />
              <Box
                pos="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                bg="rgba(0, 0, 0, 0.5)" // semi-transparent overlay
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                color="white"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`linear-gradient(360deg, rgba(15,162,57,0) 0%, rgba(23,154,92,0) 65%, rgba(47,129,196,0) 100%), url(${slide.img})`}
              ></Box>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
};
