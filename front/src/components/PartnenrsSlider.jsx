import React from "react";
import { Box, Image, Text, Heading, Container, Link } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersSlider = ({ data, language }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: data.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data.length,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: data.length / 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: data.length / 2,
        },
      },
    ],
  };

  return (
    <Box bg="background" py="4em">
      <Container maxW="container.lg">
        <Box textAlign="center" mb="6em">
          <Heading
            as="h2"
            size="lg"
            fontWeight="600"
            textTransform="uppercase"
            letterSpacing="0.3px"
            position="relative"
            _after={{
              content: '""',
              height: "3px",
              background: "primary",
              width: "80px",
              position: "absolute",
              left: "0",
              right: "0",
              margin: "auto",
              top: "calc(100% + 10px)",
            }}
          >
            {language === "en"
              ? "Our International Projects"
              : language === "fr"
              ? "Nos Projets Inertnationaux"
              : "مشاريعنا الدولية"}
          </Heading>
        </Box>
        <Slider {...settings} className="carousel-client">
          {data.map((partner, index) => (
            <Box key={index}>
              <Box boxSize={"20dvh"} className="slide">
                <Image
                  h={"full"}
                  src={partner.img}
                  alt={partner.title.en}
                  borderRadius="md"
                  objectFit={"cover"}
                />
              </Box>
              {/* <Text
                textAlign={"justify"}
                color={"text"}
                fontSize={"sm"}
                w={"80%"}
                height={"1px"}
                overflow={"hidden"}
                _hover={{ height: "100%" }}
              >
                {partner.description?.[language]}
              </Text> */}
              <Link
                textAlign={"center"}
                w={"full"}
                color="primary"
                href={partner.link}
                target="_blank"
              >
                {partner.title?.[language]}
              </Link>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default PartnersSlider;
