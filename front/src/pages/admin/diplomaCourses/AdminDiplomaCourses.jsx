import React, { useEffect, useState } from "react";
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
  useBreakpointValue,
  Stack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
// import ResearchTeam from "../researchStructures/ResearchTeam";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
// import Table from "../../components/tables/tableV2/Table";

const AdminDiplomaCourse = () => {
  const [data, setData] = useState([]);
  const headers = [
    {
      title: {
        fr: "année",
        en: "year",
        ar: "السنة",
      },
    },
    {
      title: {
        fr: "Type",
        en: "Type",
        ar: "النوع",
      },
    },
    {
      title: {
        fr: "Auteur",
        en: "Author",
        ar: "المؤلف",
      },
    },
    {
      title: {
        fr: "Titre",
        en: "Title",
        ar: "العنوان",
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
        fr: "Directeur",
        en: "Supervisor",
        ar: "المشرف",
      },
    },
    {
      title: {
        fr: "Etablissement",
        en: "Institution",
        ar: "المؤسسة",
      },
    },
    {
      title: {
        fr: "Date",
        en: "Date",
        ar: "التاريخ",
      },
    },
  ];

  const getAllData = async () => {
    const res = await axios.get(`http://localhost:5000/api/diploma_courses`);
    setData(res.data);
  };
  useEffect(() => {
    getAllData();
  }, []);
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
          Diploma Courses
        </Heading>
        <Button as={Link} mb={5} ml={"95%"} to={`/admin/create/diploma_course`}>
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
  const deleteById = async (e, id) => {
    e.preventDefault();
    setData(data.filter((element) => element._id !== id));
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/diploma_courses/${id}`,
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
    navigate("/admin/create/diploma_course/" + id);
  };

  const getText = (data, language) => {
    // Check if data is defined
    if (!data) {
      return ""; // Return an empty string if data is undefined
    }

    // Check if the language exists in the data object
    if (data[language]) {
      return data[language]; // Return the text for the specified language
    } else {
      // If the specified language doesn't exist, return the text in English as a fallback
      return data["en"] || "";
    }
  };
  const dataColor = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("background", "gray.700");
  return (
    <Stack
      direction={{ base: "column" }}
      w="full"
      bg={{ md: "primaryHover" }}
      shadow="lg"
      borderRadius={"lg"}
      p={3}
      _dark={{
        bg: "secondary",
      }}
    >
      {data.map((course) => (
        <Flex
          direction={{ base: "row", md: "column" }}
          bg={dataColor}
          borderRadius={"xl"}
          key={course.date + "-" + course.titre.fr}
        >
          <SimpleGrid
            spacingY={3}
            columns={{ base: 1, md: headers.length + 1 }}
            w={{ base: 120, md: "full" }}
            textTransform="uppercase"
            bg={bg2}
            color={"gray.500"}
            py={{ base: 1, md: 4 }}
            px={{ base: 2, md: 10 }}
            fontSize="md"
            fontWeight="hairline"
            borderRadius={"xl"}
          >
            {headers.map((header, index) => (
              <chakra.span key={index} maxW={"fit-content"}>
                {getText(header.title, language)}
              </chakra.span>
            ))}
            <chakra.span maxW={"fit-content"} textAlign={{ md: "end" }}>
              Actions
            </chakra.span>
          </SimpleGrid>
          <SimpleGrid
            spacingY={3}
            columns={{ base: 1, md: headers.length + 1 }}
            w="full"
            py={2}
            px={10}
            fontWeight="hairline"
            columnGap="1rem"
          >
            <chakra.span
              display="flex"
              alignItems="center"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              _hover={{
                whiteSpace: "wrap",
              }}
              maxW="fit-content"
            >
              {course.auteur[language]}
            </chakra.span>
            <chakra.span
              display="flex"
              alignItems="center"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="wrap"
              _hover={{
                whiteSpace: "wrap",
              }}
              maxW="fit-content"
            >
              {course.annee}
            </chakra.span>
            <chakra.span
              display="flex"
              textOverflow="ellipsis"
              alignItems="center"
              overflow="hidden"
              whiteSpace="nowrap"
              _hover={{
                whiteSpace: "wrap",
              }}
              maxW="fit-content"
            >
              {course.titre[language]}
            </chakra.span>
            <chakra.span
              display="flex"
              alignItems="center"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              _hover={{
                whiteSpace: "wrap",
              }}
              maxW="fit-content"
            >
              {course.type[language]}
            </chakra.span>
            <chakra.span
              display="flex"
              alignItems="center"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              _hover={{
                whiteSpace: "wrap",
              }}
              maxW="fit-content"
            >
              {course.specialite[language]}
            </chakra.span>
            <chakra.span
              display="flex"
              alignItems="center"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              _hover={{
                whiteSpace: "wrap",
              }}
              maxW="fit-content"
            >
              {course.etablissement[language]}
            </chakra.span>
            <chakra.span
              display="flex"
              alignItems="center"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              _hover={{
                whiteSpace: "wrap",
              }}
              maxW="fit-content"
              textAlign={{ md: "end" }}
            >
              {course.directeur[language]}
            </chakra.span>
            <chakra.span
              display="flex"
              alignItems="center"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              _hover={{
                whiteSpace: "wrap",
              }}
              maxW="fit-content"
            >
              {course.date}
            </chakra.span>
            <chakra.span
              display="flex"
              alignItems="center"
              justifyContent={{ md: "end" }}
            >
              <ButtonGroup variant="solid" size="sm" spacing={3}>
                <IconButton
                  colorScheme="green"
                  icon={<AiFillEdit />}
                  aria-label="Edit"
                  onClick={() => updateOne(course._id)}
                />
                <IconButton
                  colorScheme="red"
                  variant="outline"
                  icon={<BsFillTrashFill />}
                  aria-label="Delete"
                  onClick={(e) => deleteById(e, course._id)}
                />
              </ButtonGroup>
            </chakra.span>
          </SimpleGrid>
        </Flex>
      ))}
    </Stack>
  );
};
export default AdminDiplomaCourse;
