import { useState, useCallback } from "react";
import { Box, Flex, Image, Text, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../spinner/Spinner";
import { useCallApi } from "../../hooks/useCallApi";

const SLIDE_CHANGE_THRESHOLD = 100;

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

const CustomNewsCarousel = ({ title = "accueil" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const language = useSelector((state) => state.language.language);

  const { data, error, isLoading } = useCallApi("media");

  const slides = (data || []).filter(
    (image) => image.title.fr !== "accueil" && image.title.fr !== "unit"
  );

  const slidesCount = slides.length;

  const prevSlide = useCallback(() => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  }, [slidesCount]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  }, [slidesCount]);

  const handleMouseDown = useCallback((e) => {
    setDragging(true);
    setDragStartX(e.clientX);
    e.preventDefault();
  }, []);

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

  const slideOffset =
    currentSlide === 0
      ? Math.min(dragOffset, 0)
      : currentSlide === slidesCount - 1
      ? Math.max(dragOffset, 0)
      : dragOffset;

  const carouselStyle = {
    transition: dragging ? "none" : "all .5s",
    marginLeft: `calc(-${currentSlide * 100}% + ${slideOffset}px)`,
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return <div>Error fetching data: {error.message}</div>;
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
          height="100dvh"
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
                objectFit={title === "accueil" ? "cover" : "contain"}
              />
              <Flex
                position="absolute"
                bottom="0"
                left="0"
                width="full"
                height="full"
                backgroundColor="rgba(0, 0, 0, 0.5)"
                color="white"
                padding="8px"
                textAlign="center"
                justify="center"
                align="center"
              >
                <Text fontSize="9xl">{slide.title?.[language]}</Text>
              </Flex>
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
  title: PropTypes.string.isRequired,
};

export default CustomNewsCarousel;
