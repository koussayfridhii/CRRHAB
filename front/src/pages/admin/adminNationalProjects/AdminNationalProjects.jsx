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
import { Link, useNavigate } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import { withAuthorization } from "../../../HOC/Protect";
import Spinner from "../../../components/spinner/Spinner";
import { useCallApi } from "../../../hooks/useCallApi";

const AdminNationalProjects = () => {
  const headers = [
    {
      title: {
        fr: "Titre",
        en: "Title",
        ar: "العنوان",
      },
    },
    {
      title: {
        fr: "Coordinateur",
        en: "Coordinator",
        ar: "المنسق",
      },
    },
    {
      title: {
        fr: "Durée",
        en: "Duration",
        ar: "المدة",
      },
    },
    {
      title: {
        fr: "Closed",
        en: "closed",
        ar: "المدة",
      },
    },
  ];

  const { data, error, isLoading } = useCallApi("national_projects");

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

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
          National Projects
        </Heading>
        <Button
          as={Link}
          mb={5}
          ml={"95%"}
          to={`/admin/create/national_projects`}
        >
          Add
        </Button>
        <DataTable data={data} headers={headers} language={"en"} />
      </Box>
    </Wrap>
  );
};

const DataTable = ({ data, headers, language }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const toast = useToast();

  if (!data || !headers) {
    console.error("Data or headers are not provided.");
    return null;
  }

  const deleteById = async (e, id) => {
    e.preventDefault();
    try {
      await axios.delete(
        `http://localhost:5000/api/national_projects/${id}`,
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

      navigate("/admin/national_projects");
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
    navigate("/admin/create/national_projects/" + id);
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
              <Td
                display="flex"
                alignItems="center"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="normal"
                maxW="auto"
              >
                {getText(row.title, language)}
              </Td>
              <Td>{getText(row.cordinator, language)}</Td>
              <Td>{row.duration}</Td>
              <Td>{row?.closed ? "Closed" : "En cours"}</Td>
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
                        deleteById(e, row._id);
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

export default withAuthorization(AdminNationalProjects, ["admin"]);
