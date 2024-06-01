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
const DiplomaCourse = () => {
  const language = useSelector((state) => state.language.language);
  const [filtredData, setFiltredData] = useState([]);
  const data = [
    // Thèses soutenues en 2021
    {
      annee: 2021,
      type: { ar: "", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: { ar: "", fr: "DORRA MANSOUR AJEJ", en: "DORRA MANSOUR AJEJ" },
      titre: {
        ar: "",
        fr: "Rôle des parasitoïdes Chalcidoidea et des prédateurs généralistes dans le contrôle biologique des populations de la mineuse des agrumes, Phyllocnistis citrella Stainton (Lepidoptera: Gracillariidae), en vergers d’agrumes.",
        en: "Role of Chalcidoidea parasitoids and generalist predators in the biological control of citrus leafminer populations, Phyllocnistis citrella Stainton (Lepidoptera: Gracillariidae), in citrus orchards.",
      },
      specialite: {
        ar: "",
        fr: "Protection des Plantes et Environnement",
        en: "Plant Protection and Environment",
      },
      directeur: { ar: "", fr: "Mohamed BRAHAM", en: "Mohamed BRAHAM" },
      etablissement: {
        ar: "",
        fr: "Institut Supérieur Agronomique de Chott-Mariem, Université de Sousse",
        en: "Higher Institute of Agronomy of Chott-Mariem, University of Sousse",
      },
    },
    // Masters de Recherche soutenus en 2021
    {
      annee: 2021,
      type: { ar: "", fr: "Mastère de Recherche", en: "Research Master's" },
      auteur: { ar: "", fr: "Wided MOUSSAOUI", en: "Wided MOUSSAOUI" },
      titre: {
        ar: "",
        fr: "Effet du compost et de ses extraits sur la germination et la croissance du piment et évaluation de son pouvoir antifongique.",
        en: "Effect of compost and its extracts on the germination and growth of pepper and evaluation of its antifungal power.",
      },
      specialite: {
        ar: "",
        fr: "Écologie & Environnement",
        en: "Ecology & Environment",
      },
      directeur: {
        ar: "",
        fr: "Rabeb EL KHALDI & Ali MEKKI",
        en: "Rabeb EL KHALDI & Ali MEKKI",
      },
      etablissement: {
        ar: "",
        fr: "Faculté de Sciences de Gafsa",
        en: "Faculty of Sciences of Gafsa",
      },
    },
    // Masters Professionnels soutenus en 2021
    {
      annee: 2021,
      type: {
        ar: "",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: { ar: "", fr: "Safa BEN SAID", en: "Safa BEN SAID" },
      titre: {
        ar: "",
        fr: "Etude du potentiel insecticide des formulations à base de 3 huiles essentielles sur Myzus persicae",
        en: "Study of the insecticidal potential of formulations based on 3 essential oils on Myzus persicae",
      },
      specialite: { ar: "", fr: "", en: "" },
      directeur: { ar: "", fr: "Ikbal CHAIEB", en: "Ikbal CHAIEB" },
      etablissement: {
        ar: "",
        fr: "Institut supérieur agronomique de Chott Mariem",
        en: "Higher Institute of Agronomy of Chott Mariem",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: { ar: "", fr: "Rihab MNASSRI", en: "Rihab MNASSRI" },
      titre: {
        ar: "",
        fr: "Extraction de l’huile essentielle des grappes de Pistacia vera (L.) par hydrodistillation : modélisation paramétrique, étude de ces propriétés physico-chimiques et de ces activités bio-insecticides sur Tribolium castaneum (Herbst).",
        en: "Extraction of essential oil from Pistacia vera (L.) clusters by hydrodistillation: parametric modeling, study of its physicochemical properties and bio-insecticidal activities on Tribolium castaneum (Herbst).",
      },
      specialite: {
        ar: "",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: { ar: "", fr: "Rasmi SOLTANI", en: "Rasmi SOLTANI" },
      etablissement: {
        ar: "",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: { ar: "", fr: "KHLIF Amira", en: "KHLIF Amira" },
      titre: {
        ar: "",
        fr: "Extraction de l’huile essentielle de Mentha longifolia par hydrodistillation : caractérisation physicochimique et étude de ses activités bio-insecticides sur certains ravageurs des denrées stockées.",
        en: "Extraction of essential oil from Mentha longifolia by hydrodistillation: physicochemical characterization and study of its bio-insecticidal activities on certain stored food pests.",
      },
      specialite: {
        ar: "",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: { ar: "", fr: "Rasmi SOLTANI", en: "Rasmi SOLTANI" },
      etablissement: {
        ar: "",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: {
        ar: "",
        fr: "Sihem RAJBAOUI & Sirine AFFI",
        en: "Sihem RAJBAOUI & Sirine AFFI",
      },
      titre: {
        ar: "",
        fr: "Optimisation de l’extraction de l’huile essentielle d’Artemisia herba alba (L.) par hydrodistillation, caractérisation physico-chimique et étude de son activité bio-insecticide sur certains ravageurs des denrées stockées.",
        en: "Optimization of the extraction of essential oil from Artemisia herba alba (L.) by hydrodistillation, physicochemical characterization and study of its bio-insecticidal activity on certain stored food pests.",
      },
      specialite: {
        ar: "",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: { ar: "", fr: "Rasmi SOLTANI", en: "Rasmi SOLTANI" },
      etablissement: {
        ar: "",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: { ar: "", fr: "Karima JEDIDI", en: "Karima JEDIDI" },
      titre: {
        ar: "",
        fr: "Caractérisation physico-chimique et évaluation des activités bio-insecticides de l’huile essentielle de Salvia officinalis (L.) contre deux insectes des denrées stockées.",
        en: "Physicochemical characterization and evaluation of the bio-insecticidal activities of essential oil from Salvia officinalis (L.) against two stored food insects.",
      },
      specialite: {
        ar: "",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: { ar: "", fr: "Rasmi SOLTANI", en: "Rasmi SOLTANI" },
      etablissement: {
        ar: "",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: { ar: "", fr: "Amira SAAD", en: "Amira SAAD" },
      titre: {
        ar: "",
        fr: "Valorisation des huiles essentielles de trois plantes aromatiques : Ruta chalepensis, Eucalyptus et Artemisia herba alba par évaluation de leur activité insecticide sur Tribolium castaneum.",
        en: "Valorization of essential oils from three aromatic plants: Ruta chalepensis, Eucalyptus, and Artemisia herba alba by evaluating their insecticidal activity on Tribolium castaneum.",
      },
      specialite: {
        ar: "",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: { ar: "", fr: "Rasmi SOLTANI", en: "Rasmi SOLTANI" },
      etablissement: {
        ar: "",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: { ar: "", fr: "Fatma LOZARI", en: "Fatma LOZARI" },
      titre: {
        ar: "",
        fr: "Extraction et optimisation du rendement de l’huile essentielle de Lavandula stoechas (L.) par hydrodistillation et étude de ses activités bio-insecticides sur Tribolium castaneum (Herbst).",
        en: "Extraction and yield optimization of essential oil from Lavandula stoechas (L.) by hydrodistillation and study of its bio-insecticidal activities on Tribolium castaneum (Herbst).",
      },
      specialite: {
        ar: "",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: { ar: "", fr: "Rasmi SOLTANI", en: "Rasmi SOLTANI" },
      etablissement: {
        ar: "",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    // Thèses soutenues en 2022
    {
      annee: 2022,
      type: { ar: "", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: { ar: "", fr: "Fakher Ayed", en: "Fakher Ayed" },
      titre: {
        ar: "",
        fr: "Caractérisation biologique de Sclerotium rolfsii et recherche de biomolécules actives à partir de divers composts et de leurs microorganismes associés.",
        en: "Biological characterization of Sclerotium rolfsii and search for active biomolecules from various composts and their associated microorganisms.",
      },
      specialite: { ar: "", fr: "Phytiatrie", en: "Phytiatry" },
      directeur: { ar: "", fr: "Mejda Daami-Remadi", en: "Mejda Daami-Remadi" },
      etablissement: {
        ar: "",
        fr: "INAT",
        en: "INAT",
      },
      date: "14 Juillet 2022",
    },
    {
      annee: 2022,
      type: { ar: "", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: { ar: "", fr: "Achref Abdelkafi", en: "Achref Abdelkafi" },
      titre: {
        ar: "",
        fr: "Contribution à l’étude de la biologie de l’aleurode du tabac, Bemisia tabaci (Gennadius) et à la caractérisation de ses endosymbiotes primaires et secondaires.",
        en: "Contribution to the study of the biology of the tobacco whitefly, Bemisia tabaci (Gennadius), and to the characterization of its primary and secondary endosymbionts.",
      },
      specialite: { ar: "", fr: "Phytiatrie", en: "Phytiatry" },
      directeur: { ar: "", fr: "Ahmed Makni", en: "Ahmed Makni" },
      etablissement: {
        ar: "",
        fr: "INAT",
        en: "INAT",
      },
      date: "21 Juillet 2022",
    },
    {
      annee: 2022,
      type: { ar: "", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: { ar: "", fr: "Radhia EL HAFSI", en: "Radhia EL HAFSI" },
      titre: {
        ar: "",
        fr: "Épidémiologie de la pourriture grise des fraises et recherche d’alternatives de lutte en conditions contrôlées.",
        en: "Epidemiology of gray mold of strawberries and search for control alternatives under controlled conditions.",
      },
      specialite: { ar: "", fr: "Phytiatrie", en: "Phytiatry" },
      directeur: { ar: "", fr: "Mejda Daami-Remadi", en: "Mejda Daami-Remadi" },
      etablissement: {
        ar: "",
        fr: "INAT",
        en: "INAT",
      },
      date: "1 Juillet 2022",
    },
    {
      annee: 2022,
      type: { ar: "", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: { ar: "", fr: "Wafa LAMARI", en: "Wafa LAMARI" },
      titre: {
        ar: "",
        fr: "Recherche de nouvelles sources de résistance de la pomme de terre (Solanum tuberosum L.) à la maladie de la gale commune (Streptomyces scabies) et valorisation des agents de lutte biologique",
        en: "Search for new sources of resistance of potato (Solanum tuberosum L.) to common scab disease (Streptomyces scabies) and valorization of biological control agents.",
      },
      specialite: { ar: "", fr: "Phytiatrie", en: "Phytiatry" },
      directeur: { ar: "", fr: "Mejda Daami-Remadi", en: "Mejda Daami-Remadi" },
      etablissement: {
        ar: "",
        fr: "INAT",
        en: "INAT",
      },
      date: "27 Juillet 2022",
    },
    {
      annee: 2022,
      type: { ar: "", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: { ar: "", fr: "Radhia Hammouda", en: "Radhia Hammouda" },
      titre: {
        ar: "",
        fr: "Développement d’une méthode de lutte intégrée contre les nématodes à galles racinaires Meloidogyne spp. sur les cultures de la pomme de terre et du piment",
        en: "Development of an integrated control method against root-knot nematodes Meloidogyne spp. on potato and pepper crops",
      },
      specialite: { ar: "", fr: "Phytiatrie", en: "Phytiatry" },
      directeur: { ar: "", fr: "Mejda Daami-Remadi", en: "Mejda Daami-Remadi" },
      etablissement: {
        ar: "",
        fr: "INAT",
        en: "INAT",
      },
      date: "15 Juillet 2022",
    },
  ];
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

  useEffect(() => {
    filtredData.length < 1 && setFiltredData([...data]);
  }, []);
  useEffect(() => {}, [filtredData]);

  const dataColor = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("background", "gray.700");
  return (
    <Box
      w={{ base: "full", xl: "80dvw" }}
      mx={"auto"}
      bg={"background"}
      my={10}
      p={5}
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
            ? "Formation Diplômante"
            : "تدريب مؤهل"}
        </Heading>
      </Flex>
      <Flex
        w="full"
        bg="background"
        p={50}
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
  //   const options = ["apple", "appoint", "zap", "cap", "japan"];
  let filtredData = [];
  const [text, setText] = useState("");
  let data = [];
  options.forEach((option) => {
    data.push(option.titre?.[language]);
    data.push(option.specialite?.[language]);
    data.push(option.annee);
    data.push(option.auteur?.[language]);
    data.push(option.etablissement?.[language]);
    data.push(option.directeur?.[language]);
  });
  data = [...new Set(data)];
  const changInputHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const optionsFilter = () => {
    filtredData = options.filter((option) => {
      return (
        option.titre?.[language].toLowerCase().includes(text.toLowerCase()) ||
        option.auteur[language].toLowerCase().includes(text.toLowerCase()) ||
        option.specialite?.[language]
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        option.etablissement?.[language]
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        option.directeur?.[language]
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        option.annee == text.toLowerCase()
      );
    });
    setFiltredData(filtredData);
  };
  useEffect(() => {
    optionsFilter();
  }, [text]);
  return (
    <>
      <AutoComplete rollNavigation>
        {({ isOpen }) => (
          <>
            <InputGroup onChange={changInputHandler}>
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

export default DiplomaCourse;
