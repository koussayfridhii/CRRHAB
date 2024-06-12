import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Wrap,
  Flex,
  Text,
  ButtonGroup,
  IconButton,
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

const AdminLandingParagraph = () => {
  const [data, setData] = useState([]);
  const headers = [
    {
      title: {
        fr: "Directeur",
        en: "Director",
        ar: "مدير",
      },
      key: "directeur",
    },
  ];

  const getAllData = async () => {
    const res = await axios.get(
      `https://crrhab-3ofe.vercel.app/api/paragraphs`
    );
    setData(res.data);
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
          Paragraph Landing
        </Heading>
        <Button as={Link} mb={5} ml={"95%"} to={`/admin/create/paragraphs`}>
          Add
        </Button>
        <DataList
          data={data}
          headers={headers}
          setData={setData}
          language={"en"}
        />
      </Box>
    </Wrap>
  );
};

const DataList = ({ data, setData, headers, language }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const toast = useToast();

  const deleteById = async (e, id) => {
    e.preventDefault();
    setData(data.filter((element) => element._id !== id));
    try {
      const response = await axios.delete(
        `https://crrhab-3ofe.vercel.app/api/paragraphs/${id}`,
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

      navigate("/admin/paragraphLanding");
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
    navigate("/admin/create/paragraphs/" + id);
  };

  const getText = (item, language) => item[language] || item.en || "";

  return (
    <Box>
      {data.map((item, index) => (
        <Box
          key={index}
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          mb={5}
        >
          <Text fontWeight="bold" mb={1}>
            {getText(item, language)}
          </Text>
          {headers.map((header, idx) => (
            <Box key={idx} mb={3}>
              <Text fontWeight="bold" mb={1}>
                {getText(header.title, language)}
              </Text>
              <Text>{getText(item[header.key], language)}</Text>
              <Box>
                <Image src={item[header.key].img} />
              </Box>
            </Box>
          ))}
          <Flex justify="end">
            <ButtonGroup variant="solid" size="sm" spacing={3}>
              <IconButton
                colorScheme="green"
                icon={<AiFillEdit />}
                aria-label="Edit"
                onClick={() => updateOne(item._id)}
              />
            </ButtonGroup>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default withAuthorization(AdminLandingParagraph, ["admin"]);
