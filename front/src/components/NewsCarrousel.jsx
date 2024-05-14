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
      title: { fr: "Actulité n1", ar: "اخبار", en: "News" },
      description: {
        fr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet pariatur exercitationem unde neque. Culpa facere quae alias fugiat adipisci reiciendis voluptates nisi earum eaque numquam blanditiis labore laudantium, odio temporibus.",
        ar: "اخبار",
        en: "News",
      },
      image:
        "https://plus.unsplash.com/premium_photo-1661632638463-9c2eb5586809?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: { fr: "Actulité n2", ar: "اخبار", en: "News" },
      description: {
        fr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet pariatur exercitationem unde neque. Culpa facere quae alias fugiat adipisci reiciendis voluptates nisi earum eaque numquam blanditiis labore laudantium, odio temporibus.",
        ar: "اخبار",
        en: "News",
      },
      image:
        "https://images.unsplash.com/photo-1708255562611-1e6a003b4ca8?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: { fr: "Actulité 3", ar: "اخبار", en: "News" },
      description: {
        fr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet pariatur exercitationem unde neque. Culpa facere quae alias fugiat adipisci reiciendis voluptates nisi earum eaque numquam blanditiis labore laudantium, odio temporibus.",
        ar: "اخبار",
        en: "News",
      },
      image:
        "https://images.unsplash.com/photo-1459802243250-97792e921da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

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
          {cards.map((card, index) => (
            <Box
              key={index}
              height={'70dvh'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`linear-gradient(360deg, rgba(15,162,57,0.6951155462184874) 0%, rgba(23,154,92,0.5046393557422969) 65%, rgba(47,129,196,0.39539565826330536) 100%), url(${card.image})`}
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
        <ChakraLink as={Link} to="/">
          {language === "fr"
            ? "toutes les actulités"
            : language === "en"
            ? "All News"
            : "كل المستجدات"}
        </ChakraLink>
      </Heading>
    </>
  );
};

export default NewsCarrousel;
