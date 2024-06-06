import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
const LaboResearchTeam = ({ add = false }) => {
  const language = useSelector((state) => state.language.language);
  const [filtredData, setFiltredData] = useState([]);
  const data = [
    {
      grade: {
        fr: "Professeurs",
        en: "",
        ar: "",
      },
      name: {
        fr: "BETTAIEB Taoufik",
        ar: "توفيق بالطيبي",
        en: "BETTAIEB Taoufik",
      },
      email: "tbettaieb@yahoo.fr",
      orcid: "0000-0002-0053-848X",
      affiliation: "CRRHAB",
    },
  ];
  const headers = {
    grade: {
      fr: "grade",
      en: "grade",
      ar: "المرحلة",
    },
    name: {
      fr: "Nom et prénom",
      en: "fullname",
      ar: "الاسم الكامل",
    },
    email: {
      fr: "email",
      en: "email",
      ar: "البريد الالكتروني",
    },
    orcid: {
      fr: "orcid",
      en: "orcid",
      ar: "orcid",
    },
    affiliation: {
      fr: "établissement d’affiliation",
      en: "affiliation establishment",
      ar: "مؤسسة الانتماء",
    },
  };
  useEffect(() => {
    filtredData.length < 1 && setFiltredData([...data]);
  }, []);
  return (
    <Box
      w={{ base: "full", xl: "95dvw", "2xl": "80dvw" }}
      bg={"background"}
      mx={"auto"}
      my={10}
      py={50}
      px={10}
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
      >
        {language === "en"
          ? "Laboratory Research Members"
          : language === "fr"
          ? "Chercheurs Membres du Laboratoire"
          : "شبكة الباحثين"}
      </Heading>
      {add && (
        <Button as={Link} mb={5} ml={"95%"} to="/admin/create/research_Team">
          Add
        </Button>
      )}
      <AutoCompleteMade
        options={data}
        language={language}
        setFiltredData={setFiltredData}
      />
      <Table data={filtredData} headers={headers} language={language} />
    </Box>
  );
};

function Table({ data, headers, language = "fr" }) {
  const dataColor = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("background", "gray.700");

  return (
    <Flex
      w="full"
      bg="background"
      p={50}
      alignItems="center"
      justifyContent="center"
      _dark={{ bg: "background" }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: "primaryHover" }}
        shadow="lg"
        borderRadius={"lg"}
        p={3}
        _dark={{ bg: "secondary" }}
      >
        {data.map((element, index) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg={dataColor}
              key={index}
              borderRadius={"xl"}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 5 }}
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
                <chakra.span>{headers.grade[language]}</chakra.span>
                <chakra.span>{headers.name[language]}</chakra.span>
                <chakra.span>{headers.email[language]}</chakra.span>
                <chakra.span>{headers.orcid[language]}</chakra.span>
                <chakra.span>{headers.affiliation[language]}</chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 5 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <chakra.span>{element.grade[language]}</chakra.span>
                <chakra.span>{element.name[language]}</chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {element.email}
                </chakra.span>
                <Flex>
                  <chakra.a
                    href={`https://orcid.org/${element.orcid}`}
                    target="_blank"
                    color="primary"
                  >
                    {element.orcid}
                  </chakra.a>
                </Flex>
                <chakra.span>{element.affiliation}</chakra.span>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}
const AutoCompleteMade = ({ options, language = "fr", setFiltredData }) => {
  // État pour stocker la valeur de l'entrée de texte
  const [text, setText] = useState("");

  // Initialiser le tableau de données en fonction de la langue sélectionnée
  let data = [];
  options.forEach((option) => {
    if (option.name && option.name[language]) {
      data.push(option.name[language]);
    }
    if (option.grade && option.grade[language]) {
      data.push(option.grade[language]);
    }
    if (option.email) {
      data.push(option.email);
    }
    if (option.orcid) {
      data.push(option.orcid);
    }
  });

  // Supprimer les valeurs dupliquées du tableau de données
  data = [...new Set(data)];

  // Gestionnaire pour l'événement de changement de l'entrée
  const changeInputHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  // Fonction pour filtrer les options en fonction de l'entrée de texte
  const optionsFilter = () => {
    const filteredData = options.filter((option) => {
      return (
        (option.name?.[language] &&
          option.name[language].toLowerCase().includes(text.toLowerCase())) ||
        (option.grade?.[language] &&
          option.grade[language].toLowerCase().includes(text.toLowerCase())) ||
        (option.email &&
          option.email.toLowerCase().includes(text.toLowerCase())) ||
        (option.orcid &&
          option.orcid.toLowerCase().includes(text.toLowerCase()))
      );
    });
    setFiltredData(filteredData);
  };

  // Effet pour déclencher la fonction optionsFilter lorsque l'entrée de texte change
  useEffect(() => {
    optionsFilter();
  }, [text]);

  return (
    <>
      <AutoComplete rollNavigation>
        {({ isOpen }) => (
          <>
            <InputGroup>
              <AutoCompleteInput
                variant="filled"
                bg="textHover"
                border="2px"
                borderColor="primary"
                _dark={{ borderColor: "secondary" }}
                placeholder="Rechercher par nom, grade, email, ORCID..."
                onChange={changeInputHandler}
              />
              <InputRightElement>
                <Icon as={isOpen ? ChevronRightIcon : ChevronDownIcon} />
              </InputRightElement>
            </InputGroup>
            <AutoCompleteList>
              {data?.map((option, index) => (
                <AutoCompleteItem
                  key={`option${index}`}
                  value={option}
                  textTransform="capitalize"
                  align="center"
                  onClick={(e) => {
                    setText(e.target.innerText);
                  }}
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

export default LaboResearchTeam;
