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
  Input,
} from "@chakra-ui/react";
import SimpleSidebar from "../../../components/adminSideBar/AdminSideBar";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings, MdBlock } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

import axios from "axios";
import { useSelector } from "react-redux";
import { withAuthorization } from "../../../HOC/Protect";

const AdminUsers = () => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);

  const headers = [
    {
      title: {
        fr: "nom complet",
        en: "full name",
        ar: "الاسم الكامل",
      },
    },
    {
      title: {
        fr: "nom d'utilisateur",
        en: "username",
        ar: "اسم المستخدم",
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
        fr: "genre",
        en: "gender",
        ar: "النوع",
      },
    },
    {
      title: {
        fr: "date de naissance",
        en: "birth date",
        ar: "تاريخ الميلاد",
      },
    },
    {
      title: {
        fr: "rôle",
        en: "role",
        ar: "الدور",
      },
    },
    {
      title: {
        fr: "description",
        en: "description",
        ar: "الوصف",
      },
    },
  ];

  const getAllData = async () => {
    const res = await axios.get(
      `https://crrhab.agrinet.tn/api/users/${user.user._id}`
    );
    setData(res.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Wrap height="100dvh" direction={{ base: "column", xl: "row" }}>
      <SimpleSidebar />
      <Box
        bg="background"
        w={{ base: "full", xl: "85vw" }}
        p={10}
        minH={"100vh"}
        ml={"auto"}
      >
        <Heading mb={5} textTransform={"capitalize"}>
          Gestion des Utilisateurs
        </Heading>
        <DataTable
          data={data}
          headers={headers}
          setData={setData}
          language={"en"}
          user={user}
          getAllData={getAllData}
        />
      </Box>
    </Wrap>
  );
};

const DataTable = ({ data, setData, headers, language, user, getAllData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  if (!data || !headers) {
    console.error("Les données ou les en-têtes ne sont pas fournis.");
    return null;
  }

  const getText = (item, language) => item?.[language] || item?.en || "";

  const makeAdmin = async (e, id, row, role) => {
    e.preventDefault();
    const dataToUpdate = { role };
    try {
      const response = await axios.put(
        `https://crrhab-3ofe.vercel.app/api/users/role/${id}`,
        dataToUpdate,
        {
          headers: {
            Authorization: `Bearer ${user?.user?.token}`,
          },
        }
      );

      toast({
        title: "Utilisateur mis à jour avec succès !",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      const updatedUser = response.data.user || response.data;
      setData([...data.filter((e) => e._id !== id), updatedUser]);
      navigate("/admin/users");
    } catch (error) {
      toast({
        title: "Erreur lors de la mise à jour de l'utilisateur.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
    }
  };

  const activate = async (e, row) => {
    e.preventDefault();
    try {
      let response;
      if (row.isActive) {
        response = await axios.delete(
          `https://crrhab-3ofe.vercel.app/api/users/${row._id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
      } else {
        response = await axios.post(
          `https://crrhab-3ofe.vercel.app/api/users/restore`,
          {
            email: row?.email,
          },
          {
            headers: {
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
      }

      toast({
        title: "Utilisateur mis à jour avec succès !",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      const updatedUser = response.data.user || response.data;

      setData([...data.filter((e) => e._id !== row._id), updatedUser]);
      navigate("/admin/users");
    } catch (error) {
      toast({
        title: "Erreur lors de la mise à jour de l'utilisateur.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
    }
  };

  const filteredData = data.filter((row) =>
    row.fullName.en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Input
        placeholder="Rechercher..."
        mb={4}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
            {filteredData.map((row, index) => {
              const role = row.role === "admin" ? "user" : "admin";
              return (
                <Tr key={index}>
                  <Td>{getText(row?.fullName, language)}</Td>
                  <Td>{getText(row?.username, language)}</Td>
                  <Td>{row?.email}</Td>
                  <Td>{row?.gender}</Td>
                  <Td>{new Date(row?.birthDate).toLocaleDateString()}</Td>
                  <Td>{row?.role}</Td>
                  <Td>{getText(row?.description, language)}</Td>
                  <Td>
                    <Flex justify={{ md: "end" }}>
                      <ButtonGroup variant="solid" size="sm" spacing={3}>
                        <IconButton
                          colorScheme="green"
                          icon={<MdAdminPanelSettings />}
                          aria-label="Promote to Admin"
                          disabled={row.role === "admin"}
                          onClick={(e) => {
                            makeAdmin(e, row._id, row, role);
                          }}
                        />
                        {row.isActive ? (
                          <IconButton
                            colorScheme="red"
                            variant="outline"
                            icon={<MdBlock />}
                            aria-label="Desactivate"
                            onClick={(e) => {
                              activate(e, row);
                            }}
                          />
                        ) : (
                          <IconButton
                            colorScheme="blue"
                            variant="outline"
                            icon={<IoMdCheckmark />}
                            aria-label="activate"
                            onClick={(e) => {
                              activate(e, row);
                            }}
                          />
                        )}
                      </ButtonGroup>
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default withAuthorization(AdminUsers, ["admin"]);
