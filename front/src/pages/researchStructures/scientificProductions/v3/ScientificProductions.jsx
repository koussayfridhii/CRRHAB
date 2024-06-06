import {
  Box,
  Flex,
  Icon,
  InputGroup,
  InputRightElement,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  Wrap,
  chakra,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { data } from "../../../../productionData";
import { useSelector } from "react-redux";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { GiArchiveResearch } from "react-icons/gi";
const ScientificProductionsV2 = () => {
  const language = useSelector((state) => state.language.language);

  const [filtredData, setFiltredData] = useState([]);
  useEffect(() => {
    filtredData.length < 1 && setFiltredData([...data]);
  }, []);
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "background",
      }}
      p={{ base: 0, md: 20 }}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={8}
        py={20}
        mx="auto"
        bg="background"
        shadow="xl"
        borderRadius={"lg"}
      >
        <Box textAlign="center" mb={20}>
          <chakra.h2
            mt={2}
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            textTransform={"capitalize"}
            color="primary"
            _dark={{
              color: "secondary",
            }}
          >
            {language === "en"
              ? "Scientific Productions"
              : language === "ar"
              ? "الانتاجات العلمية"
              : "Productions Scientifiques"}
          </chakra.h2>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{
              lg: "auto",
            }}
            color="textSecondary"
          >
            {language === "en"
              ? " Embark on a journey of transformative impact and discover how we are making a tangible difference in the world."
              : language === "ar"
              ? ".انطلق في رحلة ذات تأثير تحويلي واكتشف كيف نحدث فرقًا ملموسًا في العالم"
              : "Embarquez pour un voyage à impact transformateur et découvrez comment nous faisons une différence tangible dans le monde."}
          </chakra.p>
        </Box>
        <AutoCompleteMade
          options={data}
          language={language}
          setFiltredData={setFiltredData}
        />
        <List spacing={5} mt={6}>
          {filtredData?.map((e, i) => {
            return (
              <ListItem key={i}>
                <ListIcon
                  as={GiArchiveResearch}
                  fontSize={"lg"}
                  color="primary"
                />
                <chakra.a
                  href={e.journal?.url}
                  target="_blank"
                  color="secondary"
                >
                  {`${e?.authors?.[language]}, (${e.year}). ${e.title?.[language]}. ${e.journal?.name?.[language]}. ${e?.journal?.volume},${e?.journal?.pages}`}
                </chakra.a>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Flex>
  );
};
const AutoCompleteMade = ({ options, language = "fr", setFiltredData }) => {
  const [text, setText] = useState("");

  // Populate the data array with values from options based on the selected language
  let data = [];
  options.forEach((option) => {
    if (option.title && option.title[language]) {
      data.push(option.title[language]);
    }
    if (option.authors && option.authors[language]) {
      data.push(...option.authors[language]);
    }
    if (
      option.journal &&
      option.journal.name &&
      option.journal.name[language]
    ) {
      data.push(option.journal.name[language]);
    }
    if (option.published_date && option.published_date[language]) {
      data.push(option.published_date[language]);
    }
    if (option.year) {
      data.push(option.year);
    }
  });

  // Remove duplicate values from data array
  data = [...new Set(data)];

  // Handler for input change event
  const changeInputHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  // Function to filter options based on text input
  const optionsFilter = () => {
    const filteredData = options.filter((option) => {
      return (
        (option.title?.[language] &&
          option.title[language].toLowerCase().includes(text.toLowerCase())) ||
        (option.authors?.[language] &&
          option.authors[language].some((author) =>
            author.toLowerCase().includes(text.toLowerCase())
          )) ||
        (option.journal?.name?.[language] &&
          option.journal.name[language]
            .toLowerCase()
            .includes(text.toLowerCase())) ||
        (option.published_date?.[language] &&
          option.published_date[language]
            .toLowerCase()
            .includes(text.toLowerCase())) ||
        (option.year && option.year.toLowerCase().includes(text.toLowerCase()))
      );
    });
    setFiltredData(filteredData);
  };

  // Effect to trigger optionsFilter function when text input changes
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
                placeholder="Search By author , Journal , Title , Publish Date ...."
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

export default ScientificProductionsV2;
