import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Heading,
  List,
  ListIcon,
  ListItem,
  chakra,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const OpenData = () => {
  const language = useSelector((state) => state.language.language);
  const data = [
    {
      type:"opendata",
      title: {
        fr: "Journal Officiel de la République Tunisienne — 11 mars 2022",
        en: "Official Journal of the Tunisian Republic — March 11, 2022",
        ar: "الجريدة الرسمية للجمهورية التونسية — 11 مارس 2022",
      },
      link: "Jo0272022.pdf",
    },
    {
      type:"opendata",
      title: {
        fr: "Loi n° 2006-73 du 9 novembre 2006, modifiant et complétant la loi d’orientation n°96-6 du 31 janvier 1996, relative à la recherche scientifique et au développement technologique.",
        en: "Law No. 2006-73 of November 9, 2006, amending and supplementing the orientation law No. 96-6 of January 31, 1996, relating to scientific research and technological development.",
        ar: "القانون عدد 2006-73 المؤرخ في 9 نوفمبر 2006، المعدل والمكمل للقانون التوجيهي عدد 96-6 المؤرخ في 31 يناير 1996، المتعلق بالبحث العلمي والتطوير التكنولوجي.",
      },
      link: "Loi n° 2006-73 du 9 novembre 2006.pdf",
    },
    {
      type:"opendata",
      title: {
        fr: "Décret n° 2006-3057 du 20 novembre 2006, portant modalités de leur fonctionnement; création du centre régional des recherches en horticulture et agriculture biologique et fixant son organisation et les modalités de son fonctionnement.",
        en: "Decree No. 2006-3057 of November 20, 2006, detailing the operating procedures; creation of the regional center for research in horticulture and organic agriculture and setting its organization and operating procedures.",
        ar: "المرسوم عدد 2006-3057 المؤرخ في 20 نوفمبر 2006، الذي يحدد طرق عملهم؛ إنشاء المركز الإقليمي للبحوث في البستنة والزراعة العضوية وتحديد تنظيمه وطرق تشغيله.",
      },
      link: "Création du CRRHAB 2006_fr.pdf",
    },
    {
      type:"opendata",
      title: {
        fr: "Loi n°2002-53 du 3 juin 2002, complétant la loi d’orientation n°96-6 du 31 janvier 1996, relative à la recherche scientifique et au développement technologique.",
        en: "Law No. 2002-53 of June 3, 2002, supplementing the orientation law No. 96-6 of January 31, 1996, relating to scientific research and technological development.",
        ar: "القانون عدد 2002-53 المؤرخ في 3 يونيو 2002، المكمل للقانون التوجيهي عدد 96-6 المؤرخ في 31 يناير 1996، المتعلق بالبحث العلمي والتطوير التكنولوجي.",
      },
      link: "Loi n°2002-53 du 3 juin 2002.pdf",
    },
    {
      type:"opendata",
      title: {
        fr: "Loi n°2000-68 du 17 juillet 2000, modifiant certaines dispositions de la loi d’orientation n°96-6 du 31 janvier 1996, relative à la recherche scientifique et au développement technologique.",
        en: "Law No. 2000-68 of July 17, 2000, amending certain provisions of the orientation law No. 96-6 of January 31, 1996, relating to scientific research and technological development.",
        ar: "القانون عدد 2000-68 المؤرخ في 17 يوليو 2000، المعدل لبعض أحكام القانون التوجيهي عدد 96-6 المؤرخ في 31 يناير 1996، المتعلق بالبحث العلمي والتطوير التكنولوجي.",
      },
      link: "Loi n° 2000-68 du 17 juillet 2000.pdf",
    },
    {
      type:"opendata",
      title: {
        fr: "Décret n° 97-938 du 19 mai 1997, portant organisation scientifique, administrative et financière des établissements publics de recherche scientifique et modalités de leur fonctionnement.",
        en: "Decree No. 97-938 of May 19, 1997, concerning the scientific, administrative, and financial organization of public scientific research institutions and their operating procedures.",
        ar: "المرسوم عدد 97-938 المؤرخ في 19 مايو 1997، المتعلق بالتنظيم العلمي والإداري والمالي للمؤسسات العامة للبحث العلمي وطرق تشغيلها.",
      },
      link: "Décret n°97-942 du 19 mai1997.pdf",
    },
    {
      type:"opendata",
      title: {
        fr: "Loi d’orientation n°96-6 du 31 janvier 1996, relative à la recherche scientifique et au développement technologique",
        en: "Orientation Law No. 96-6 of January 31, 1996, relating to scientific research and technological development",
        ar: "القانون التوجيهي عدد 96-6 المؤرخ في 31 يناير 1996، المتعلق بالبحث العلمي والتطوير التكنولوجي",
      },
      link: "Loi d’orientation n°96-6 du 31 janvier 1996.pdf",
    },
    {
      type:"opendata",
      title: {
        fr: "Décret n° 95-999 du 5 juin 1995, fixant l'organisation et les modalités de fonctionnement des pôles régionaux de recherche-développement agricole à l'institution de la recherche et de l'enseignement supérieur agricoles",
        en: "Decree No. 95-999 of June 5, 1995, setting the organization and operating procedures of the regional agricultural research and development centers at the Institution of Agricultural Research and Higher Education",
        ar: "المرسوم عدد 95-999 بتاريخ 5 يونيو 1995، الذي يحدد تنظيم وطرق تشغيل الأقطاب الإقليمية للبحث والتطوير الزراعي في مؤسسة البحث والتعليم العالي الفلاحي",
      },
      link: "Création des Pôles de Recherche_Décret n°95-999 du 5 juin 1995.pdf",
    },
    {
      type:"activityreports",
      title: {
        fr: "Rapport d'activités 2023",
        en: "Activity Report 2023",
        ar: "تقرير الأنشطة لعام 2023",
      },
      link: "Rapport Activités CRRHAB 2023).pdf",
    },
    {  
      type:"administrativeforms",
      title: {
        fr: "Demande de fourniture ou d'exécution de travaux",
        en: "Request for supply or execution of works",
        ar: "طلب تزود أو القيام بأشغال",
      },
      link: "formulaires administratifs.pdf",
    },
    {
      type:"flyers",
      title: {
        fr: "Les insectes les plus importants qui affectent les fruits de figuier et les méthodes de contrôle en Tunisie (Ficus Carica)",
        en: "Most important insects affecting fig fruits and methods of control in Tunisia (Ficus Carica)",
        ar: "أهم الحشرات التي تصيب ثمار التين و طرق مكافحتها في تونس (Ficus Carica)",      },
      link: "Insectes du Figuier RevueGIF_2023.pdf",
    },
    {
      type:"flyers",
      title: {
        fr: "Les insectes les plus importants qui affectent les fruits de pistache et les méthodes de lutte",
        en: "Most important insects affecting pistachio fruits and methods of control",
        ar: "أهم الحشرات التي تصيب فاكهة الفستق و طرق مكافحتها",      },
      link: "Insectes du p stachier RevueGIF_2023 (1).pdf",
    },
  ];
  const [dataToShow, setDataToShow] = useState([])
  const { pathname } = useLocation();
  let path =pathname.replace("_", "");
   
  path = path.replace("/", "");
  useEffect(() => {
    data.reverse()
   setDataToShow(data.filter((doc) => doc.type === path)) 
  }, [ path]);
const titles= {
  opendata: {
    fr: "Textes Réglementaires",
    en: "Regulatory Texts",
    ar: "النفاذ للمعلومة",
  },
  activityreports: {
    fr: "Rapports d'Activités",
    en: "Activity Reports",
    ar: "تقارير أنشطة البحث",
  },
  administrativeforms:{ fr: "Formulaires Administratifs", en: "Administrative forms", ar: "وثائق إدارية" },
  flyers:{ fr: "Brochures et Dépliants", en: "Flyers and Booklets", ar: "كتيبات و نشريات" }
}
  return (
    <Box
      w={{ base: "full", xl: "80dvw" }}
      bg={"background"}
      shadow={"lg"}
      borderRadius={10}
      mx="auto"
      my={20}
      dir={language === "ar" ? "rtl" : "ltr"}
      px={16}
      py={10}
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
        {titles?.[path]?.[language]}
      </Heading>
      <Card p={4}>
        <List spacing={5}>
          {dataToShow?.map((doc) => {
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
                  href={`./assets/openData/${doc.link}`}
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
  );
};

export default OpenData;
