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
  Flex,
  ButtonGroup,
  IconButton,
  chakra,
  useToast,
  Image,
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { CiLink } from "react-icons/ci";

import axios from "axios";
import { useSelector } from "react-redux";
import { withAuthorization } from "../../../HOC/Protect";

const AdminGallerie = () => {
  const [data, setData] = useState([]);
  const headers = [
    {
      title: {
        fr: "Image",
        en: "Image",
        ar: "صورة",
      },
    },
    {
      title: {
        fr: "video",
        en: "video",
        ar: "اللون",
      },
    },
    {
      title: {
        fr: "Title",
        en: "Title",
        ar: "العنوان",
      },
    },
    {
      title: {
        fr: "Description",
        en: "Description",
        ar: "الوصف",
      },
    },
  ];

  const getAllData = async () => {
    const res = await axios.get(`https://crrhab.agrinet.tn/api/videos`);
    setData(res.data.videos);
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
          Landing Page Video
        </Heading>
        <Button as={Link} mb={5} ml={"95%"} to={`/admin/create/videos`}>
          Add
        </Button>
        <>
          <DataTable
            data={data}
            headers={headers}
            setData={setData}
            language={"fr"}
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

  if (!data || !headers) {
    console.error("Data or headers are not provided.");
    return null;
  }

  const deleteNews = async (e, id) => {
    e.preventDefault();
    setData(data.filter((item) => item._id !== id));

    try {
      const response = await axios.delete(
        `https://crrhab.agrinet.tn/api/videos/${id}`,
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
    navigate("/admin/create/videos/" + id);
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
              <chakra.a
                href={`https://www.youtube.com/watch?v=${item.media}`}
                target="_blank"
                color="secondary"
                fontSize={"xxxl"}
              >
                <CiLink />
              </chakra.a>
            </Td>
            <Td>{getText(item.title, language)}</Td>
            <Td
              maxW={"7.5vw"}
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

export default withAuthorization(AdminGallerie, ["admin"]);
