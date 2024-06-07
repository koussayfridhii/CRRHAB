import {
  Box,
  Card,
  Divider,
  Flex,
  HStack,
  Highlight,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { LiaDiscourse } from "react-icons/lia";
import { CiMonitor } from "react-icons/ci";
import { SiValorant } from "react-icons/si";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import { MdOutlineEditCalendar, MdPersonSearch } from "react-icons/md";
import { GoPersonFill, GoPerson } from "react-icons/go";

const ScientificOrganization = () => {
  const language = useSelector((state) => state.language.language);
  const scientificCouncilMembers = {
    president: {
      fr: "Pr Taoufik BETTAIEB, Directeur Général",
      ar: "الأستاذ توفيق بطيّب، المدير العام",
      en: "Pr Taoufik BETTAIEB, General Director",
    },
    rapporteur: {
      fr: "Mr Atef MOUGOU, Secrétaire Général",
      ar: "السيد عاطف موقو، الأمين العام",
      en: "Mr Atef MOUGOU, General Secretary",
    },
    Responsables_des_structures_RDI: [
      {
        fr: "Pr Mejda DAAMI-REMADI, Chef de Laboratoire",
        ar: "البروفيسور مجدى الدعامي-رمادي، رئيس المختبر",
        en: "Pr Mejda DAAMI-REMADI, Head of Laboratory",
      },
    ],
    managersOfSpecializedUnits: [
      {
        fr: "Responsable de l’unité d’information et de documentation scientifique",
        en: "Head of the scientific information and documentation unit",
        ar: "رئيس وحدة المعلومات والتوثيق العلمي",
      },
      {
        fr: "Responsable de l’unité de valorisation des résultats de recherche",
        en: "Head of the Research Results Valorization Unit",
        ar: "مسؤول وحدة تثمين نتائج البحث",
      },
      {
        fr: "Responsable de l’unité d’expérimentations agricoles",
        en: "Head of the Agricultural Experimentation Unit",
        ar: "مسؤول وحدة التجارب الزراعية",
      },
    ],
    representativesOfResearchers: [
      {
        fr: "Pr Mohamed BRAHAM, Corps A",
        en: "Pr Mohamed BRAHAM, Corps A",
        ar: "الأستاذ محمد براهم, القسم 1",
      },
      {
        fr: "Dr Hela CHIKH ROUHOU, Corps B",
        en: "Dr Hela CHIKH ROUHOU, Corps B",
        ar: "الدكتورة هالة شيخ روحو, القسم 2",
      },
      {
        fr: "Dr Chokri BAYOUDH, Corps B",
        en: "Dr Chokri BAYOUDH, Corps B",
        ar: "الدكتور شكري بيوض, القسم 2",
      },
    ],
    representativeOfIresa: {
      fr: "Pr Rajouene MAJDOUD",
      en: "Pr Rajouene MAJDOUD",
      ar: "الأستاذ رجوان مجدود",
    },
    representativesOfAgriculturalResearchAndHigherEducationEstablishments: [
      {
        fr: "Pr Walid HAMADA, INAT",
        en: "Pr Walid HAMADA, INAT",
        ar: "الأستاذ وليد حمادة, INAT",
      },
      {
        fr: "Dr Thouray RHIM, INRAT",
        en: "Dr Thouray RHIM, INRAT",
        ar: "الدكتور ثري رحيم, INRAT",
      },
      {
        fr: "Pr Lamia HAMROUNI, INRGREF",
        en: "Pr Lamia HAMROUNI, INRGREF",
        ar: "الأستاذ لمياء الحمروني, INRGREF",
      },
      {
        fr: "Dr Khaled Hibar, IO",
        en: "Dr Khaled Hibar, IO",
        ar: "الدكتور خالد حيبار, IO",
      },
    ],
    scientificPersonalitiesFromTheAcademicAndScientificResearchWorld: [
      {
        fr: "Dr Olfa AYARI, ISBM",
        en: "Dr Olfa AYARI, ISBM",
        ar: "الدكتور ألفة عياري, ISBM",
      },
    ],
  };

  return (
    <>
      <Flex
        direction="column"
        w={{ base: "full" }}
        bg={"white"}
        mx={"auto"}
        my={10}
        borderRadius={10}
        shadow={"lg"}
        px={10}
        py={5}
        dir={language === "ar" ? "rtl" : "ltr"}
        gap={10}
        _dark={{
          bg: "background",
        }}
      >
        <Box>
          <chakra.h2
            fontSize={"xxl"}
            color={"white"}
            px={4}
            py={1}
            _dark={{ bg: "secondary" }}
            mb={10}
            bg="primary"
            borderRadius={"lg"}
          >
            {language === "en"
              ? "Scientific Organization of CRRHAB"
              : language === "fr"
              ? "ORGANISATION SCIENTIFIQUE DU CRRHAB"
              : "التنظيم العلمي للمركز CRRRHAB"}
          </chakra.h2>
          {language === "en" ? (
            <>
              <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >
                  The scientific organization of the center includes:
                </Highlight>
              </Text>
              <List>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    A research laboratory.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    Three agricultural experimentation units.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    A unit for the valorization of research results.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    A unit for scientific information and documentation.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    A Scientific Council (Article 4 of Decree No. 2006-3057 of
                    November 20, 2006).
                  </Text>
                </ListItem>
              </List>
              <br />
              <Text fontSize={"lg"} color={"text"} mb={4}>
                The Scientific Council is the reflection and proposal body on
                the scientific policy of the establishment. To this end, it is
                notably responsible for:
              </Text>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={LiaDiscourse}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Provide advice on all matters related to the scientific
                      policy of the establishment, including research programs
                      to be undertaken.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={CiMonitor}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Monitor the research activities of the establishment.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={SiValorant}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Propose activities for the valorization and application of
                      research results, as well as activities for scientific
                      information and documentation.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaArrowUpFromWaterPump}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Propose professional development activities as deemed
                      necessary.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={GiThink}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Provide opinions on proposals for scientific cooperation
                      agreements.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={MdOutlineEditCalendar}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Express the needs of the different structures of the
                      establishment in scientific and technical personnel.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaCheck}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Examine the final versions of the establishment's
                      scientific reports.
                    </Highlight>
                  </Text>
                </ListItem>
              </List>
              <Text fontSize={"lg"} color={"text"} my={4}>
                In addition to its ordinary sessions mentioned in Article 6 of
                Decree No. 97-938 cited above, the Scientific Council of the
                center holds an annual session to evaluate the scientific
                activities of the establishment. The Scientific Council of the
                center meets in accordance with the provisions of Decree No.
                97-938 of May 19, 1997, and performs the missions assigned to it
                by said decree.
              </Text>
            </>
          ) : language === "fr" ? (
            <>
              <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >
                  L’organisation scientifique du centre comprend :
                </Highlight>
              </Text>
              <List>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    Un laboratoire de recherche.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    Trois unités d’expérimentation agricole.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    Une unité de valorisation des résultats de la recherche.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    Une unité d’information et de documentation scientifique.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    Un conseil scientifique (Article 4 du Décret N° 2006-3057 du
                    20 novembre 2006).
                  </Text>
                </ListItem>
              </List>
              <br />
              <Text fontSize={"lg"} color={"text"} mb={4}>
                Le Conseil scientifique est l’organe de réflexion et de
                proposition sur la politique scientifique de l’établissement. A
                ce titre, il est notamment chargé de :
              </Text>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={LiaDiscourse}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Donner des avis sur toutes questions relatives à la
                      politique scientifique de l’établissement, notamment sur
                      les programmes de recherche à entreprendre.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={CiMonitor}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Assurer le suivi des activités de recherche de
                      l’établissement.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={SiValorant}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Proposer des activités de valorisation et d'application
                      des résultats de la recherche ainsi que des activités
                      d'information et de documentation scientifique.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaArrowUpFromWaterPump}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Proposer des actions de perfectionnement professionnel
                      jugées nécessaires.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={GiThink}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Donner des avis sur les propositions d'accords de
                      coopération scientifique.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={MdOutlineEditCalendar}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Exprimer les besoins des différentes structures de
                      l’établissement en personnel scientifique et technique.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaCheck}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      Examiner les versions définitives des rapports
                      scientifiques de l’établissement.
                    </Highlight>
                  </Text>
                </ListItem>
              </List>
              <Text fontSize={"lg"} color={"text"} my={4}>
                En plus de ses séances ordinaires mentionnées à l’article 6 du
                décret n° 97-938 précité, le Conseil Scientifique du centre
                tient une séance annuelle d’évaluation des activités
                scientifiques de l’établissement. Le Conseil Scientifique du
                centre se réunit conformément aux dispositions du décret n°
                97-938 du 19 mai 1997 et exerce les missions qui lui sont
                assignées par ledit décret.
              </Text>
            </>
          ) : (
            <>
              <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >
                  التنظيم العلمي للمركز يشمل:
                </Highlight>
              </Text>
              <List>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    مختبر أبحاث.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    ثلاث وحدات للتجارب الزراعية.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    وحدة لتثمين نتائج البحث.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    وحدة المعلومات والتوثيق العلمي.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaHandPointRight}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    مجلس علمي (المادة 4 من المرسوم رقم 2006-3057 المؤرخ 20
                    نوفمبر 2006).
                  </Text>
                </ListItem>
              </List>
              <br />
              <Text fontSize={"lg"} color={"text"} mb={4}>
                المجلس العلمي هو الهيئة المسؤولة عن التفكير وتقديم الاقتراحات
                حول السياسة العلمية للمؤسسة. ولهذا الغرض، فهو مكلف بـ:
              </Text>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={LiaDiscourse}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      إبداء الآراء حول جميع المسائل المتعلقة بالسياسة العلمية
                      للمؤسسة، وخاصة برامج البحث التي يتعين القيام بها.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={CiMonitor}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      متابعة الأنشطة البحثية للمؤسسة.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={SiValorant}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      اقتراح أنشطة التثمين وتطبيق نتائج البحث بالإضافة إلى أنشطة
                      المعلومات والتوثيق العلمي.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaArrowUpFromWaterPump}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      اقتراح إجراءات التدريب المهني التي يعتبرها ضرورية.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={GiThink}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      تقديم الآراء حول مقترحات الاتفاقيات العلمية.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={MdOutlineEditCalendar}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      التعبير عن احتياجات الهياكل المختلفة للمؤسسة من الموظفين
                      العلميين والفنيين.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={5}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    <ListIcon
                      fontSize={"xl"}
                      as={FaCheck}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
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
                      فحص النسخ النهائية للتقارير العلمية للمؤسسة.
                    </Highlight>
                  </Text>
                </ListItem>
              </List>
              <Text fontSize={"lg"} color={"text"} my={4}>
                بالإضافة إلى جلساته العادية المذكورة في المادة 6 من المرسوم رقم
                97-938، يعقد المجلس العلمي للمركز جلسة سنوية لتقييم الأنشطة
                العلمية للمؤسسة. يجتمع المجلس العلمي للمركز وفقاً لأحكام المرسوم
                رقم 97-938 المؤرخ 19 مايو 1997 ويمارس المهام المسندة إليه بموجب
                المرسوم المذكور.
              </Text>
            </>
          )}
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
        <Box>
          <chakra.h2
            fontSize={"xxl"}
            color={"white"}
            px={4}
            py={1}
            _dark={{ bg: "secondary" }}
            mb={10}
            bg="primary"
            borderRadius={"lg"}
          >
            {language === "en"
              ? "Composition of the CRRHAB scientific council"
              : language === "fr"
              ? "Composition du conseil scientifique du CRRHAB"
              : "تكوين المجلس العلمي CRRRHAB"}
          </chakra.h2>
          <Flex
            direction={"column"}
            w={{ base: "full", xl: "80dvw", "2xl": "60dvw" }}
            mx="auto"
            fontSize={{ base: "sm", xl: "lg" }}
            gap={5}
          >
            <Flex gap={1}>
              <Card
                bg="blue.500"
                gap={3}
                flex={3}
                minH={"5dvh"}
                px={5}
                py={1}
                fontWeight={"Bold"}
                color="white"
                letterSpacing={1}
                shadow={"lg"}
              >
                <chakra.h4>
                  {language === "en"
                    ? "Chairman"
                    : language === "fr"
                    ? "Président"
                    : "رئيس المجلس"}
                </chakra.h4>
                <chakra.h4>
                  {language === "en"
                    ? "Rapporteur"
                    : language === "fr"
                    ? "Rapporteur"
                    : "مقرر"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                <chakra.h5>
                  {scientificCouncilMembers.president?.[language]}
                </chakra.h5>
                <chakra.h5>
                  {scientificCouncilMembers.rapporteur?.[language]}
                </chakra.h5>
              </Card>
            </Flex>
            <Flex gap={1}>
              <Card
                bg="blue.500"
                gap={3}
                flex={3}
                minH={"5dvh"}
                px={5}
                py={1}
                fontWeight={"Bold"}
                color="white"
                letterSpacing={1}
                shadow={"lg"}
                justify={"center"}
              >
                <chakra.h4>
                  {language === "en"
                    ? "Heads of R&D Structures"
                    : language === "fr"
                    ? "Responsables des structures RDI"
                    : "رؤساء الهياكل البحث والتطوير (ب&ت)"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                {scientificCouncilMembers.Responsables_des_structures_RDI.map(
                  (responsable) => {
                    return (
                      <chakra.h5 key={responsable.fr}>
                        {responsable?.[language]}
                      </chakra.h5>
                    );
                  }
                )}
              </Card>
            </Flex>
            <Flex gap={1}>
              <Card
                bg="blue.500"
                gap={3}
                flex={3}
                minH={"5dvh"}
                px={5}
                py={1}
                fontWeight={"Bold"}
                color="white"
                letterSpacing={1}
                shadow={"lg"}
                justify={"center"}
              >
                <chakra.h4>
                  {language === "en"
                    ? "Heads of Specialized Units"
                    : language === "fr"
                    ? "Responsables des unités spécialisées"
                    : "رؤساء الوحدات المتخصصة"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                {scientificCouncilMembers.managersOfSpecializedUnits.map(
                  (responsable) => {
                    return (
                      <chakra.h5 key={responsable.fr}>
                        {responsable?.[language]}
                      </chakra.h5>
                    );
                  }
                )}
              </Card>
            </Flex>
            <Flex gap={1}>
              <Card
                bg="blue.500"
                gap={3}
                flex={3}
                minH={"5dvh"}
                px={5}
                py={1}
                fontWeight={"Bold"}
                color="white"
                letterSpacing={1}
                shadow={"lg"}
                justify={"center"}
              >
                <chakra.h4>
                  {language === "en"
                    ? "Elected Researcher Representatives"
                    : language === "fr"
                    ? "Représentants des Chercheurs (Membres élus)"
                    : "ممثلو الباحثين (أعضاء منتخبون)"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                {scientificCouncilMembers.representativesOfResearchers.map(
                  (responsable) => {
                    return (
                      <chakra.h5 key={responsable.fr}>
                        {responsable?.[language]}
                      </chakra.h5>
                    );
                  }
                )}
              </Card>
            </Flex>
            <Flex gap={1}>
              <Card
                bg="blue.500"
                gap={3}
                flex={3}
                minH={"5dvh"}
                px={5}
                py={1}
                fontWeight={"Bold"}
                color="white"
                letterSpacing={1}
                shadow={"lg"}
              >
                <chakra.h4>
                  {language === "en"
                    ? "IRESA Representative"
                    : language === "fr"
                    ? "Représentant de l'IRESA"
                    : "ممثل الإريسا"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                <chakra.h5>
                  {scientificCouncilMembers.representativeOfIresa?.[language]}
                </chakra.h5>
              </Card>
            </Flex>
            <Flex gap={1}>
              <Card
                bg="blue.500"
                gap={3}
                flex={3}
                minH={"5dvh"}
                px={5}
                py={1}
                fontWeight={"Bold"}
                color="white"
                letterSpacing={1}
                shadow={"lg"}
                justify={"center"}
              >
                <chakra.h4>
                  {language === "en"
                    ? "Representatives of RESA Institutions"
                    : language === "fr"
                    ? "Représentants des établissements RESA"
                    : "ممثلو مؤسسات الشبكة الإقليمية للتعليم والبحث الزراعي"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                {scientificCouncilMembers.representativesOfAgriculturalResearchAndHigherEducationEstablishments.map(
                  (responsable) => {
                    return (
                      <chakra.h5 key={responsable.fr}>
                        {responsable?.[language]}
                      </chakra.h5>
                    );
                  }
                )}
              </Card>
            </Flex>
            <Flex gap={1}>
              <Card
                bg="blue.500"
                gap={3}
                flex={3}
                minH={"5dvh"}
                px={5}
                py={1}
                fontWeight={"Bold"}
                color="white"
                letterSpacing={1}
                shadow={"lg"}
                justify={"center"}
              >
                <chakra.h4>
                  {language === "en"
                    ? "Scientific Figures"
                    : language === "fr"
                    ? "Personnalités scientifiques"
                    : "شخصيات علمية"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                {scientificCouncilMembers.scientificPersonalitiesFromTheAcademicAndScientificResearchWorld.map(
                  (responsable) => {
                    return (
                      <chakra.h5 key={responsable.fr}>
                        {responsable?.[language]}
                      </chakra.h5>
                    );
                  }
                )}
              </Card>
            </Flex>
          </Flex>
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
        {/* <Box>
          {language && (
            <>
              <chakra.h2
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                {language === "en"
                  ? "Managers of Specialized Units"
                  : language === "fr"
                  ? "Responsables des Unités Spécialisées"
                  : "مدراء الوحدات المتخصصة"}
              </chakra.h2>
              <List spacing={4} mb={5}>
                {managersOfSpecializedUnitsData.map((unit, index) => (
                  <ListItem key={index} mx={5}>
                    <ListIcon
                      fontSize="lg"
                      as={GoPerson}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    {unit.title?.[language]}
                  </Highlight>
                  </Text>
                    </ListItem>
                ))}
              </List>
              <Divider
                my={5}
                _dark={{ bg: "secondary", borderColor: "secondary" }}
                orientation="horizontal"
                bg="primary"
                w="90%"
                mx="auto"
                borderColor="primary"
              />

              <chakra.h2
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                {language === "en"
                  ? "Representatives of Researchers"
                  : language === "fr"
                  ? "Représentants des Chercheurs"
                  : "ممثلو الباحثين"}
              </chakra.h2>
              <List spacing={4} mb={5}>
                {representativesOfResearchersData.map((rep, index) => (
                  <ListItem key={index} mx={5}>
                    <ListIcon
                      fontSize="lg"
                      as={GoPerson}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    {rep.title?.[language]} - {rep.grade?.[language]} (
                    {rep.description?.[language]})
                  </Highlight>
                  </Text>
                    </ListItem>
                ))}
              </List>
              <Divider
                my={5}
                _dark={{ bg: "secondary", borderColor: "secondary" }}
                orientation="horizontal"
                bg="primary"
                w="90%"
                mx="auto"
                borderColor="primary"
              />

              <chakra.h2
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                {language === "en"
                  ? "Representative of Iresa"
                  : language === "fr"
                  ? "Représentant de l'Iresa"
                  : "ممثل Iresa"}
              </chakra.h2>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>

                  <ListIcon
                    fontSize="lg"
                    as={GoPerson}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  
                  <Text
        
                textAlign="justify"
                color={"text"}
                fontSize="lg"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >  />
                  {representativeOfIresa.name?.[language]} -{" "}
                  {representativeOfIresa.grade?.[language]} (
                  {representativeOfIresa.description?.[language]})
                </Highlight>
                </Text>
                  </ListItem>
              </List>
              <Divider
                my={5}
                _dark={{ bg: "secondary", borderColor: "secondary" }}
                orientation="horizontal"
                bg="primary"
                w="90%"
                mx="auto"
                borderColor="primary"
              />

              <chakra.h2
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                {language === "en"
                  ? "Representatives of Agricultural Research and Higher Education Establishments"
                  : language === "fr"
                  ? "Représentants des Établissements de Recherche et d'Enseignement Supérieur Agricoles"
                  : "ممثلو مؤسسات البحث والتعليم العالي الزراعي"}
              </chakra.h2>
              <List spacing={4} mb={5}>
                {representativesOfAgriculturalResearchAndHigherEducationEstablishments.map(
                  (rep, index) => (
                    <ListItem key={index} mx={5}>
                      <ListIcon
                        fontSize="lg"
                        as={GoPerson}
                        color="primary"
                        _dark={{ color: "secondary" }}
                      />
                      {rep.title?.[language]} - {rep.grade?.[language]} (
                      {rep.description?.[language]})
                    </Highlight>
                    </Text>
                      </ListItem>
                  )
                )}
              </List>
              <Divider
                my={5}
                _dark={{ bg: "secondary", borderColor: "secondary" }}
                orientation="horizontal"
                bg="primary"
                w="90%"
                mx="auto"
                borderColor="primary"
              />

              <chakra.h2
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                {language === "en"
                  ? "Scientific Personalities from the Academic and Scientific Research World"
                  : language === "fr"
                  ? "Personnalités Scientifiques du Monde Académique et de la Recherche Scientifique"
                  : "الشخصيات العلمية من العالم الأكاديمي والبحث العلمي"}
              </chakra.h2>
              <List spacing={4} mb={5}>
                {scientificPersonalitiesFromTheAcademicAndScientificResearchWorld.map(
                  (person, index) => (
                    <ListItem key={index} mx={5}>
                      <ListIcon
                        fontSize="lg"
                        as={GoPerson}
                        color="primary"
                        _dark={{ color: "secondary" }}
                      />
                      {person.name?.[language]} - {person.grade?.[language]}
                      <br />
                    </Highlight>
                    </Text>
                      </ListItem>
                  )
                )}
              </List>
            </>
          )}
        </Box> */}
      </Flex>
    </>
  );
};

export default ScientificOrganization;

/*
{
fr:{
  <>
  <chakra.h3
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                Membres du Conseil Scientifique (Arrêté 315 du 4 avril 2024) :
              </chakra.h3>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>

                  <ListIcon
                    fontSize={"xl"}
                    as={GoPersonFill}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  
                  <Text
        
                textAlign="justify"
                color={"text"}
                fontSize="lg"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >  />
                  Prof. Taoufik BETTAIEB - Directeur Général du CRRHAB
                  (Président)
                </Highlight>
                </Text>
                  </ListItem>
                <ListItem mx={5}>

                  <ListIcon
                    fontSize={"xl"}
                    as={GoPerson}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  
                  <Text
        
                textAlign="justify"
                color={"text"}
                fontSize="lg"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >  />
                  M. Atef MOUGOU - Secrétaire Général (Rapporteur)
                </Highlight>
                </Text>
                  </ListItem>
              </List>
              <chakra.h3
                mx={5}
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                Chefs des Structures RDI :
              </chakra.h3>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>

                  <ListIcon
                    fontSize={"xl"}
                    as={MdPersonSearch}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  
                  <Text
        
                textAlign="justify"
                color={"text"}
                fontSize="lg"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >  />
                  Prof. Mejda DAAMI-REMADI - Chef de Laboratoire
                </Highlight>
                </Text>
                  </ListItem>
              </List>
  </>
},
ar:{
  <>
  <chakra.h3
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                أعضاء المجلس العلمي (القرار 315 بتاريخ 4 أبريل 2024):
              </chakra.h3>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>

                  <ListIcon
                    fontSize={"xl"}
                    as={GoPersonFill}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  
                  <Text
        
                textAlign="justify"
                color={"text"}
                fontSize="lg"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >  />
                  الأستاذ طوفيق بيتايب - المدير العام لـ CRRHAB (الرئيس)
                </Highlight>
                </Text>
                  </ListItem>
                <ListItem mx={5}>

                  <ListIcon
                    fontSize={"xl"}
                    as={GoPerson}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  
                  <Text
        
                textAlign="justify"
                color={"text"}
                fontSize="lg"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >  />
                  السيد عاطف موغو - السكرتير العام (المقرر)
                </Highlight>
                </Text>
                  </ListItem>
              </List>
              <chakra.h3
                mx={5}
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                رؤساء هياكل البحث والتطوير:
              </chakra.h3>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>

                  <ListIcon
                    fontSize={"xl"}
                    as={MdPersonSearch}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  
                  <Text
        
                textAlign="justify"
                color={"text"}
                fontSize="lg"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >  />
                  الأستاذة مجدة دامي-رماضي - رئيسة المختبر
                </Highlight>
                </Text>
                  </ListItem>
              </List>
  </>
},
en:{
  <>
  <chakra.h3
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                Members of the Scientific Council (Order 315 of April 4, 2024):
              </chakra.h3>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>

                  <ListIcon
                    fontSize={"xl"}
                    as={GoPersonFill}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  
                  <Text
        
                textAlign="justify"
                color={"text"}
                fontSize="lg"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >  />
                  Prof. Taoufik BETTAIEB - General Director of CRRHAB
                  (President)
                </Highlight>
                </Text>
                  </ListItem>
                <ListItem mx={5}>

                  <ListIcon
                    fontSize={"xl"}
                    as={GoPerson}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  
                  <Text
        
                textAlign="justify"
                color={"text"}
                fontSize="lg"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >  />
                  Mr. Atef MOUGOU - General Secretary (Reporter)
                </Highlight>
                </Text>
                  </ListItem>
              </List>
              <chakra.h3
                mx={5}
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                Heads of RDI Structures:
              </chakra.h3>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>

                  <ListIcon
                    fontSize={"xl"}
                    as={MdPersonSearch}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  
                  <Text
        
                textAlign="justify"
                color={"text"}
                fontSize="lg"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >  />
                  Prof. Mejda DAAMI-REMADI - Laboratory Chief
                </Highlight>
                </Text>
                  </ListItem>
              </List>
  </>
}

}
*/
