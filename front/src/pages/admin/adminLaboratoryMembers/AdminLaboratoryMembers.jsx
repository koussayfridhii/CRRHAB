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
  Divider,
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
import { Link, useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import { withAuthorization } from "../../../HOC/Protect";

const AdminLaboratoryExecutiveMembers = () => {
  const [ExecutiveData, setExecutiveData] = useState([]);
  const [researchData, setResearchData] = useState([]);
  const researchHeaders = [
    {
      title: {
        fr: "Grade",
        en: "Grade",
        ar: "الصفة",
      },
    },
    {
      title: {
        fr: "nom",
        en: "Fullname",
        ar: "الاسم",
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
        ar: "Orcid",
      },
    },
    {
      title: {
        fr: "établissement",
        en: "Establishment",
        ar: "établissement",
      },
    },
  ];
  const headers = [
    {
      title: {
        fr: "Qualité",
        en: "Quality",
        ar: "الصفة",
      },
    },
    {
      title: {
        fr: "nom",
        en: "Fullname",
        ar: "الاسم",
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
        fr: "établissement",
        en: "Establishment",
        ar: "établissement",
      },
    },
  ];

  const getAllData = async () => {
    const res = await axios.get(
      `http://193.95.21.154/apiapi/laboratory_members`
    );
    setExecutiveData(res.data.filter((member) => member.executive === true));
    setResearchData(res.data.filter((member) => member.executive === false));
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
          Laboratory Members
        </Heading>
        <Button
          as={Link}
          mb={5}
          ml={"95%"}
          to={`/admin/create/laboratory_members`}
        >
          Add
        </Button>
        <>
          <Heading
            mb={5}
            fontSize={"xl"}
            color={"primary"}
            textTransform={"capitalize"}
          >
            Executive Members
          </Heading>
          <DataTable
            data={ExecutiveData}
            headers={headers}
            setData={setExecutiveData}
            language={"en"}
          />
          <Divider
            my={10}
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
          <Heading
            mb={5}
            fontSize={"xl"}
            color={"primary"}
            textTransform={"capitalize"}
          >
            Research Members
          </Heading>
          <ResearchDataTable
            data={researchData}
            headers={researchHeaders}
            setData={setResearchData}
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
  const toast = useToast();

  const deleteByOrcid = async (e, id) => {
    e.preventDefault();
    setData(data.filter((element) => element._id !== id));
    try {
      const response = await axios.delete(
        `http://193.95.21.154/apiapi/laboratory_members/${id}`,
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

      navigate("/admin/laboratory_members");
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
    navigate("/admin/create/laboratory_members/" + id);
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
              <Td>{getText(row.grade, language)}</Td>
              <Td>{getText(row.name, language)}</Td>
              <Td>{row.email}</Td>
              <Td>{row.affiliation}</Td>
              <Td>
                <Flex justify={{ md: "end" }}>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="green"
                      icon={<AiFillEdit />}
                      aria-label="Edit"
                      onClick={() => {
                        updateOne(row._id);
                      }}
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label="Delete"
                      onClick={(e) => {
                        deleteByOrcid(e, row._id);
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
const ResearchDataTable = ({ data, setData, headers, language }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const toast = useToast();

  const deleteByOrcid = async (e, id) => {
    e.preventDefault();
    setData(data.filter((element) => element._id !== id));
    try {
      const response = await axios.delete(
        `http://193.95.21.154/apiapi/laboratory_members/${id}`,
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

      navigate("/admin/laboratory_members");
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
    navigate("/admin/create/laboratory_members/" + id);
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
              <Td>{getText(row.grade, language)}</Td>
              <Td>{getText(row.name, language)}</Td>
              <Td>{row.email}</Td>
              <Td>
                <chakra.a
                  href={`https://orcid.org/${row.orcid}`}
                  color={"primary"}
                  target="_blank"
                >
                  {row.orcid}
                </chakra.a>
              </Td>
              <Td>{row.affiliation}</Td>
              <Td>
                <Flex justify={{ md: "end" }}>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="green"
                      icon={<AiFillEdit />}
                      aria-label="Edit"
                      onClick={() => {
                        updateOne(row._id);
                      }}
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label="Delete"
                      onClick={(e) => {
                        deleteByOrcid(e, row._id);
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

export default withAuthorization(AdminLaboratoryExecutiveMembers, ["admin"]);
