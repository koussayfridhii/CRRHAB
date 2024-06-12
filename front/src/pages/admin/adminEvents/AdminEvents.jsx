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
  IconButton,
  chakra,
  useToast,
  Image,
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
import { Link, useNavigate } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import { withAuthorization } from "../../../HOC/Protect";

const AdminEvents = () => {
  const [data, setData] = useState([]);
  const headers = [
    {
      title: {
        fr: "Lien",
        en: "Link",
        ar: "الرابط",
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
        fr: "Description",
        en: "Description",
        ar: "الوصف",
      },
    },
    {
      title: {
        fr: "Image",
        en: "Img",
        ar: "الصورة",
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
    try {
      const res = await axios.get(`https://crrhab-3ofe.vercel.app/api/events`);
      console.log(res.data.events);
      setData(res.data.events);
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
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
        <Heading mb={5} textTransform={"capitalize"}>
          Events
        </Heading>
        <Button as={Link} mb={5} ml={"95%"} to={`/admin/create/events`}>
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
    console.error("Les données ou les en-têtes ne sont pas fournis.");
    return null;
  }

  const toast = useToast();

  const deleteEvent = async (e, id) => {
    e.preventDefault();
    setData(data.filter((item) => item._id !== id));

    try {
      await axios.delete(`https://crrhab-3ofe.vercel.app/api/events/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.user?.token}`,
        },
      });

      toast({
        title: "évènnement supprimé avec succès !",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Erreur lors de la suppression de l'évènnement.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Erreur lors de la suppression de l'évènnement :", error);
    }
  };

  const updateEvent = (id) => {
    navigate("/admin/create/events/" + id);
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
                "Aucun lien trouvé pour cette actualité"
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
                src={item.media}
                onClick={() => {
                  window.open(item.img, "_blank");
                }}
                cursor={"pointer"}
              />
            </Td>
            <Td>{new Date(item.date).toLocaleDateString(language)}</Td>
            <Td>
              <Flex justify={{ md: "end" }} gap={1}>
                <IconButton
                  colorScheme="green"
                  icon={<AiFillEdit />}
                  aria-label="Modifier"
                  onClick={() => {
                    updateEvent(item._id);
                  }}
                />
                <IconButton
                  colorScheme="red"
                  variant="outline"
                  icon={<BsFillTrashFill />}
                  aria-label="Supprimer"
                  onClick={(e) => {
                    deleteEvent(e, item._id);
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

export default withAuthorization(AdminEvents, ["admin"]);
