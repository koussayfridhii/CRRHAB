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
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
// import ResearchTeam from "../researchStructures/ResearchTeam";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import { withAuthorization } from "../../../HOC/Protect";
// import Table from "../../components/tables/tableV2/Table";

const AdminDiplomaCourseV0 = () => {
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
    const res = await axios.get(
      `http://crrhab.agrinet.tn/api/diploma_courses`
    );
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
        `http://crrhab.agrinet.tn/api/diploma_courses/${id}`,
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
          {data.map((course, index) => (
            <Tr key={index}>
              <Td>{course.annee}</Td>
              <Td>{getText(course?.type, language)}</Td>
              <Td>{getText(course?.auteur, language)}</Td>
              <Td>{getText(course?.titre, language)}</Td>
              <Td>{getText(course?.specialite, language)}</Td>
              <Td>{getText(course?.directeur, language)}</Td>
              <Td>{getText(course?.etablissement, language)}</Td>
              <Td>{course.date}</Td>
              <Td>
                <Flex justify={{ md: "end" }}>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="green"
                      icon={<AiFillEdit />}
                      aria-label="Edit"
                      onClick={() => {
                        updateOne(course._id);
                      }}
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label="Delete"
                      onClick={(e) => {
                        deleteById(e, course._id);
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
export default withAuthorization(AdminDiplomaCourseV0, ["admin"]);
