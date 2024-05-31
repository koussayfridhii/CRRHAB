import React from "react";
import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import StatsCard from "./StatsCard";
import { useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { GrTest } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";

export default function StatsV1({ header = true }) {
  const language = useSelector((state) => state.language.language);
  const stats = [
    {
      title: {
        fr: "Professeurs",
        en: "Professors",
        ar: "الأساتذة",
      },
      stat: 500,
      icon: <FaRegUser />,
    },
    {
      title: {
        fr: "Recherches",
        en: "Researches",
        ar: "الأبحاث",
      },
      stat: 5200,
      icon: <GrTest />,
    },
    {
      title: {
        fr: "Centres de Recherches",
        en: "Researches' centers",
        ar: "مراكز الأبحاث",
      },
      stat: 5200,
      icon: <CiLocationOn />,
    },
  ];
  return (
    <Box
      maxW={{ base: "full", xl: "9xl" }}
      mx={"auto"}
      pt={5}
      px={{ base: 3, sm: 12, md: 17 }}
      dir={language === "ar" ? "rtl" : "ltr"}
      mb={20}
      w={"full"}
    >
      {/* <chakra.h1
        textAlign={"center"}
        fontSize={"xxxxl"}
        py={10}
        fontWeight={"bold"}
        color={"primary"}
        textDecor={"underline"}
        textTransform={"capitalize"}
        lineHeight={"1.5"}
        _dark={{
          color: "secondary",
        }}
      >
        {language === "en"
          ? "See How We're Making a Difference!!"
          : language === "ar"
          ? "!!انظر كيف نحدث فرقًا"
          : "Découvrez comment nous faisons la différence!!"}
      </chakra.h1> */}
      {header && (
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
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {stats.map((stat) => {
          return (
            <StatsCard
              title={stat.title[language]}
              stat={stat.stat}
              icon={stat.icon}
              key={stat.title.fr}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
