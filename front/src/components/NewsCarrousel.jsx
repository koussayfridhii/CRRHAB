import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "./spinner/Spinner";
import { useCallApi } from "../hooks/useCallApi";
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const NewsCarrousel = () => {
  const [slider, setSlider] = useState(null);
  const language = useSelector((state) => state.language.language);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const { data, error, isLoading } = useCallApi("news");

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <>
      <Box
        position={"relative"}
        height={"70dvh"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={60}
            height={60}
            color={"#ffffff"}
            fill={"none"}
          >
            <path
              d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={60}
            height={60}
            color={"#ffffff"}
            fill={"none"}
          >
            <path
              d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {data?.map((card, index) => (
            <Box
              key={index}
              height={"70dvh"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`linear-gradient(360deg, rgba(15,162,57,0.6951155462184874) 0%, rgba(23,154,92,0.5046393557422969) 65%, rgba(47,129,196,0.39539565826330536) 100%), url(${card.img})`}
              as={Link}
              to={`/actualities/${card._id}`}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container
                size="container.lg"
                height="100%"
                position="relative"
                zIndex={99}
              >
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"xl"}
                  position="absolute"
                  top="50%"
                  right={language === "ar" ? "7vw" : ""}
                  transform="translate(0, -50%)"
                  zIndex={1000}
                >
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    color={"white"}
                    dir={`${language === "ar" ? "rtl" : "ltr"}`}
                  >
                    {card.title?.[language]}
                  </Heading>
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    color="white"
                    style={{ width: "100%" }}
                    dir={`${language === "ar" ? "rtl" : "ltr"}`}
                  >
                    {card.description?.[language]}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      <Heading
        fontSize={"lg"}
        fontFamily={"body"}
        color={"primary"}
        px={5}
        py={2}
        fontWeight={400}
        borderRadius={"sm"}
        mt={3}
      >
        <ChakraLink as={Link} to="/actualities">
          {language === "fr"
            ? "toutes les actualités"
            : language === "en"
            ? "All News"
            : "كل المستجدات"}
        </ChakraLink>
      </Heading>
    </>
  );
};

export default NewsCarrousel;
