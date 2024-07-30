import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Heading,
  List,
  ListIcon,
  ListItem,
  chakra,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useCallApi } from "../hooks/useCallApi";
import Spinner from "../components/spinner/Spinner";

const OpenData = () => {
  const language = useSelector((state) => state.language.language);
 
  const [dataToShow, setDataToShow] = useState([])
  const { data, error, isLoading } = useCallApi("opendata"); // Fetch data using custom hook

  const { pathname } = useLocation();
  let path =pathname.replace("_", "");

  path = path.replace("/", "");
  useEffect(() => {
    data?.reverse()
    setDataToShow(data?.filter((doc) => doc.type === path)) 
  }, [ path, data]);
  
  if (isLoading) {
    return <Spinner />; // Show spinner while loading
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>; // Display error message if there's an error
  }
const titles= {
  opendata: {
    fr: "Textes Réglementaires",
    en: "Regulatory Texts",
    ar: "النفاذ للمعلومة",
  },
  activityreports: {
    fr: "Rapports d'Activités",
    en: "Activity Reports",
    ar: "تقارير أنشطة البحث",
  },
  administrativeforms:{ fr: "Formulaires Administratifs", en: "Administrative forms", ar: "وثائق إدارية" },
  flyers:{ fr: "Brochures et Dépliants", en: "Flyers and Booklets", ar: "كتيبات و نشريات" }
}
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
        {titles?.[path]?.[language]}
      </Heading>
      <Card p={4}>
        <List spacing={5}>
          {dataToShow?.map((doc) => {
            return (
              <ListItem
                _hover={{
                  color: "secondary",
                  fontSize: "xl",
                  _dark: { color: "primary" },
                }}
                color="primary"
                _dark={{ color: "text" }}
                fontSize={"lg"}
                key={doc.link + doc.title.fr}
              >
                <ListIcon as={MdCheckCircle} />
                <chakra.a
                  href={`./assets/openData/${doc.link}`}
                  target="_blank"
                  _visited={{
                    color: "red.500",
                  }}
                >
                  {doc.title?.[language]}
                </chakra.a>
              </ListItem>
            );
          })}
        </List>
      </Card>
    </Box>
  );
};

export default OpenData;
