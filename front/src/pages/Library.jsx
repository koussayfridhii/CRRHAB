import React from "react";
import {
  Box,
  Card,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const OpenData = () => {
  const language = useSelector((state) => state.language.language);
  const data = [
    {
      ordre: "3",
      inventaire: "44/3",
      libelle: {
        ar: "|",
        en: "|",
        fr: "Atlas d'arboriculture (Volume 1)",
      },
      nombre: "01",
      origine: {
        ar: "|",
        en: "|",
        fr: "BC",
      },
      etat: "01",
      date: "2005",
      observations: {
        ar: "",
        en: "",
        fr: "",
      },
    },
  ];

  return (
    <Box
      w={{ base: "full", xl: "80dvw" }}
      bg={"background"}
      shadow={"lg"}
      borderRadius={10}
      mx="auto"
      my={20}
      dir={language === "ar" ? "rtl" : "ltr"}
      px={16}
      py={10}
    >
      <Heading
        _dark={{
          bg: "secondary",
        }}
        fontSize={"xxl"}
        fontFamily={"body"}
        color={"white"}
        bg={"primary"}
        px={5}
        py={2}
        fontWeight={400}
        borderRadius={"lg"}
        mb={6}
      >
        {language === "en"
          ? "Library"
          : language === "fr"
          ? "Bibliothèque"
          : "المكتبة"}
      </Heading>
      <>
        <Table variant="striped" colorScheme='teal'>
          <Thead bg="secondary">
            <Tr>
              <Th  color="white">Ordre</Th>
              <Th  color="white">Inventaire</Th>
              <Th  color="white">Libellé</Th>
              <Th  color="white">Nombre</Th>
              <Th  color="white">Origine</Th>
              <Th  color="white">État</Th>
              <Th  color="white">Date</Th>
              <Th  color="white">Observations</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((doc) => (
              <Tr key={doc.inventaire}>
                <Td>{doc.ordre}</Td>
                <Td>{doc.inventaire}</Td>
                <Td>{doc.libelle[language]}</Td>
                <Td>{doc.nombre}</Td>
                <Td>{doc.origine[language]}</Td>
                <Td>{doc.etat}</Td>
                <Td>{doc.date}</Td>
                <Td>{doc.observations[language]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </>
    </Box>
  );
};

export default OpenData;
