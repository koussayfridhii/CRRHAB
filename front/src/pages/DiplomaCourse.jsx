import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Flex,
  Heading,
  Icon,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useCallApi } from "../hooks/useCallApi";
import Spinner from "../components/spinner/Spinner";
const DiplomaCourse = () => {
  const language = useSelector((state) => state.language.language);
  const [filtredData, setFiltredData] = useState([]);
  const { data, error, isLoading } = useCallApi("diploma_courses"); // Fetch data using custom hook

  useEffect(() => {
    if (filtredData.length < 1 && data) {
      // Populate filtered data if it's empty and data is available
      setFiltredData([...data.sort((a,b)=>{
        return b.annee - a.annee;})]);
    }
  }, [data, filtredData.length]); // Dependency array includes data and filtredData.length
  useEffect(() => {
    setFiltredData(filtredData.sort((a,b)=>{
      return b.annee - a.annee;}))
  }, [filtredData]); // Dependency array includes data and filtredData.length

  if (isLoading) {
    return <Spinner />; // Show spinner while loading
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>; // Display error message if there's an error
  }
  const headers = {
    auteur: {
      fr: "auteur",
      en: "author",
      ar: "المؤلف",
    },
    year: {
      fr: "année",
      en: "year",
      ar: "سنة",
    },
    titre: {
      fr: "titre",
      en: "title",
      ar: "العنوان",
    },
    type: {
      fr: "type",
      en: "type",
      ar: "النوع",
    },
    specialite: {
      fr: "Spécialité",
      en: "Specialty",
      ar: "التخصص",
    },
    etablissement: {
      fr: "Établissement",
      en: "Institution",
      ar: "المؤسسة",
    },
    directeur: {
      fr: "directeur",
      en: "president",
      ar: "المدير",
    },
  };

  const dataColor = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("background", "gray.700");
  return (
    <Box
      w={{ base: "full", xl: "90dvw", "2xl": "80dvw" }}
      mx={"auto"}
      bg={"background"}
      my={10}
      px={{ base: 0, xl: 5 }}
      py={5}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Flex
        justify={"start"}
        align={"center"}
        py={3}
        px={10}
        bg="primary"
        _dark={{ bg: "secondary" }}
        borderRadius={10}
      >
        <Heading
          color={"white"}
          _dark={{ color: "#fff" }}
          fontSize={"xxl"}
          mb={0}
        >
          {language === "en"
            ? "Training Qualification"
            : language === "fr"
            ? "Superision Académique"
            : "تدريب مؤهل"}
        </Heading>
      </Flex>
      <Flex
        w="full"
        bg="background"
        p={{ base: 0, xl: 50 }}
        alignItems="center"
        justifyContent="center"
        direction={"column"}
        gap={10}
        _dark={{
          bg: "background",
        }}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <AutoCompleteMade
          options={data}
          language={language}
          setFiltredData={setFiltredData}
        />
        <Stack
          direction={{ base: "column" }}
          w="full"
          bg={{ md: "primaryHover" }}
          shadow="lg"
          borderRadius={"lg"}
          p={3}
          _dark={{
            bg: "secondary",
          }}
        >
          {filtredData.map((element) => {
            return (
              <Flex
                direction={{ base: "row", md: "column" }}
                bg={dataColor}
                borderRadius={"xl"}
                key={element.date + "-" + element.titre.fr}
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: Object.values(headers).length }}
                  w={{ base: 120, md: "full" }}
                  textTransform="uppercase"
                  bg={bg2}
                  color={"gray.500"}
                  py={{ base: 1, md: 4 }}
                  px={{ base: 2, md: 10 }}
                  fontSize="md"
                  fontWeight="hairline"
                  borderRadius={"xl"}
                >
                  <chakra.span maxW={"fit-content"}>
                    {headers.auteur[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"}>
                    {headers.year[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"}>
                    {headers.titre[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"}>
                    {headers.type[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"}>
                    {headers.specialite[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"}>
                    {headers.etablissement[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"} textAlign={{ md: "end" }}>
                    {headers.directeur[language]}
                  </chakra.span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: Object.values(headers).length }}
                  w="full"
                  py={2}
                  px={10}
                  fontWeight="hairline"
                  columnGap="1rem" // Ajout d'un espace entre les colonnes
                >
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.auteur[language]}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="wrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.annee}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    textOverflow="ellipsis"
                    alignItems="center"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.titre[language]}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.type[language]}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.specialite[language]}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.etablissement[language]}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                    textAlign={{ md: "end" }}
                  >
                    {element.directeur[language]}
                  </chakra.span>
                </SimpleGrid>
              </Flex>
            );
          })}
        </Stack>
      </Flex>
    </Box>
  );
};

const AutoCompleteMade = ({ options, language = "fr", setFiltredData }) => {
  // State variables
  const [text, setText] = useState("");

  // Data processing (optimized with Set and destructuring)
  const allData = options.flatMap((option) => [
    option.titre?.[language],
    option.specialite?.[language],
    option.annee,
    option.auteur?.[language],
    option.etablissement?.[language],
    option.directeur?.[language],
  ]).filter(Boolean); // Remove falsy values
  const uniqueData = [...new Set(allData)]; // Ensure unique values

  // Input change handler
  const handleChange = (event) => {
    setText(event.target.value); // Lowercase for case-insensitive search
  };

  // Filtering function (improved readability and maintainability)
  const filterOptions = () => {
    const filteredData = options.filter((option) => {
      const lowerText = text?.toLowerCase();
      setFiltredData([])
      return (
        option.titre?.[language]?.toLowerCase().includes(lowerText) ||
        option.auteur?.[language]?.toLowerCase().includes(lowerText) ||
        option.specialite?.[language]?.toLowerCase().includes(lowerText) ||
        option.etablissement?.[language]?.toLowerCase().includes(lowerText) ||
        option.directeur?.[language]?.toLowerCase().includes(lowerText) ||
        option.annee == lowerText
      );
    });
    setFiltredData(filteredData);
  };

  // useEffect hook for filtering on text change
  useEffect(() => {
    filterOptions();
  }, [text]);

  return (
    <>
      <AutoComplete rollNavigation>
        {({ isOpen }) => (
          <>
            <InputGroup onChange={handleChange}>
              <AutoCompleteInput
                variant="filled"
                bg="textHover"
                border="2px"
                borderColor="primary"
                _dark={{ borderColor: "secondary" }}
                placeholder="Search..."
              />
              <InputRightElement>
                <Icon as={isOpen ? ChevronRightIcon : ChevronDownIcon} />
              </InputRightElement>
            </InputGroup>
            <AutoCompleteList>
              {uniqueData.map((option, index) => (
                <AutoCompleteItem
                  key={`option${index}`}
                  value={option}
                  textTransform="capitalize"
                  align="center"
                  onClick={() => setText(option)} // Update text on click
                >
                  {option}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </>
        )}
      </AutoComplete>
    </>
  );
};


export default DiplomaCourse;
