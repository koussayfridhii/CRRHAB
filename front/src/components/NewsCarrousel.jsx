import React, { useState, useCallback } from "react";
import { Box, Flex, Image, Stack, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "./spinner/Spinner";
import { useCallApi } from "../hooks/useCallApi";

const SLIDE_CHANGE_THRESHOLD = 100; // Seuil pour détecter le changement de diapositive lors du glissement

const arrowStyles = {
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  width: "auto",
  marginTop: "-22px",
  padding: "16px",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  transition: "0.6s ease",
  borderRadius: "0 3px 3px 0",
  userSelect: "none",
  _hover: {
    opacity: 0.8,
    backgroundColor: "black",
  },
};

const CustomNewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const language = useSelector((state) => state.language.language); // Obtenir la langue actuelle de l'état redux

  const { data, error, isLoading } = useCallApi("news"); // Récupérer les données d'actualités en utilisant un hook personnalisé

  const slides = (data || []).sort((a, b) => {
    // Assuming _created_at is in ISO date format, you can directly compare them
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  const slidesCount = slides.length;

  // Fonction pour passer à la diapositive précédente
  const prevSlide = useCallback(() => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  }, [slidesCount]);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  }, [slidesCount]);

  // Fonction pour gérer l'événement de mousedown pour le glissement
  const handleMouseDown = useCallback((e) => {
    setDragging(true);
    setDragStartX(e.clientX);
    e.preventDefault();
  }, []);

  // Fonction pour gérer l'événement de mousemove pour le glissement
  const handleMouseMove = useCallback(
    (e) => {
      if (dragging) {
        const diffX = e.clientX - dragStartX;
        setDragOffset(diffX);
        e.preventDefault();
      }
    },
    [dragging, dragStartX]
  );

  // Fonction pour gérer l'événement de mouseup pour le glissement
  const handleMouseUp = useCallback(() => {
    if (dragging) {
      setDragging(false);

      if (Math.abs(dragOffset) > SLIDE_CHANGE_THRESHOLD) {
        const slideChange = dragOffset > 0 ? prevSlide : nextSlide;
        slideChange();
      }

      setDragOffset(0);
    }
  }, [dragging, dragOffset, prevSlide, nextSlide]);

  // Calcul du décalage de la diapositive pour une transition fluide
  const slideOffset =
    currentSlide === 0
      ? Math.min(dragOffset, 0)
      : currentSlide === slidesCount - 1
      ? Math.max(dragOffset, 0)
      : dragOffset;

  // Style du carrousel pour l'effet de glissement
  const carouselStyle = {
    transition: dragging ? "none" : "all .5s",
    marginLeft: `calc(-${currentSlide * 100}% + ${slideOffset}px)`,
  };

  if (isLoading) {
    return <Spinner />; // Afficher le spinner pendant le chargement des données
  }

  if (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return <div>Error fetching data: {error.message}</div>; // Afficher le message d'erreur en cas d'échec de la récupération des données
  }

  return (
    <Flex
      width="full"
      alignItems="center"
      justifyContent="center"
      style={{ cursor: dragging ? "grabbing" : "auto" }}
      onMouseLeave={handleMouseUp}
    >
      <Flex width="full" overflow="hidden" position="relative">
        <Flex
          height="50dvh"
          width="full"
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          style={carouselStyle}
        >
          {slides.map((slide, sid) => (
            <Box
              key={`slide-${sid}`}
              boxSize="full"
              shadow="md"
              flex="none"
              as={Link}
              to={`/actualities/${slide._id}`}
              position="relative"
            >
              <Text
                color="white"
                fontSize="xs"
                padding="8px 12px"
                position="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt={slide.title?.[language]}
                boxSize="full"
                objectFit="cover"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                background="rgba(15, 162, 57, 0.5)"
              />
              <Stack
                padding="8px 12px"
                position="absolute"
                bottom="24px"
                textAlign="center"
                width="full"
                marginBottom="8"
                color="white"
              >
                <Text
                  fontSize="xxxl"
                  fontWeight="bold"
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {slide.title?.[language]}
                </Text>
                <Text fontSize="lg" dir={language === "ar" ? "rtl" : "ltr"}>
                  {slide.description?.[language]}
                </Text>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" position="absolute" bottom="8px" width="full">
          {Array.from({ length: slidesCount }).map((_, slideIndex) => (
            <Box
              key={`dots-${slideIndex}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              margin="0 2px"
              backgroundColor={
                currentSlide === slideIndex
                  ? "blackAlpha.800"
                  : "blackAlpha.500"
              }
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ backgroundColor: "blackAlpha.800" }}
              onClick={() => setCurrentSlide(slideIndex)}
            />
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

CustomNewsCarousel.propTypes = {
  language: PropTypes.string.isRequired,
};

export default CustomNewsCarousel;
