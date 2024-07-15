import {
    Box,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useColorMode,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import { useCallApi } from "../hooks/useCallApi";
  import Spinner from "../components/spinner/Spinner";
  import { useLocation } from "react-router-dom";
  
  const Conventions = () => {
    const language = useSelector((state) => state.language.language);
    const { pathname } = useLocation();
    // const [dataToShow, setDataToShow]= useState([])
    // const { data, error, isLoading } = useCallApi("national_projects");
  const data=[
    {
        subject:{
            fr:"",
            ar:"",
            en:"",
        },
        members:{
            fr:"",
            ar:"",
            en:"",

        },
        duration:"",
        closed:true
    }
  ]
  const [dataToShow, setDataToShow] = useState([]);
    useEffect(()=>{
      if("/conventions/closed" === pathname) {
        setDataToShow(data?.filter(item => item.closed))
      }else{
        setDataToShow(data?.filter(item => !item.closed))
      }
    },[pathname,data])
    // if (isLoading) {
    //   return <Spinner />;
    // }
  
    // if (error) {
    //   return <div>Error fetching data: {error.message}</div>;
    // }
    return (
      <Box
        w={{ base: "full", xl: "90%", "2xl": "80%" }}
        bg="background"
        mx="auto"
        my={10}
        borderRadius="lg"
        minH="100dvh"
        py={10}
        px={{ base: 0, xl: 10 }}
        boxShadow="lg"
        dir={language === "ar" ? "rtl" : "ltr"}
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
        > {language === "en"
            ? "Conventions"
            : language === "fr"
            ? "Conventions"
            : "إتفاقيات"}
        </Heading>
        <DataTable data={dataToShow} language={language} />
      </Box>
    );
  };
  const DataTable = ({ data, language }) => {
    const getText = (item, language) => item[language] || item.en || "";
    const { colorMode } = useColorMode();
    return (
      <TableContainer>
        <Table
          variant="striped"
          colorScheme={colorMode === "light" ? "green" : "blue"}
          // Ensure table does not overflow the container
          width="100%"
          overflowX="auto"
        >
          <Thead bg={"primary"} _dark={{ bg: "secondary" }}>
            <Tr>
              <Th color={"white"}>
                {language === "en"
                  ? "Subject of the agreement"
                  : language === "fr"
                  ? "Objet de l'accord"
                  : "موضوع الاتفاقية"}
              </Th>
              <Th color={"white"}>
                {language === "en"
                  ? "Parties to the agreement"
                  : language === "fr"
                  ? "Parties à l'accord"
                  : "اطراف الاتفاقية"}
              </Th>
              <Th color={"white"}>
                {language === "en"
                  ? "Duration"
                  : language === "fr"
                  ? "Durée"
                  : "المدة"}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((row, index) => (
              <Tr key={index}>
                <Td
                  display="flex"
                  alignItems="center"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="normal"
                  maxW="auto"
                >
                  {getText(row.subject, language)}
                </Td>
                <Td>{getText(row.members, language)}</Td>
                <Td>{row.duration}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };
  export default Conventions;
  