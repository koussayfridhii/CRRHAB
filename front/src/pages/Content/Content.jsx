import React from "react";
import "./Content.scss";
import {
  Box,
  Card,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Text,
  chakra,
  TabPanels,
  TabPanel,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Faq from "../../components/Faq";
import FaqV2 from "../../components/FaqV2";
import StatsV1 from "../../components/stats/statsV1/Stats";
import { FaCheck } from "react-icons/fa";
import { LiaDiscourse } from "react-icons/lia";
import { CiMonitor } from "react-icons/ci";
import { SiValorant } from "react-icons/si";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { GiThink } from "react-icons/gi";
import { MdOutlineEditCalendar, MdPersonSearch } from "react-icons/md";
import { GoPersonFill, GoPerson } from "react-icons/go";
import { BsPersonCircle } from "react-icons/bs";
import Milestones from "../../components/Timeline";

const Content = () => {
  const language = useSelector((state) => state.language.language);
  const sectionHeaders = [
    {
      title: {
        fr: "En savoir plus",
        en: "More Information",
        ar: "للمزيد من المعلومات",
      },
    },
    {
      title: {
        fr: "Missions",
        en: "Missions",
        ar: "مهام المؤسسة",
      },
    },
    {
      title: {
        fr: "FAQ",
        en: "FAQ",
        ar: "أسئلة متكررة",
      },
    },
  ];
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
        fr: "Pr Mohamed BRAHAM",
        en: "Pr Mohamed BRAHAM",
        ar: "الأستاذ محمد براهم",
      },
      description: {
        fr: "Corps A",
        en: "Body A",
        ar: "القسم 1",
      },
    },
    {
      title: {
        fr: "MA Hela CHIKH ROUHOU",
        en: "MA Hela CHIKH ROUHOU",
        ar: "الأستاذة المساعدة هلا شيخ روحو",
      },
      description: {
        fr: "Corps B",
        en: "Body B",
        ar: "القسم 2",
      },
    },
    {
      title: {
        fr: "MA Chokri BAYOUDH",
        en: "MA Chokri BAYOUDH",
        ar: "الأستاذ المساعد شكري بيوض",
      },
      description: {
        fr: "Corps B",
        en: "Body B",
        ar: "القسم 2",
      },
    },
  ];
  return (
    <Box
      bg={"background"}
      py={6}
      px={10}
      my={6}
      mr={4}
      shadow={"2xl"}
      className="content"
      w={{ base: "100dvw", "2xl": "75dvw" }}
      borderRadius={"lg"}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <section>
        <StatsV1 />
      </section>
      <section>
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
          {sectionHeaders[1]?.title?.[language]}
        </Heading>
        <Card py={3} px={5} mb={6}>
          <Text>
            {language === "fr"
              ? `Les missions du Centre Régional des Recherches en Horticulture et
          Agriculture Biologique (CRRHAB) s’inscrivent dans le cadre de la
          stratégie de la régionalisation et de la décentralisation de la
          recherche, adoptée par l’IRESA :`
              : language === "en"
              ? `The missions of the Regional Center for Research in Horticulture and Organic Agriculture (CRRHAB) are part of the regionalization and decentralization strategy for research adopted by the Arab Organization for Agricultural Research (AORA):`
              : `تندرج مهام المركز الجهوي للبحوث في البستنة والزراعة العضوية (CRRHAB) في إطار استراتيجية اللامركزية واللامركزية للأبحاث التي اعتمدتها المنظمة العربية للبحوث الزراعية (إريسا):`}
          </Text>
          <OrderedList mx={10} my={5}>
            {missions.map((mission) => {
              return (
                <ListItem mx={5} key={mission.fr}>
                  {mission[language]}
                </ListItem>
              );
            })}
          </OrderedList>
          <Text>
            {language === "fr"
              ? `De plus, le CRRHAB est fortement impliqué dans la formation par la recherche, par des
            stages, des thèses de doctorat ou des post-doctorats de jeunes scientifiques ainsi que
            d’étudiantes et étudiants.`
              : language === "en"
              ? `In addition, the CRRHAB is heavily involved in training through research, through internships, doctoral theses, and postdoctoral training for young scientists and students.`
              : `بالإضافة إلى ذلك، يشارك المركز الجهوي للبحوث في البستنة والزراعة العضوية بشكل كبير في التدريب من خلال البحث، من خلال التدريبات، وأطروحات الدكتوراه، وما بعد الدكتوراه للعلماء الشباب، وكذلك الطلاب.`}
          </Text>
        </Card>
      </section>

      <section>
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
            ? "SCIENTIFIC ORGANIZATION OF THE CENTER"
            : language === "fr"
            ? "ORGANISATION SCIENTIFIQUE DU CENTRE"
            : "التنظيم العلمي للمركز"}
        </Heading>
        <Tabs colorScheme="green" _dark={{ colorScheme: "blue" }}>
          <TabList>
            <Tab>
              {language === "en"
                ? "Scientific Council"
                : language === "fr"
                ? "Conseil Scientifique"
                : "المجلس العلمي"}
            </Tab>
            <Tab>
              {language === "en"
                ? "Managers of specialized units"
                : language === "fr"
                ? "Responsables des unités spécialisées"
                : "مدراء الوحدات المتخصصة"}
            </Tab>
            <Tab>
              {language === "en"
                ? "Representatives of Researchers (elected members)"
                : language === "fr"
                ? "Représentants des Chercheurs (Membres élus)"
                : "ممثلو الباحثين (أعضاء منتخبون)"}
            </Tab>
            <Tab>
              {language === "en"
                ? "Representative of IRESA"
                : language === "fr"
                ? "Représentant de l’IRESA"
                : "ممثل إيريزا"}
            </Tab>
            <Tab>
              {language === "en"
                ? "Representatives of agricultural research and higher education establishments"
                : language === "fr"
                ? "Représentants des établissements de la recherche et l’enseignement supérieur agricoles"
                : "ممثلو مؤسسات البحث الزراعي والتعليم العالي"}
            </Tab>
            <Tab>
              {language === "en"
                ? "Representatives of agricultural research and higher education establishments"
                : language === "fr"
                ? "Personnalités scientifiques du monde universitaire et de la recherche scientifique"
                : "ممثلو مؤسسات البحث الزراعي والتعليم العالي"}
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {language === "en" ? (
                <>
                  <chakra.h2
                    fontSize={"xxxl"}
                    color={"primary"}
                    fontWeight={"bold"}
                  >
                    Scientific Council
                  </chakra.h2>
                  <chakra.p>
                    According to Article 4 of Decree No. 2006-3057 of November
                    20, 2006 establishing the scientific organization of CRRHAB,
                    a Scientific Council of the Center is established to carry
                    out the missions provided for in Article 3 of Decree No.
                    97-938 of May 19, 1997.
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
                      Provide advice on all matters related to the scientific
                      policy of the establishment, including research programs
                      to be undertaken.
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
                      Examine the final versions of the establishment's
                      scientific reports.
                    </ListItem>
                  </List>
                  <chakra.h3
                    fontSize={"xxl"}
                    color={"primary"}
                    _dark={{ color: "secondary" }}
                    mb={4}
                  >
                    Members of the Scientific Council (Order 315 of April 4,
                    2024):
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
                    fontSize={"xxxl"}
                    color={"primary"}
                    fontWeight={"bold"}
                  >
                    Conseil Scientifique
                  </chakra.h2>
                  <chakra.p>
                    Conformément à l'article 4 du décret n° 2006-3057 du 20
                    novembre 2006 portant création de l'organisation
                    scientifique du CRRHAB, un Conseil Scientifique du Centre
                    est créé pour accomplir les missions prévues à l'article 3
                    du décret n° 97-938 du 19 mai 1997.
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
                      Proposer des activités de valorisation et d'application
                      des résultats de recherche, ainsi que des activités
                      d'information et de documentation scientifiques.
                    </ListItem>
                    <ListItem mx={5}>
                      <ListIcon
                        fontSize={"xl"}
                        as={FaArrowUpFromWaterPump}
                        color="primary"
                        _dark={{ color: "secondary" }}
                      />
                      Proposer des activités de développement professionnel
                      jugées nécessaires.
                    </ListItem>
                    <ListItem mx={5}>
                      <ListIcon
                        fontSize={"xl"}
                        as={GiThink}
                        color="primary"
                        _dark={{ color: "secondary" }}
                      />
                      Donner des avis sur les propositions d'accords de
                      coopération scientifique.
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
                      Examiner les versions finales des rapports scientifiques
                      de l'établissement.
                    </ListItem>
                  </List>
                  <chakra.h3
                    fontSize={"xxl"}
                    color={"primary"}
                    _dark={{ color: "secondary" }}
                    mb={4}
                  >
                    Membres du Conseil Scientifique (Arrêté 315 du 4 avril 2024)
                    :
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
                    fontSize={"xxxl"}
                    color={"primary"}
                    fontWeight={"bold"}
                  >
                    المجلس العلمي
                  </chakra.h2>
                  <chakra.p>
                    وفقًا للمادة 4 من المرسوم رقم 2006-3057 الصادر في 20 نوفمبر
                    2006، والذي ينص على إنشاء التنظيم العلمي لمركز CRRHAB، يتم
                    إنشاء مجلس علمي للمركز لتنفيذ المهام المنصوص عليها في المادة
                    3 من المرسوم رقم 97-938 الصادر في 19 مايو 1997.
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
            </TabPanel>
            <TabPanel>
              <chakra.h2
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
            </TabPanel>
            <TabPanel>
              <chakra.h2
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
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
            <TabPanel>
              <p>five!</p>
            </TabPanel>
            <TabPanel>
              <p>six!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
      <section>
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
          {sectionHeaders[2]?.title?.[language]}
        </Heading>
        {/* <Faq /> */}
        <FaqV2 />
      </section>
    </Box>
  );
};

export default Content;
