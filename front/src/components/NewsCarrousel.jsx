import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
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
  const cards = [
    {
      title: { fr: "Design Projects 1", ar: "اخبار", en: "News" },
      description: { fr: "Design Projects 1", ar: "اخبار", en: "News" },
      image:
        "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      title: { fr: "Design Projects 1", ar: "اخبار", en: "News" },
      description: { fr: "Design Projects 1", ar: "اخبار", en: "News" },
      image:
        "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    },
    {
      title: { fr: "Design Projects 1", ar: "اخبار", en: "News" },
      description: { fr: "Design Projects 1", ar: "اخبار", en: "News" },
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"80dvh"}
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
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(117, 19, 93, 0.35)), url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container
              size="container.lg"
              height="600px"
              position="relative"
              zIndex={99}
            >
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="75%"
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
  );
};

export default NewsCarrousel;
