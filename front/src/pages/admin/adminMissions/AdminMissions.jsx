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
  Highlight,
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
import { useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { withAuthorization } from "../../../HOC/Protect";

const AdminMissions = () => {
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
    const res = await axios.get(`http://localhost:5000api/missions`);
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
          Historique
        </Heading>
        <DataList
          data={data}
          headers={headers}
          setData={setData}
          language={"fr"}
        />
      </Box>
    </Wrap>
  );
};

const DataList = ({ data, language }) => {
  const navigate = useNavigate();

  const updateOne = (id) => {
    navigate("/admin/create/missions/" + id);
  };

  return (
    <Box>
      {data.map((item, index) => {
        return (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            mb={5}
          >
            {item?.description?.[language]?.split("/n").map((text, i) => {
              return (
                <Text
                  textAlign="justify"
                  color={"text"}
                  fontSize="xl"
                  key={i}
                  mb={4}
                >
                  <Highlight
                    query="crrhab"
                    styles={{
                      color: "text",
                      px: "2",
                      py: "1",
                      fontWeight: "bold",
                    }}
                  >
                    {text}
                  </Highlight>
                </Text>
              );
            })}
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
        );
      })}
    </Box>
  );
};

export default withAuthorization(AdminMissions, ["admin"]);
