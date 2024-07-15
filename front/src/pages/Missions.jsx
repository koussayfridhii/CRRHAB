import {
  Box,
  Card,
  Heading,
  Highlight,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useCallApi } from "../hooks/useCallApi";
import Spinner from "../components/spinner/Spinner";

const Missions = ({ full = false }) => {
  const language = useSelector((state) => state.language.language);
  const { data, error, isLoading } = useCallApi("missions");

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  return (
    <Box
      w={{ base: "full" }}
      py={5}
      mx={"auto"}
      my={5}
      dir={language === "ar" ? "rtl" : "ltr"}
      px={5}
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
          ? "MISSIONS Of CRRHAB"
          : language === "fr"
          ? "MISSIONS du CRRHAB"
          : "المهام"}
      </Heading>
      <Text textAlign="justify" color={"text"} fontSize="xl" mb={2}>
        <Highlight
          query="crrhab"
          styles={{
            color: "text",
            px: "2",
            py: "1",
            fontWeight: "bold",
          }}
        >
          {language === "fr"
            ? `Les missions du Centre Régional des Recherches en Horticulture et
          Agriculture Biologique (CRRHAB) s’inscrivent dans le cadre de la
          stratégie de la régionalisation et de la décentralisation de la
          recherche, adoptée par l’IRESA :`
            : language === "en"
            ? `The missions of the Regional Center for Research in Horticulture and Organic Agriculture (CRRHAB) are part of the regionalization and decentralization strategy for research adopted by the Arab Organization for Agricultural Research (AORA):`
            : `في إطار استراتيجية اللامركزية والتخصص الجهوي للبحوث التي اعتمدتها مؤسسة البحث والتعليم العالي الفلاحي، وطبقا لمرسوم إنشائه، يقوم المركز بكل أنشطة البحث والتجارب في البستنة والفلاحة البيولوجية وتتلخص مهامه في:`}
        </Highlight>
      </Text>
      <OrderedList mx={5} my={5}>
        {data?.map((mission) => {
          return (
            <ListItem key={mission.fr}>
              <Text textAlign="justify" color={"text"} fontSize="xl" mb={2}>
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "white",
                    bg: "primary",
                    px: "2",
                    py: "1",
                    rounded: "full",
                    fontWeight: "bold",
                  }}
                >
                  {mission?.description?.[language]}
                </Highlight>
              </Text>
            </ListItem>
          );
        })}
      </OrderedList>
      <Text textAlign="justify" color={"text"} fontSize="xl" mb={2}>
        <Highlight
          query="crrhab"
          styles={{
            color: "text",
            px: "2",
            py: "1",
            fontWeight: "bold",
          }}
        >
          {language === "fr"
            ? `De plus, le CRRHAB est fortement impliqué dans la formation par la recherche, par des
            stages, des thèses de doctorat ou des post-doctorats de jeunes scientifiques ainsi que
            d’étudiantes et étudiants.`
            : language === "en"
            ? `In addition, the CRRHAB is heavily involved in training through research, through internships, doctoral theses, and postdoctoral training for young scientists and students.`
            : `بالإضافة إلى ذلك، يشارك المركز  بشكل فعال في التدريب من خلال البحث والتكوين المستمر لفائدة الفنيين والتكوين الإشهادي بتأطير طلبة التعليم العالي بمختلف مراحل التعليم العالي.`}
        </Highlight>
      </Text>
    </Box>
  );
};

export default Missions;
