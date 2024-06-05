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
  Image,
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
// import ResearchTeam from "../researchStructures/ResearchTeam";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
// import Table from "../../components/tables/tableV2/Table";

const AdminResearchTeam = () => {
  const [data, setData] = useState([]);
  const headers = [
    {
      title: {
        fr: "Link", // French title for link
        en: "Link", // English title for link
        ar: "الرابط", // Arabic title for link
      },
    },
    {
      title: {
        fr: "Title", // French title for title
        en: "Title", // English title for title
        ar: "العنوان", // Arabic title for title
      },
    },
    {
      title: {
        fr: "Description", // French title for description
        en: "Description", // English title for description
        ar: "الوصف", // Arabic title for description
      },
    },
    {
      title: {
        fr: "Img", // French title for image
        en: "Img", // English title for image
        ar: "الصورة", // Arabic title for image
      },
    },
  ];

  const getAllData = async () => {
    const res = await axios.get(`https://crrhab-3ofe.vercel.app/api/news`);
    setData(res.data.news);
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
          Actualities
        </Heading>
        <Button as={Link} mb={5} ml={"95%"} to={`/admin/create/actualities`}>
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

  if (!data || !headers) {
    console.error("Data or headers are not provided.");
    return null;
  }

  const toast = useToast();

  const deleteNews = async (e, id) => {
    e.preventDefault();
    setData(data.filter((item) => item._id !== id));

    try {
      const response = await axios.delete(
        `https://crrhab-3ofe.vercel.app/api/news/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user?.user?.token}`,
          },
        }
      );

      toast({
        title: "News deleted successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error deleting news.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error deleting news:", error);
    }
  };

  const updateNews = (id) => {
    navigate("/admin/create/actualities/" + id);
  };

  const getText = (item, language) => item[language] || item.en || "";

  return (
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
        {data.map((item, index) => (
          <Tr key={index}>
            <Td
              maxW={"7.5vw"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              color={"secondary"}
              _hover={{
                whiteSpace: "wrap",
              }}
            >
              {item.link !== "" ? (
                <chakra.a text href={item.link}>
                  {item.link}
                </chakra.a>
              ) : (
                "No link found fir this news"
              )}
            </Td>
            <Td>{getText(item.title, language)}</Td>
            <Td
              maxW={"25vw"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              _hover={{
                whiteSpace: "wrap",
              }}
            >
              {getText(item.description, language)}
            </Td>
            <Td>
              <Image
                boxSize={"7.5vh"}
                src={item.img}
                onClick={() => {
                  window.open(item.img, "_blank");
                }}
                cursor={"pointer"}
              />
            </Td>
            <Td>
              <Flex justify={{ md: "end" }} gap={1}>
                <IconButton
                  colorScheme="green"
                  icon={<AiFillEdit />}
                  aria-label="Edit"
                  onClick={() => {
                    updateNews(item._id);
                  }}
                />
                <IconButton
                  colorScheme="red"
                  variant="outline"
                  icon={<BsFillTrashFill />}
                  aria-label="Delete"
                  onClick={(e) => {
                    deleteNews(e, item._id);
                  }}
                />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default AdminResearchTeam;
