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

const Missions = ({ full = false }) => {
  const language = useSelector((state) => state.language.language);
  const missions = [
    {
      fr: `Développement d’un pôle de recherche d’excellence dans les domaines de l’horticulture et de l’agriculture biologique au niveau national et régional (Sousse, Monastir, Mahdia et Sfax) `,
      en: `Establishment of a center for research excellence in the fields of horticulture and organic agriculture at the national and regional levels (Sousse, Monastir, Mahdia, and Sfax)`,
      ar: `إنشاء مركز أبحاث متميز في مجالات البستنة والزراعة العضوية على المستوى الوطني والإقليمي (سوسة، المنستير، المهدية، وصفاقس)    `,
    },
    {
      fr: `Contribution au transfert et la diffusion des acquis de la recherche au niveau des régions`,
      en: `Contribution to the transfer and dissemination of research findings at the regional level`,
      ar: `المساهمة في نقل ونشر نتائج البحوث على مستوى المناطق`,
    },
    {
      fr: `Formation et encadrement des utilisateurs des résultats de la recherche`,
      en: `Training and support for users of research results`,
      ar: `تكوين وتأهيل مستخدمي نتائج البحث`,
    },
    {
      fr: `Offre d’expertise et de conseils scientifiques et techniques aux secteurs public et privé.`,
      en: `Provision of expertise and scientific and technical advice to the public and private sectors.`,
      ar: `تقديم الخبرة والمشورة العلمية والفنية للقطاعين العام والخاص.`,
    },
  ];
  return (
    <Box
      w={{ base: "full" }}
      py={5}
      mx={"auto"}
      my={5}
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
          ? "MISSIONS"
          : language === "fr"
          ? "MISSIONS"
          : "المهام"}
      </Heading>
      <Card py={3} px={5} mb={6}>
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
              : `تندرج مهام المركز الجهوي للبحوث في البستنة والزراعة العضوية (CRRHAB) في إطار استراتيجية اللامركزية واللامركزية للأبحاث التي اعتمدتها المنظمة العربية للبحوث الزراعية (إريسا):`}
          </Highlight>
        </Text>
        <OrderedList mx={10} my={5}>
          {missions.map((mission) => {
            return (
              <ListItem mx={5} key={mission.fr}>
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
                    {mission[language]}
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
              : `بالإضافة إلى ذلك، يشارك المركز الجهوي للبحوث في البستنة والزراعة العضوية بشكل كبير في التدريب من خلال البحث، من خلال التدريبات، وأطروحات الدكتوراه، وما بعد الدكتوراه للعلماء الشباب، وكذلك الطلاب.`}
          </Highlight>
        </Text>
      </Card>
    </Box>
  );
};

export default Missions;
