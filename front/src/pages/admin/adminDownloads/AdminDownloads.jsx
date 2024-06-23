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
        fr: "Titre",
        en: "Title",
        ar: "العنوان",
      },
    },
    {
      title: {
        fr: "Lien",
        en: "Link",
        ar: "الرابط",
      },
    },
    {
      title: {
        fr: "Catégorie",
        en: "Category",
        ar: "الفئة",
      },
    },
    {
      title: {
        fr: "Date de Création",
        en: "Created At",
        ar: "تاريخ الإنشاء",
      },
    },
  ];

  const getAllData = async () => {
    try {
      const res = await axios.get(
        `https://crrhab-3ofe.vercel.app/api/documents`
      );
      setData(res.data.document);
      console.log(res.data);
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
          Documents
        </Heading>
        <Button as={Link} mb={5} ml={"95%"} to={`/admin/create/downloads`}>
          Ajouter
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
  const toast = useToast();

  const deleteDocument = async (e, id) => {
    e.preventDefault();
    setData(data.filter((item) => item._id !== id));

    try {
      await axios.delete(`https://crrhab-3ofe.vercel.app/api/documents/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.user?.token}`,
        },
      });

      toast({
        title: "Document supprimé avec succès !",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Erreur lors de la suppression du document.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Erreur lors de la suppression du document :", error);
    }
  };

  const updateDocument = (id) => {
    navigate("/admin/create/documents/" + id);
  };

  const getText = (item, language) => item[language] || item.en || "";

  return (
    <Table variant="striped" colorScheme="green">
      <Thead bg={"primary"}>
        <Tr>
          {headers?.map((header, index) => (
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
        {data?.map((item, index) => (
          <Tr key={index}>
            <Td>{getText(item.title, language)}</Td>
            <Td>{item.link}</Td>
            <Td>{getText(item.category, language)}</Td>
            <Td>{new Date(item.createdAt).toLocaleDateString(language)}</Td>
            <Td>
              <Flex justify={{ md: "end" }} gap={1}>
                <IconButton
                  colorScheme="green"
                  icon={<AiFillEdit />}
                  aria-label="Modifier"
                  onClick={() => {
                    updateDocument(item._id);
                  }}
                />
                <IconButton
                  colorScheme="red"
                  variant="outline"
                  icon={<BsFillTrashFill />}
                  aria-label="Supprimer"
                  onClick={(e) => {
                    deleteDocument(e, item._id);
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
