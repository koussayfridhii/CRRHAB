import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Wrap,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  ButtonGroup,
  IconButton,
  chakra,
  useToast,
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
// import ResearchTeam from "../researchStructures/ResearchTeam";
import { Link, useLocation, useNavigate } from "react-router-dom";
import dataAdminPages from "../../../dataAdminPages";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
// import Table from "../../components/tables/tableV2/Table";

const AdminResearchTeam = () => {
  const [data, setData] = useState([
    {
      name: {
        fr: "BETTAIEB Taoufik",
        ar: "توفيق بالطيبي",
        en: "BETTAIEB Taoufik",
      },
      email: "tbettaieb@yahoo.fr",
      orcid: "0000-0002-0053-848X",
      cv: "./assets/cv/CV Taoufik BETTAIEB.pdf",
      speciality: {
        fr: "Sciences Horticoles",
        ar: "علوم البستنة",
        en: "Sciences Horticoles",
      },
    },
    {
      name: {
        fr: "DAAMI-remadi Majda",
        ar: "مجدى دعامي-رمادي",
        en: "DAAMI-remadi Majda",
      },
      email: "mejda.daami@gmail.com",
      orcid: "0000-0003-2239-5624",
      cv: "./assets/cv/CV-Daami-Remadi.pdf",
      speciality: {
        fr: "Phytomycologie",
        ar: "علم الفطريات النباتية",
        en: "Phytomycologie",
      },
    },
    {
      name: {
        fr: "BRAHAM Mohamed",
        ar: "محمد براهم",
        en: "BRAHAM Mohamed",
      },
      email: "braham.mohamed@gmail.com",
      orcid: "0000-0003-3913-5175",
      cv: "./assets/cv/CV  Mohamed BRAHAM.pdf",
      speciality: {
        fr: "Entomologie",
        ar: "علم الحشرات",
        en: "Entomologie",
      },
    },
    {
      name: {
        fr: "LAARIF Asma",
        ar: "أسماء العريف",
        en: "LAARIF Asma",
      },
      email: "laarif.asma@iresa.agrinet.tn",
      orcid: "0000-0003-2792-9904",
      cv: "./assets/cv/CV Asma laarif.pdf",
      speciality: {
        fr: "Entomologie",
        ar: "علم الحشرات",
        en: "Entomologie",
      },
    },
    {
      name: {
        fr: "CHAIEB Ikbal",
        ar: "اقبال الشايب",
        en: "CHAIEB Ikbal",
      },
      email: "ikbal_c@yahoo.fr",
      orcid: "0000-0002-7556-7197",
      cv: "./assets/cv/CV Ikbal Chaieb.pdf",
      speciality: {
        fr: "Entomologie",
        ar: "علم الحشرات",
        en: "Entomologie",
      },
    },
    {
      name: {
        fr: "DBARA Soumaya",
        ar: "سمية دبارة",
        en: "DBARA Soumaya",
      },
      email: "soumayadbara@yahoo.fr",
      orcid: "0000-0002-0095-9604",
      cv: "./assets/cv/CV Dbara Soumaya.pdf",
      speciality: {
        fr: "Horticulture",
        ar: "البستنة",
        en: "Horticulture",
      },
    },
    {
      name: {
        fr: "HATTAB Sabrine",
        ar: "سابرين حطاب",
        en: "HATTAB Sabrine",
      },
      email: "sabrine_hattab1@yahoo.fr",
      orcid: "0000-0003-1180-5253",
      cv: "./assets/cv/CV Hattab Sabrine.pdf",
      speciality: {
        fr: "Sciences du sol",
        ar: "علوم التربة",
        en: "Sciences du sol",
      },
    },
    {
      name: {
        fr: "ELBAZ Mounira",
        ar: "منيرة الباز",
        en: "ELBAZ Mounira",
      },
      email: "mounira_elbaz@yahoo.com",
      orcid: "0000-0001-9993-6260",
      cv: "",
      speciality: {
        fr: "Sélection et amélioration des plantes",
        ar: "اختيار وتحسين النباتات",
        en: "Sélection et amélioration des plantes",
      },
    },
    {
      name: {
        fr: "CHIKH ROUHOU Hela",
        ar: "حلة شيخ روحو",
        en: "CHIKH ROUHOU Hela",
      },
      email: "hela.chikh.rouhou@gmail.com",
      orcid: "0000-0003-3631-5680",
      cv: "./assets/cv/CV Hela ChikhRouhou.pdf",
      speciality: {
        fr: "Cultures maraîchères",
        ar: "زراعة الخضروات",
        en: "Cultures maraîchères",
      },
    },
    {
      name: {
        fr: "MANSOUR Mohsen",
        ar: "محسن منصور",
        en: "MANSOUR Mohsen",
      },
      email: "mansourmohsen@gmail.com",
      orcid: "0000-0002-7526-4540",
      cv: "./assets/cv/CV-Mohsen Mansour .pdf",
      speciality: {
        fr: "Bioclimatologie",
        ar: "البيوكلماتولوجيا",
        en: "Bioclimatologie",
      },
    },
    {
      name: {
        fr: "BAYOUDH Chokri",
        ar: "شكري بايوض",
        en: "BAYOUDH Chokri",
      },
      email: "chokribayoudh@gmail.com",
      orcid: "0000-0002-7531-2979",
      cv: "./assets/cv/CV  Chokri Bayoudh.pdf",
      speciality: {
        fr: "Biotechnologie végétale",
        ar: "التكنولوجيا الحيوية النباتية",
        en: "Biotechnologie végétale",
      },
    },
    {
      name: {
        fr: "JABNOUN-KHIAREDDINE Hayfa",
        ar: "هيفاء جابنون-خيرالدين",
        en: "JABNOUN-KHIAREDDINE Hayfa",
      },
      email: "jkhayfa@yahoo.fr",
      orcid: "0000-0002-0849-3167",
      cv: "./assets/cv/CV Hayfa Jabnoun-Khiareddine.pdf",
      speciality: {
        fr: "Phytomycologie",
        ar: "علم الفطريات النباتية",
        en: "Phytomycologie",
      },
    },
    {
      name: {
        fr: "JEDER Houcine",
        ar: "حسين جيدر",
        en: "JEDER Houcine",
      },
      email: "djederhoucine@yahoo.fr",
      orcid: "0000-0003-1953-8209",
      cv: "./assets/cv/CV_Houcine Jeder.pdf",
      speciality: {
        fr: "Economie Agricole",
        ar: "الاقتصاد الزراعي",
        en: "Economie Agricole",
      },
    },
    {
      name: {
        fr: "AYDI BEN ABDALLAH Rania",
        ar: "رانية عايضي بن عبد الله",
        en: "AYDI BEN ABDALLAH Rania",
      },
      email: "raniaaydi@yahoo.fr",
      orcid: "0000-0001-7875-4652",
      cv: "./assets/cv/CV AYDI-ABDALLAH Rania.pdf",
      speciality: {
        fr: "Microbiologie du sol",
        ar: "علم الجراثيم التربوية",
        en: "Microbiologie du sol",
      },
    },
    {
      name: {
        fr: "CHAIEB Nadia",
        ar: "نادية الشايب",
        en: "CHAIEB Nadia",
      },
      email: "chaiebnadiat@yahoo.fr",
      orcid: "0000-0002-9497-8346",
      cv: "./assets/cv/CV NADIA Chaieb.pdf",
      speciality: {
        fr: "Agriculture de Conservation",
        ar: "زراعة المحافظة",
        en: "Agriculture de Conservation",
      },
    },
    {
      name: {
        fr: "TRAD Mehdi",
        ar: "مهدي التراد",
        en: "TRAD Mehdi",
      },
      email: "mh.trad@yahoo.com",
      orcid: "0000-0003-4887-5212",
      cv: "./assets/cv/CV Mehdi Trad.pdf",
      speciality: {
        fr: "Qualité et Physiologie Post-récolte des Fruits",
        ar: "جودة وفسيولوجيا ما بعد الحصاد للفواكه",
        en: "Qualité et Physiologie Post-récolte des Fruits",
      },
    },
    {
      name: {
        fr: "LACHKAR Amel",
        ar: "آمال لشكر",
        en: "LACHKAR Amel",
      },
      email: "amel.lachkar@yahoo.com",
      orcid: "amelchet00@gmail.com",
      cv: "./assets/cv/CV Amel Lachkar.pdf",
      speciality: {
        fr: "Arboriculture Fruitière",
        ar: "زراعة الفواكه",
        en: "Arboriculture Fruitière",
      },
    },
    {
      name: {
        fr: "BEN AISSA Imed",
        ar: "عماد بن عيسى",
        en: "BEN AISSA Imed",
      },
      email: "imedsam@gmail.com",
      orcid: "0000-0002-8990-7746",
      cv: "./assets/cv/CV Imed Ben AISSA.pdf",
      speciality: {
        fr: "Irrigation agricole",
        ar: "الري الزراعي",
        en: "Irrigation agricole",
      },
    },
  ]);
  const headers = [
    {
      title: {
        fr: "nom",
        en: "name",
        ar: "الاسم",
      },
    },
    {
      title: {
        fr: "Spécialité",
        en: "Specialty",
        ar: "التخصص",
      },
    },
    {
      title: {
        fr: "email",
        en: "email",
        ar: "البريد الالكتروني",
      },
    },
    {
      title: {
        fr: "orcid",
        en: "orcid",
        ar: "orcid",
      },
    },
  ];

  return (
    <Wrap height="100dvh" dir={{ base: "column", "2xl": "row" }}>
      <SimpleSidebar />
      <Box
        bg="background"
        w={{ base: "full", "2xl": "85dvw" }}
        p={10}
        minH={"100dvh"}
        ml={"auto"}
      >
        <Heading mb={5} textTransform={"capitalize"}>
          Research Team
        </Heading>
        <Button as={Link} mb={5} ml={"95%"} to={`/admin/create/research_team`}>
          Add
        </Button>
        <>
          <DataTable
            data={data}
            headers={headers}
            setData={setData}
            language={"en"}
          />
        </>
      </Box>
    </Wrap>
  );
};
const DataTable = ({ data, setData, headers, language }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  // Vérification si data et headers existent
  if (!data || !headers) {
    console.error("Les données ou les en-têtes ne sont pas fournis.");
    return null;
  }
  const toast = useToast();
  const deleteByOrcid = async (e, orcid) => {
    e.preventDefault();
    setData(data.filter((element) => element.orcid !== orcid));
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/research_team/${orcid}`,
        {
          headers: {
            Authorization: `Bearer ${user?.user?.token}`,
          },
        }
      );

      toast({
        title: "Data deleted successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Uncomment and use this line if you need to update the state after deletion
      // setData(data.filter((d) => d.orcid !== orcid));

      navigate("/admin/research_team");
    } catch (error) {
      toast({
        title: "Error deleting data.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error deleting data:", error);
    }
  };

  const updateOne = (orcid) => {
    navigate("/admin/create/research_team/" + orcid);
  };

  const getText = (item, language) => item[language] || item.en || "";
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="green">
        <Thead bg={"primary"}>
          <Tr>
            {headers.map((header, index) => (
              <Th color={"white"} key={index}>
                {getText(header.title, language)}
              </Th>
            ))}
            <Th textAlign={"end"} color={"white"}>
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>{getText(row.name, language)}</Td>
              <Td>{getText(row.speciality, language)}</Td>
              <Td>{row.email}</Td>
              <Td color="secondary">
                <a
                  href={`https://orcid.org/${row.orcid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {row.orcid}
                </a>
              </Td>
              <Td>
                <Flex justify={{ md: "end" }}>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    {row.cv !== "" ? (
                      <chakra.a
                        href={`../${row.cv}`}
                        target="_blank"
                        color="primary"
                      >
                        <IconButton
                          colorScheme="blue"
                          icon={<BsBoxArrowUpRight />}
                          aria-label="Up"
                        />
                      </chakra.a>
                    ) : (
                      "-"
                    )}
                    <IconButton
                      colorScheme="green"
                      icon={<AiFillEdit />}
                      aria-label="Edit"
                      onClick={() => {
                        updateOne(row.orcid);
                      }}
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label="Delete"
                      onClick={(e) => {
                        deleteByOrcid(e, row.orcid);
                      }}
                    />
                  </ButtonGroup>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default AdminResearchTeam;
