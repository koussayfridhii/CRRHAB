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
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import { withAuthorization } from "../../../HOC/Protect";

const AdminOpenData = () => {
  const [data, setData] = useState([]);
  const headers = [
    {
      key: "type",
      title: {
        fr: "Type",
        en: "Type",
        ar: "نوع",
      },
    },
    {
      key: "title",
      title: {
        fr: "Titre",
        en: "Title",
        ar: "عنوان",
      },
    },
    {
      key: "link",
      title: {
        fr: "Lien",
        en: "Link",
        ar: "رابط",
      },
    },
  ];

  const getAllData = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/opendata`
    );
    setData(res.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Wrap height="100vh" direction={{ base: "column", xl: "row" }}>
      <SimpleSidebar />
      <Box
        bg="background"
        w={{ base: "full", xl: "85vw" }}
        p={10}
        minH="100vh"
        ml="auto"
      >
        <Heading mb={5} textTransform="capitalize">
          Open Data
        </Heading>
        <Button as={Link} mb={5} ml="95%" to={`/admin/create/open_data`}>
          Add
        </Button>
        <DataTable
          data={data}
          headers={headers}
          setData={setData}
          language="en"
        />
      </Box>
    </Wrap>
  );
};

const DataTable = ({ data, setData, headers, language }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const toast = useToast();

  const deleteById = async (e, id) => {
    e.preventDefault();
    setData(data.filter((element) => element._id !== id));
    try {
      await axios.delete(
        `http://localhost:5000/api/opendata/${id}`,
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

      navigate("/admin/open_data");
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
    navigate("/admin/create/open_data/" + id);
  };

  const getText = (item, key, language) => {
    if (key === "title") {
      return item.title[language] || item.title.en || "";
    }
    return item[key] || "";
  };

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="green">
        <Thead bg="primary">
          <Tr>
            {headers?.map((header, index) => (
              <Th color="white" key={index}>
                {header.title[language]}
              </Th>
            ))}
            <Th textAlign="end" color="white">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((row, index) => (
            <Tr key={index}>
              {headers.map((header, i) => (
                <Td key={i} whiteSpace="Wrap">{getText(row, header.key, language)}</Td>
              ))}
              <Td>
                <Flex justify="end">
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <chakra.a
                      href={`${row.link}`}
                      target="_blank"
                      color="primary"
                    >
                      <IconButton
                        colorScheme="blue"
                        icon={<BsBoxArrowUpRight />}
                        aria-label="Link"
                      />
                    </chakra.a>
                    <IconButton
                      colorScheme="green"
                      icon={<AiFillEdit />}
                      aria-label="Edit"
                      onClick={() => updateOne(row._id)}
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label="Delete"
                      onClick={(e) => deleteById(e, row._id)}
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

export default withAuthorization(AdminOpenData, ["admin"]);
