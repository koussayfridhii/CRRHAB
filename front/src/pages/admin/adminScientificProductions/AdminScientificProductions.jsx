import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Wrap,
  Flex,
  ButtonGroup,
  IconButton,
  chakra,
  useToast,
  Stack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
import { Link, useNavigate } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import { withAuthorization } from "../../../HOC/Protect";

const AdminScientificProductions = () => {
  const [data, setData] = useState([]);
  const headers = [
    { title: { en: "Year" } },
    { title: { en: "Title" } },
    { title: { en: "Authors" } },
    { title: { en: "Journal Name" } },
    { title: { en: "Volume" } },
    { title: { en: "Issue" } },
    { title: { en: "Pages" } },
    { title: { en: "ISSN Electronic" } },
    { title: { en: "ISSN Print" } },
    { title: { en: "Published Date" } },
    { title: { en: "URL" } },
  ];

  const getAllData = async () => {
    const res = await axios.get(
      `https://crrhab.agrinet.tn/api/scientific_productions`
    );
    setData(res.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Wrap height="100dvh" direction={{ base: "column", "2xl": "row" }}>
      <SimpleSidebar />
      <Box
        bg="background"
        w={{ base: "full", "2xl": "85dvw" }}
        p={10}
        minH={"100dvh"}
        ml={"auto"}
      >
        <Heading mb={5}>Scientific Productions</Heading>
        <Button
          as={Link}
          mb={5}
          ml={"95%"}
          to={`/admin/create/scientific_productions`}
        >
          Add
        </Button>
        <DataTable
          data={data}
          headers={headers}
          setData={setData}
          language={"fr"}
        />
      </Box>
    </Wrap>
  );
};

const DataTable = ({ data, setData, headers, language }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (!data || !headers) {
    console.error("Data or headers are not provided.");
    return null;
  }

  const toast = useToast();

  const deleteById = async (e, id) => {
    e.preventDefault();
    setData(data.filter((element) => element._id !== id));
    try {
      await axios.delete(
        `https://crrhab.agrinet.tn/api/scientific_productions/${id}`,
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
    navigate("/admin/create/scientific_productions/" + id);
  };

  const getText = (data, language) => {
    if (!data) {
      return "";
    }
    return data[language] || data["en"] || "";
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
      _dark={{ bg: "secondary" }}
    >
      {data.map((production) => (
        <Flex
          direction={{ base: "row", md: "column" }}
          bg={dataColor}
          borderRadius={"xl"}
          key={production._id}
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
            <chakra.span>{production.year}</chakra.span>
            <chakra.span>{getText(production.title, language)}</chakra.span>
            <chakra.span>{production.authors[language].join(", ")}</chakra.span>
            <chakra.span>
              {getText(production.journal.name, language)}
            </chakra.span>
            <chakra.span>{production.journal.volume}</chakra.span>
            <chakra.span>{production.journal.issue}</chakra.span>
            <chakra.span>{production.journal.pages}</chakra.span>
            <chakra.span>{production.journal.ISSN.electronic}</chakra.span>
            <chakra.span>{production.journal.ISSN.print}</chakra.span>
            <chakra.span>
              {getText(production.published_date, language)}
            </chakra.span>
            <chakra.span>
              <a
                href={production.journal.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
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
                  onClick={() => updateOne(production._id)}
                />
                <IconButton
                  colorScheme="red"
                  variant="outline"
                  icon={<BsFillTrashFill />}
                  aria-label="Delete"
                  onClick={(e) => deleteById(e, production._id)}
                />
              </ButtonGroup>
            </chakra.span>
          </SimpleGrid>
        </Flex>
      ))}
    </Stack>
  );
};

export default withAuthorization(AdminScientificProductions, ["admin"]);
