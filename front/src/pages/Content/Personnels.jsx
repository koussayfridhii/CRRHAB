import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider3D from "../../components/swiperSlider3D/Slider";
import StatsV2 from "../../components/stats/statsV2/Stats";

const Personnels = () => {
  const language = useSelector((state) => state.language.language);
  const [personnelsData, setPersonnelsData] = useState([
    {
      professeurs: 10,
      MaitresConférence: 12,
      MAHabilités: 2,
      MA: 9,
      Assistans: 13,
      ingénieurs: 11,
      techniciens: 25,
      agentsLabo: 5,
      CadresAgentsAdmin: 6,
      ouvriers: 3,
    },
    {
      professeurs: 10,
      MaitresConférence: 12,
      MAHabilités: 2,
      MA: 9,
      Assistans: 13,
      ingénieurs: 11,
      techniciens: 25,
      agentsLabo: 5,
      CadresAgentsAdmin: 6,
      ouvriers: 3,
    },
    {
      professeurs: 0,
      MaitresConférence: 24,
      MAHabilités: 4,
      MA: 18,
      Assistans: 26,
      ingénieurs: 22,
      techniciens: 50,
      agentsLabo: 10,
      CadresAgentsAdmin: 12,
      ouvriers: 6,
    },
  ]);
  useEffect(() => {
    const total = Object.entries(personnelsData[0]).map(([key, value]) => {
      const sum = [personnelsData[0], personnelsData[1]].reduce((acc, obj) => {
        return acc + (obj[key] || 0);
      }, 0);
      return [key, sum];
    });
    setPersonnelsData([
      personnelsData[0],
      personnelsData[1],
      Object.fromEntries(total),
    ]);
  }, []);
  return (
    <Box
      bg={"background"}
      py={6}
      px={10}
      my={6}
      mx={"auto"}
      shadow={"2xl"}
      w={{ base: "100dvw", "2xl": "90dvw" }}
      borderRadius={"lg"}
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
        {language === "fr"
          ? "Personnels"
          : language === "en"
          ? "Staff"
          : "طاقم العاملين"}
      </Heading>
      <StatsV2 language={language} data={personnelsData} />
      {/* <Slider3D /> */}
    </Box>
  );
};

export default Personnels;
