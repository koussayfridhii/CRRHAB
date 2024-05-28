import {
  Box,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import Milestones from "../components/Timeline";
import ProfileCard from "../components/cards/profileCard/Card";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { LiaDiscourse } from "react-icons/lia";
import { CiMonitor } from "react-icons/ci";
import { SiValorant } from "react-icons/si";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { GiThink } from "react-icons/gi";
import { MdOutlineEditCalendar, MdPersonSearch } from "react-icons/md";
import { GoPersonFill, GoPerson } from "react-icons/go";
import { BsPersonCircle } from "react-icons/bs";
const ScientificOrganization = () => {
  const language = useSelector((state) => state.language.language);
  const managersOfSpecializedUnitsData = [
    {
      title: {
        fr: "Responsable de l’unité d’information et de documentation scientifique",
        en: "Head of the scientific information and documentation unit",
        ar: "رئيس وحدة المعلومات والتوثيق العلمي",
      },
      description: {
        fr: "Responsable de l’unité d’information et de documentation scientifique",
        en: "Head of the scientific information and documentation unit",
        ar: "رئيس وحدة المعلومات والتوثيق العلمي",
      },
    },
    {
      title: {
        fr: "Responsable de l’unité de valorisation des résultats de recherche",
        en: "Head of the Research Results Valorization Unit",
        ar: "مسؤول وحدة تثمين نتائج البحث",
      },
      description: {
        fr: "Responsable de l’unité de valorisation des résultats de recherche",
        en: "Head of the Research Results Valorization Unit",
        ar: "مسؤول وحدة تثمين نتائج البحث",
      },
    },
    {
      title: {
        fr: "Responsable de l’unité d’expérimentations agricoles",
        en: "Head of the Agricultural Experimentation Unit",
        ar: "مسؤول وحدة التجارب الزراعية",
      },
      description: {
        fr: "Responsable de l’unité d’expérimentations agricoles",
        en: "Head of the Agricultural Experimentation Unit",
        ar: "مسؤول وحدة التجارب الزراعية",
      },
    },
  ];
  const representativesOfResearchersData = [
    {
      title: {
        fr: "Mohamed BRAHAM",
        en: "Mohamed BRAHAM",
        ar: "الأستاذ محمد براهم",
      },
      description: {
        fr: "Corps A",
        en: "Body A",
        ar: "القسم 1",
      },
      grade: {
        fr: "Professeur",
        en: "Professor",
        ar: "أستاذ",
      },
    },
    {
      title: {
        fr: "Hela CHIKH ROUHOU",
        en: "Hela CHIKH ROUHOU",
        ar: "هلا شيخ روحو",
      },
      grade: {
        fr: "Maitre Assistant",
        en: "Assistant Professor",
        ar: "أستاذة مساعدة",
      },
      description: {
        fr: "Corps B",
        en: "Body B",
        ar: "القسم 2",
      },
    },
    {
      title: {
        fr: "Chokri BAYOUDH",
        en: "Chokri BAYOUDH",
        ar: "شكري بيوض",
      },
      grade: {
        fr: "Maitre Assistant",
        en: "Assistant Professor",
        ar: "أستاذ مساعد",
      },
      description: {
        fr: "Corps B",
        en: "Body B",
        ar: "القسم 2",
      },
    },
  ];
  const representativeOfIresa = {
    name: {
      fr: "Rajouene MAJDOUD",
      en: "Rajouene MAJDOUD",
      ar: "رجوان مجدود",
    },
    grade: {
      fr: "Professeur",
      en: "Professor",
      ar: "أستاذ",
    },
    description: {
      fr: "Directeur de L'université de Sousse",
      en: "Director of the University of Sousse",
      ar: "مدير جامعة سوسة",
    },
    socialMedia: "https://www.researchgate.net/profile/Rajouene-Majdoub",
    profilePic:
      "https://i1.rgstatic.net/ii/profile.image/1131109517672449-1646688932811_Q128/Rajouene-Majdoub.jpg",
  };
  const representativesOfAgriculturalResearchAndHigherEducationEstablishments =
    [
      {
        title: {
          fr: "Walid HAMADA",
          en: "Walid Hamada",
          ar: "وليد حمادة",
        },
        grade: {
          fr: "Professeur",
          en: "Professor",
          ar: "أستاذ",
        },
        description: {
          fr: "INAT",
          en: "INAT",
          ar: "INAT",
        },
      },
      {
        title: {
          fr: "Thouraya RHIM",
          en: "Thouraya Rhim",
          ar: "ثريا ريم",
        },
        grade: {
          fr: "Docteur",
          en: "Doctor",
          ar: "دكتور",
        },
        description: {
          fr: "INRAT",
          en: "INRAT",
          ar: "INRAT",
        },
      },
      {
        title: {
          fr: "Lamia HAMROUNI",
          en: "Lamia Hamrouni",
          ar: "لاميا الحمروني",
        },
        grade: {
          fr: "Professeur",
          en: "Professor",
          ar: "أستاذ",
        },
        description: {
          fr: "INRGREF",
          en: "INRGREF",
          ar: "INRGREF",
        },
      },
      {
        title: {
          fr: "Khaled Hibar",
          en: "Khaled Hibar",
          ar: "خالد حبار",
        },
        grade: {
          fr: "Docteur",
          en: "Doctor",
          ar: "دكتور",
        },
        description: {
          fr: "IO",
          en: "IO",
          ar: "IO",
        },
      },
    ];
  const scientificPersonalitiesFromTheAcademicAndScientificResearchWorld = [
    {
      name: {
        fr: "Olfa AYARI",
        en: "Olfa AYARI",
        ar: "ألفة عياري",
      },
      grade: {
        fr: "Docteur",
        en: "Doctor",
        ar: "دكتورة",
      },
      description: {
        fr: `maître assistante en Biologie Végétale à l'Institut Supérieur de Biotechnologie de Monastir. Je fais partie du Département des Sciences du Vivant et Biotechnologie. Je suis également la coordinatrice de la "Licence co-construite en Biotechnologie Végétale et Valorisation (BVV)" et responsable du groupe pédagogique Biologie Végétale.`,
        en: `Assistant Professor in Plant Biology at the Higher Institute of Biotechnology of Monastir. I am part of the Department of Life Sciences and Biotechnology. I am also the coordinator of the "Joint Degree in Plant Biotechnology and Valorization (BVV)" and responsible for the Plant Biology teaching group.`,
        ar: `أستاذة مساعدة في علم الأحياء النباتية في المعهد العالي للتكنولوجيا الحيوية بالمنستير. أنا جزء من قسم علوم الحياة والتكنولوجيا الحيوية. أنا أيضًا منسقة "الإجازة المشتركة في التكنولوجيا الحيوية النباتية والتثمين (BVV)" ومسؤولة عن مجموعة تدريس علم الأحياء النباتية.`,
      },
      socialMedia: "https://www.linkedin.com/in/olfa-ayari-2bb76b208/",
      profilePic:
        "https://media.licdn.com/dms/image/C5603AQFjeSGmsCyadQ/profile-displayphoto-shrink_800_800/0/1614810607828?e=1721260800&v=beta&t=jnpPQmXDUcJWqb2LpSDlKba7jnVBqyYe15MWRwwa5WA",
    },
  ];
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
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={BsPersonCircle}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Heads of RDI Structures:
                </ListItem>
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
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={BsPersonCircle}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  Chefs des Structures RDI :
                </ListItem>
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
                <ListItem mx={5}>
                  <ListIcon
                    fontSize={"xl"}
                    as={BsPersonCircle}
                    color="primary"
                    _dark={{ color: "secondary" }}
                  />
                  رؤساء هياكل البحث والتطوير:
                </ListItem>
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
            mx={"auto"}
            fontSize={"xxxl"}
            color={"primary"}
            fontWeight={"bold"}
            my={5}
          >
            {language === "en"
              ? "Managers of Specialized Units"
              : language === "fr"
              ? "Responsables des Unités Specialisées"
              : "مدراء الوحدات المتخصصة"}
          </chakra.h2>
          <Milestones
            data={managersOfSpecializedUnitsData}
            language={language}
          />
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
            mx={"auto"}
            fontSize={"xxxl"}
            color={"primary"}
            fontWeight={"bold"}
            my={5}
          >
            {language === "en"
              ? "Representatives of Researchers (elected members)"
              : language === "fr"
              ? "Représentants des Chercheurs (Membres élus)"
              : "ممثلو الباحثين (أعضاء منتخبون)"}
          </chakra.h2>
          <Milestones
            data={representativesOfResearchersData}
            language={language}
          />
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
            mx={"auto"}
            fontSize={"xxxl"}
            color={"primary"}
            fontWeight={"bold"}
            my={5}
          >
            {language === "en"
              ? "Representative of IRESA"
              : language === "fr"
              ? "Représentant de l’IRESA"
              : "ممثل إيريزا"}
          </chakra.h2>
          <ProfileCard data={representativeOfIresa} language={language} />
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
            mx={"auto"}
            fontSize={"xxxl"}
            color={"primary"}
            fontWeight={"bold"}
            my={5}
          >
            {language === "en"
              ? "Representatives of agricultural research and higher education establishments"
              : language === "fr"
              ? "Représentants des établissements de la recherche et l’enseignement supérieur agricoles"
              : "ممثلو مؤسسات البحث الزراعي والتعليم العالي"}
          </chakra.h2>
          <Milestones
            data={
              representativesOfAgriculturalResearchAndHigherEducationEstablishments
            }
            language={language}
          />
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
            mx={"auto"}
            fontSize={"xxxl"}
            color={"primary"}
            fontWeight={"bold"}
            my={5}
          >
            {language === "en"
              ? "Scientific personalities from the academic and scientific research world"
              : language === "fr"
              ? "Personnalités scientifiques du monde universitaire et de la recherche scientifique"
              : "الشخصيات العلمية من العالم الجامعي والبحث العلمي"}
          </chakra.h2>
          {scientificPersonalitiesFromTheAcademicAndScientificResearchWorld.map(
            (item, index) => (
              <ProfileCard key={index} data={item} language={language} />
            )
          )}
        </Box>
      </Flex>
    </>
  );
};

export default ScientificOrganization;
