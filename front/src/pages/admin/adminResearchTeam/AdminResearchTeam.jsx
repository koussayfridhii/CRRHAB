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

const AdminResearchTeam = () => {
  const [data, setData] = useState([]);
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
  const getAllData = async () => {
    const res = await axios.get(
      `http://server:5000api/research_team`
    );
    setData(res.data.research_team);
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
        `http://server:5000api/research_team/${orcid}`,
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
                        href={`${row.cv}`}
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
export default withAuthorization(AdminResearchTeam, ["admin"]);
