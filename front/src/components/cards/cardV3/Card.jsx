import React, { useEffect, useState } from "react"; // Importer les hooks nécessaires de React
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react"; // Importer les composants de Chakra UI
import { useSelector } from "react-redux"; // Importer le hook de Redux
import { useCallApi } from "../../../hooks/useCallApi"; // Importer le hook personnalisé pour les appels API
import Spinner from "../../spinner/Spinner"; // Importer le composant Spinner pour l'état de chargement

const CardSlider = () => {
  const language = useSelector((state) => state.language.language); // Obtenir la langue actuelle depuis le store Redux
  const { data, error, isLoading } = useCallApi("events"); // Récupérer les données des événements depuis l'API

  const [currentIndex, setCurrentIndex] = useState(0); // État pour l'index actuel de l'événement

  useEffect(() => {
    const length = data?.length || 0; // Longueur des données
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length); // Mettre à jour l'index en boucle
    }, 5000); // Intervalle de 3 secondes

    return () => clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage du composant
  }, [data]); // Dépend de data

  if (isLoading) {
    return <Spinner />; // Afficher le spinner pendant le chargement
  }

  if (error) {
    return (
      <div>Erreur lors de la récupération des données : {error.message}</div>
    ); // Afficher le message d'erreur en cas de problème
  }

  const event = data ? data[currentIndex] : null; // Obtenir l'événement actuel

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("background", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${event?.img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={event?.media}
            alt={event?.title?.[language]}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text
            color={"primary"}
            fontSize={"sm"}
            textTransform={"uppercase"}
            _dark={{
              color: "secondary",
            }}
          >
            {language === "fr"
              ? "évènements"
              : language === "en"
              ? "Event"
              : "حدث"}
          </Text>
          <Heading
            fontSize={"xxl"}
            fontFamily={"body"}
            color={"text"}
            fontWeight={500}
            _dark={{
              color: "secondary",
            }}
          >
            {event?.title?.[language]}
          </Heading>
          <Stack direction={"column"} align={"center"}>
            <Text fontWeight={400} fontSize={"sm"} color={"textSecondary"}>
              {event?.description?.[language]}
            </Text>
            <Text color={"gray.400"}>{event?.date?.split("T")?.[0]}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default CardSlider;
