import {
  Box,
  Card,
  Divider,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
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
        w={{ base: "full", "2xl": "75%" }}
        bg={"background"}
        mx={"auto"}
        my={10}
        borderRadius={10}
        shadow={"lg"}
        px={10}
        py={5}
        dir={language === "ar" ? "rtl" : "ltr"}
        gap={10}
      >
        <Box>
          {language === "en" ? (
            <>
              <chakra.h2
                mx={"auto"}
                fontSize={"xxxl"}
                color={"primary"}
                fontWeight={"bold"}
              >
                Scientific Council
              </chakra.h2>
              <chakra.p>
                According to Article 4 of Decree No. 2006-3057 of November 20,
                2006 establishing the scientific organization of CRRHAB, a
                Scientific Council of the Center is established to carry out the
                missions provided for in Article 3 of Decree No. 97-938 of May
                19, 1997.
              </chakra.p>
              <chakra.h3
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                Missions:
              </chakra.h3>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={LiaDiscourse}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Provide advice on all matters related to the scientific policy
                  of the establishment, including research programs to be
                  undertaken.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={CiMonitor}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Monitor the research activities of the establishment.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={SiValorant}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Propose activities for the valorization and application of
                  research results, as well as activities for scientific
                  information and documentation.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={FaArrowUpFromWaterPump}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Propose professional development activities as deemed
                  necessary.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={GiThink}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Provide opinions on proposals for scientific cooperation
                  agreements.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={MdOutlineEditCalendar}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Express the needs of the different structures of the
                  establishment in scientific and technical personnel.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={FaCheck}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Examine the final versions of the establishment's scientific
                  reports.
                </ListItem>
              </List>
            </>
          ) : language === "fr" ? (
            <>
              <chakra.h2
                mx={"auto"}
                fontSize={"xxxl"}
                color={"primary"}
                fontWeight={"bold"}
              >
                Conseil Scientifique
              </chakra.h2>
              <chakra.p>
                Conformément à l'article 4 du décret n° 2006-3057 du 20 novembre
                2006 portant création de l'organisation scientifique du CRRHAB,
                un Conseil Scientifique du Centre est créé pour accomplir les
                missions prévues à l'article 3 du décret n° 97-938 du 19 mai
                1997.
              </chakra.p>
              <chakra.h3
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                Missions :
              </chakra.h3>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={LiaDiscourse}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Donner des avis sur toutes les questions relatives à la
                  politique scientifique de l'établissement, y compris les
                  programmes de recherche à entreprendre.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={CiMonitor}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Suivre les activités de recherche de l'établissement.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={SiValorant}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Proposer des activités de valorisation et d'application des
                  résultats de recherche, ainsi que des activités d'information
                  et de documentation scientifiques.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={FaArrowUpFromWaterPump}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Proposer des activités de développement professionnel jugées
                  nécessaires.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={GiThink}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Donner des avis sur les propositions d'accords de coopération
                  scientifique.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={MdOutlineEditCalendar}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Exprimer les besoins des différentes structures de
                  l'établissement en personnel scientifique et technique.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={FaCheck}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Examiner les versions finales des rapports scientifiques de
                  l'établissement.
                </ListItem>
              </List>
            </>
          ) : (
            <>
              <chakra.h2
                mx={"auto"}
                fontSize={"xxxl"}
                color={"primary"}
                fontWeight={"bold"}
              >
                المجلس العلمي
              </chakra.h2>
              <chakra.p>
                وفقًا للمادة 4 من المرسوم رقم 2006-3057 الصادر في 20 نوفمبر
                2006، والذي ينص على إنشاء التنظيم العلمي لمركز CRRHAB، يتم إنشاء
                مجلس علمي للمركز لتنفيذ المهام المنصوص عليها في المادة 3 من
                المرسوم رقم 97-938 الصادر في 19 مايو 1997.
              </chakra.p>
              <chakra.h3
                fontSize={"xxl"}
                color={"primary"}
                _dark={{ color: "secondary" }}
                mb={4}
              >
                المهام:
              </chakra.h3>
              <List spacing={4} mb={5}>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={LiaDiscourse}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  تقديم المشورة في جميع الأمور المتعلقة بالسياسة العلمية
                  للمؤسسة، بما في ذلك برامج البحث التي سيتم تنفيذها.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={CiMonitor}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  متابعة الأنشطة البحثية للمؤسسة.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={SiValorant}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  اقتراح الأنشطة المتعلقة بتثمين وتطبيق نتائج البحث، وكذلك
                  الأنشطة المتعلقة بالمعلومات والتوثيق العلمي.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={FaArrowUpFromWaterPump}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  اقتراح الأنشطة التطويرية المهنية التي يتم اعتبارها ضرورية.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={GiThink}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  تقديم الآراء حول مقترحات اتفاقيات التعاون العلمي.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={MdOutlineEditCalendar}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  التعبير عن احتياجات الهياكل المختلفة للمؤسسة من الموظفين
                  العلميين والتقنيين.
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={FaCheck}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  فحص النسخ النهائية من التقارير العلمية للمؤسسة.
                </ListItem>
              </List>
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
                      fontSize="xl"
                      as={GoPerson}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    {unit.title?.[language]}
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
                      fontSize="xl"
                      as={GoPerson}
                      color="primary"
                      _dark={{ color: "secondary" }}
                    />
                    {rep.title?.[language]} - {rep.grade?.[language]} (
                    {rep.description?.[language]})
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
                    fontSize="xl"
                    as={GoPerson}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  {representativeOfIresa.name?.[language]} -{" "}
                  {representativeOfIresa.grade?.[language]} (
                  {representativeOfIresa.description?.[language]})
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
                        fontSize="xl"
                        as={GoPerson}
                        color="primary"
                        _dark={{ color: "secondary" }}
                      />
                      {rep.title?.[language]} - {rep.grade?.[language]} (
                      {rep.description?.[language]})
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
                        fontSize="xl"
                        as={GoPerson}
                        color="primary"
                        _dark={{ color: "secondary" }}
                      />
                      {person.name?.[language]} - {person.grade?.[language]}
                      <br />
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
                  />
                  Prof. Taoufik BETTAIEB - Directeur Général du CRRHAB
                  (Président)
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={GoPerson}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  M. Atef MOUGOU - Secrétaire Général (Rapporteur)
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
                  />
                  Prof. Mejda DAAMI-REMADI - Chef de Laboratoire
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
                  />
                  الأستاذ طوفيق بيتايب - المدير العام لـ CRRHAB (الرئيس)
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={GoPerson}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  السيد عاطف موغو - السكرتير العام (المقرر)
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
                  />
                  الأستاذة مجدة دامي-رماضي - رئيسة المختبر
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
                  />
                  Prof. Taoufik BETTAIEB - General Director of CRRHAB
                  (President)
                </ListItem>
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={GoPerson}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Mr. Atef MOUGOU - General Secretary (Reporter)
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
                  />
                  Prof. Mejda DAAMI-REMADI - Laboratory Chief
                </ListItem>
              </List>
  </>
}

}
*/
