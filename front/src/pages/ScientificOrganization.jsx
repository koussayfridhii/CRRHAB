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
import { useCallApi } from "../hooks/useCallApi";
import Spinner from "../components/spinner/Spinner";

const ScientificOrganization = () => {
  const language = useSelector((state) => state.language.language);
  const { data, error, isLoading } = useCallApi("scientific_council");

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error fetching data[0]: {error.message}</div>;
  }

  return (
    <>
      <Flex
        direction="column"
        w={{ base: "full" }}
        bg={"background"}
        mx={"auto"}
        my={10}
        borderRadius={10}
        shadow={"lg"}
        px={10}
        py={7}
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
              <UnorderedList>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    A research laboratory.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    Three agricultural experimentation units.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    A unit for the valorization of research results.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    A unit for scientific information and documentation.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    A Scientific Council (Article 4 of Decree No. 2006-3057 of
                    November 20, 2006).
                  </Text>
                </ListItem>
              </UnorderedList>
              <br />
              <Text fontSize={"lg"} color={"text"} mb={4}>
                The Scientific Council is the reflection and proposal body on
                the scientific policy of the establishment. To this end, it is
                notably responsible for:
              </Text>
              <UnorderedList spacing={4} mb={5}>
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
              </UnorderedList>
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
              <UnorderedList>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    Un laboratoire de recherche.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    Trois unités d’expérimentation agricole.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    Une unité de valorisation des résultats de la recherche.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    Une unité d’information et de documentation scientifique.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    Un conseil scientifique (Article 4 du Décret N° 2006-3057 du
                    20 novembre 2006).
                  </Text>
                </ListItem>
              </UnorderedList>
              <br />
              <Text fontSize={"lg"} color={"text"} mb={4}>
                Le Conseil scientifique est l’organe de réflexion et de
                proposition sur la politique scientifique de l’établissement. A
                ce titre, il est notamment chargé de :
              </Text>
              <UnorderedList spacing={4} mb={5}>
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
              </UnorderedList>
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
                 يشتمل التنظيم العلمي للمركز على:
                </Highlight>
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                  مخبر البحوث، كهيكل بحث وحيد في الوقت الحالي
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    ثلاث وحدات للتجارب الزراعية.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                    وحدة لتثمين نتائج البحث.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                  وحدة الاعلام والتوثيق العلمي.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
                  المجلس العلمي للمركز (المادة 4 من الأمر عدد 2006-3057 المؤرخ 20 نوفمبر 2006)
                  </Text>
                </ListItem>
              </UnorderedList>
              <br />
              <Text fontSize={"lg"} color={"text"} mb={4}>
              المجلس العلمي هو الهيئة المسؤولة عن التفكير وتقديم الاقتراحات حول السياسة العلمية للمؤسسة. ولهذا الغرض، فهو مكلف بـ:
              </Text>
              <UnorderedList spacing={4} mb={5}>
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                    إبداء الآراء حول جميع المسائل المتعلقة بالسياسة العلمية للمؤسسة، وخاصة برامج البحث التي يتعين القيام بها.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
اقتراح أنشطة التثمين وتطبيق نتائج البحث بالإضافة إلى أنشطةالاعلام والتوثيق العلمي.

                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
                <ListItem mx={1}>
                  <Text textAlign="justify" color={"text"} fontSize="lg" mb={2}>
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
              </UnorderedList>
              <Text fontSize={"lg"} color={"text"} my={4}>
              بالإضافة إلى جلساته العادية المذكورة في المادة 6 من الأمر عدد 97-938 المؤرخ 19 ماي 1997، يعقد المجلس العلمي للمركز جلسة سنوية لتقييم الأنشطة العلمية للمؤسسة. 
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
              : "تركيبة المجلس العلمي للمركز:"}
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
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                <chakra.h5>{data[0].president?.[language]}</chakra.h5>
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
                    ? "Rapporteur"
                    : language === "fr"
                    ? "Rapporteur"
                    : "المقرر"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                <chakra.h5>{data[0].rapporteur?.[language]}</chakra.h5>
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
                    : "رؤساء الهياكل البحث والتطوير"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                {data[0].Responsables_des_structures_RDI.map((responsable) => {
                  return (
                    <chakra.h5 key={responsable.fr}>
                      {responsable?.[language]}
                    </chakra.h5>
                  );
                })}
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
                {data[0].managersOfSpecializedUnits.map((responsable) => {
                  return (
                    <chakra.h5 key={responsable.fr}>
                      {responsable?.[language]}
                    </chakra.h5>
                  );
                })}
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
                {data[0].representativesOfResearchers.map((responsable) => {
                  return (
                    <chakra.h5 key={responsable.fr}>
                      {responsable?.[language]}
                    </chakra.h5>
                  );
                })}
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
                    : "ممثل عن مؤسسة البحث والتعليم العالي الفلاحي IRESA"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                <chakra.h5>
                  {data[0].representativeOfIresa?.[language]}
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
                    : "ممثلو مؤسسات التعليم العالي والبحث الفلاحي"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                {data[0].representativesOfAgriculturalResearchAndHigherEducationEstablishments.map(
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
                    : "شخصيات من الوسط العلمي"}
                </chakra.h4>
              </Card>
              <Card bg="#8fa8c1" flex={5} gap={3} minH={"5dvh"} px={5} py={1}>
                {data[0].scientificPersonalitiesFromTheAcademicAndScientificResearchWorld.map(
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
      </Flex>
    </>
  );
};

export default ScientificOrganization;
