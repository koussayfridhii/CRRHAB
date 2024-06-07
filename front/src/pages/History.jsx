import { Flex, Text, Heading, Box, Highlight, Card } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const History = () => {
  const language = useSelector((state) => state.language.language);
  const data = {
    ar: `
  المركز الإقليمي للبحوث في البستنة والزراعة البيولوجية (CRRHAB) تم إنشاؤه بموجب المرسوم رقم 2006-3057 بتاريخ 20 نوفمبر 2006 (الرائد الرسمي عدد 94-24 نوفمبر 2006). هو مؤسسة عمومية ذات طابع إداري تتمتع بالشخصية المعنوية والاستقلالية المالية (EPA). يتبع مؤسسة البحث والتعليم العالي الزراعي (IRESA). وهو تحت إشراف وزير الزراعة والموارد المائية والصيد البحري. يخضع المركز لإشراف الدولة وفقًا للتشريعات واللوائح السارية المتعلقة بالمؤسسات العامة ذات الطابع الإداري والمؤسسات العامة للبحث العلمي وخاصة تلك الخاصة بالمؤسسات التابعة لـ IRESA. يقع مقرها في شط مريم من ولاية سوسة. /n
  يتضمن CRRHAB قطب البحث والتطوير الزراعي للوسط الشرقي بسوسة الذي تم إنشاؤه بموجب المرسوم رقم 95-999 بتاريخ 5 يونيو 1995 (الرائد الرسمي عدد 26-9 يونيو 1995)، ومحطات التجارب في البستنة في شط مريم، الساحلين وتبولبة.
  `,
    fr: `
  Le Centre Régional des Recherches en Horticulture et Agriculture Biologique (CRRHAB) est créé par décret n° 2006-3057 du 20 novembre 2006 (J.O.R.T N° 94-24 Novembre 2006). Il est un établissement public à caractère administratif doté de la personnalité morale et de l’autonomie financière (EPA). Il relève de l’Institution de la Recherche et de l’Enseignement Supérieur Agricoles (IRESA). Il est sous la tutelle du Ministre de l'Agriculture, des Ressources Hydrauliques et de la Pêche Maritime. La tutelle de l’État sur le centre s’exerce conformément à la législation et à la réglementation en vigueur relatives aux établissements publics à caractère administratif et aux établissements publics de recherche scientifique et notamment celles propres aux établissements relevant de l’IRESA. Son siège est fixé à Chott-Mériem du gouvernorat de Sousse.
  /n  Le CRRHAB comprend le Pôle de Recherche Développement Agricole du Centre-Est de Sousse créé par décret n° 95-999 du 5 juin 1995 (J.O.R.T N° 26-9 juin 1995), les stations d’expérimentation en Horticulture de Chott Mariem, Sahline et Teboulba.
  `,
    en: `
  The Regional Center for Research in Horticulture and Organic Agriculture (CRRHAB) was established by decree No. 2006-3057 of November 20, 2006 (J.O.R.T No. 94-24 November 2006). It is a public administrative establishment with legal personality and financial autonomy (EPA). It falls under the Institution of Agricultural Research and Higher Education (IRESA). It is under the supervision of the Minister of Agriculture, Water Resources, and Maritime Fisheries. The state's supervision over the center is exercised in accordance with the legislation and regulations in force relating to public administrative establishments and public scientific research establishments, particularly those specific to institutions under IRESA. Its headquarters are located in Chott-Mériem of the Sousse governorate.
  /n The CRRHAB includes the Agricultural Research and Development Center-East Pole of Sousse created by decree No. 95-999 of June 5, 1995 (J.O.R.T No. 26-9 June 1995), and the horticulture experimentation stations of Chott Mariem, Sahline, and Teboulba.
  `,
  };

  return (
    <>
      <Box
        w={{ base: "full" }}
        bg="background"
        shadow={"lg"}
        mx={"auto"}
        my={"5dvh"}
        borderRadius="lg"
        dir={language === "ar" ? "rtl" : "ltr"}
        _dark={{
          bg: "background",
        }}
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
          my={6}
        >
          {language === "en"
            ? "HISTORY"
            : language === "fr"
            ? "HISTORIQUE"
            : "تاريخ المؤسسة"}
        </Heading>
        <Card py={3} px={5} mb={6}>
          {data[language].split("/n").map((text, i) => {
            return (
              <Text
                textAlign="justify"
                color={"text"}
                fontSize="xl"
                key={i}
                mb={4}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >
                  {text}
                </Highlight>
              </Text>
            );
          })}
        </Card>
      </Box>
    </>
  );
};

export default History;
