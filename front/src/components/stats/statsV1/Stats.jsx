import React from "react";
import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import StatsCard from "./StatsCard";
import { useSelector } from "react-redux";
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={40}
          height={40}
          color={"#0fa239"}
          fill={"none"}
        >
          <path
            d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: {
        fr: "Recherches",
        en: "Researches",
        ar: "الأبحاث",
      },
      stat: 5200,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={40}
          height={40}
          color={"#0fa239"}
          fill={"none"}
        >
          <path
            d="M14.5405 2V4.48622C14.5405 6.23417 14.5405 7.10814 14.7545 7.94715C14.9685 8.78616 15.3879 9.55654 16.2267 11.0973L17.3633 13.1852C19.5008 17.1115 20.5696 19.0747 19.6928 20.53L19.6792 20.5522C18.7896 22 16.5264 22 12 22C7.47357 22 5.21036 22 4.3208 20.5522L4.30725 20.53C3.43045 19.0747 4.49918 17.1115 6.63666 13.1852L7.7733 11.0973C8.61209 9.55654 9.03149 8.78616 9.24548 7.94715C9.45947 7.10814 9.45947 6.23417 9.45947 4.48622V2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 16.002L9.00868 15.9996"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 18.002L15.0087 17.9996"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2L16 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 11.5563C8.5 10.4029 10.0994 11.2343 12 12.3182C14.5 13.7439 16 12.65 16.5 11.6152"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: {
        fr: "Centres de Recherches",
        en: "Researches' centers",
        ar: "مراكز الأبحاث",
      },
      stat: 5200,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={40}
          height={40}
          color={"#0fa239"}
          fill={"none"}
        >
          <path
            d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];
  return (
    <Box
      maxW="9xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      dir={language === "ar" ? "rtl" : "ltr"}
      mb={20}
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
