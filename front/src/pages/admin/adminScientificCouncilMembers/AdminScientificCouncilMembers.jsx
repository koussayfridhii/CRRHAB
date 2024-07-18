import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Wrap,
  Flex,
  Text,
  ButtonGroup,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
import { Link, useNavigate } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import { withAuthorization } from "../../../HOC/Protect";

const AdminScientificCouncilMembers = () => {
  const [data, setData] = useState([]);
  const headers = [
    {
      title: {
        fr: "Président",
        en: "President",
        ar: "الرئيس",
      },
      key: "president",
    },
    {
      title: {
        fr: "Rapporteur",
        en: "Rapporteur",
        ar: "المقرر",
      },
      key: "rapporteur",
    },
    {
      title: {
        fr: "Responsables des structures RDI",
        en: "RDI Structure Managers",
        ar: "مسؤولين عن هياكل البحث والتطوير",
      },
      key: "Responsables_des_structures_RDI",
    },
    {
      title: {
        fr: "Gestionnaires des unités spécialisées",
        en: "Managers of Specialized Units",
        ar: "مدراء الوحدات المتخصصة",
      },
      key: "managersOfSpecializedUnits",
    },
    {
      title: {
        fr: "Représentants des chercheurs",
        en: "Researchers Representatives",
        ar: "ممثلين عن الباحثين",
      },
      key: "representativesOfResearchers",
    },
    {
      title: {
        fr: "Représentant de l'IRESA",
        en: "Representative of IRESA",
        ar: "ممثل IRESA",
      },
      key: "representativeOfIresa",
    },
    {
      title: {
        fr: "Représentants des établissements de recherche et d'enseignement supérieur agricole",
        en: "Representatives of Agricultural Research and Higher Education Establishments",
        ar: "ممثلين عن مؤسسات البحث والتعليم العالي الزراعي",
      },
      key: "representativesOfAgriculturalResearchAndHigherEducationEstablishments",
    },
    {
      title: {
        fr: "Personnalités scientifiques du monde académique et de la recherche",
        en: "Scientific Personalities from the Academic and Research World",
        ar: "شخصيات علمية من عالم الأكاديمية والبحث",
      },
      key: "scientificPersonalitiesFromTheAcademicAndScientificResearchWorld",
    },
  ];

  const getAllData = async () => {
    const res = await axios.get(
      `http://193.95.21.154/api/scientific_council`
    );
    setData(res.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Wrap height="100dvh" dir={{ base: "column", xl: "row" }}>
      <SimpleSidebar />
      <Box
        bg="background"
        w={{ base: "full", xl: "85dvw" }}
        p={10}
        minH={"100dvh"}
        ml={"auto"}
      >
        <Heading mb={5} textTransform={"capitalize"}>
          Scientific Council Members
        </Heading>
        <Button
          as={Link}
          mb={5}
          ml={"95%"}
          to={`/admin/create/scientific_council`}
        >
          Add
        </Button>
        <DataList
          data={data}
          headers={headers}
          setData={setData}
          language={"en"}
        />
      </Box>
    </Wrap>
  );
};

const DataList = ({ data, setData, headers, language }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const toast = useToast();

  const deleteById = async (e, id) => {
    e.preventDefault();
    setData(data.filter((element) => element._id !== id));
    try {
      const response = await axios.delete(
        `http://193.95.21.154/api/scientific_council/${id}`,
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

      navigate("/admin/scientific_council");
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

  const updateOne = (id) => {
    navigate("/admin/create/scientific_council/" + id);
  };

  const getText = (item, language) => item[language] || item.en || "";

  return (
    <Box>
      {data.map((item, index) => (
        <Box
          key={index}
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          mb={5}
        >
          {headers.map((header, idx) => (
            <Box key={idx} mb={3}>
              <Text fontWeight="bold" mb={1}>
                {getText(header.title, language)}
              </Text>
              {Array.isArray(item[header.key]) ? (
                item[header.key].map((subItem, subIdx) => (
                  <Text key={subIdx} mb={1}>
                    {getText(subItem, language)}
                  </Text>
                ))
              ) : (
                <Text>{getText(item[header.key], language)}</Text>
              )}
            </Box>
          ))}
          <Flex justify="end">
            <ButtonGroup variant="solid" size="sm" spacing={3}>
              <IconButton
                colorScheme="green"
                icon={<AiFillEdit />}
                aria-label="Edit"
                onClick={() => updateOne(item._id)}
              />
              <IconButton
                colorScheme="red"
                variant="outline"
                icon={<BsFillTrashFill />}
                aria-label="Delete"
                onClick={(e) => deleteById(e, item._id)}
              />
            </ButtonGroup>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default withAuthorization(AdminScientificCouncilMembers, ["admin"]);
