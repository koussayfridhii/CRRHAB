import React from "react";
import { data } from "../actualitiesData";
import { useParams } from "react-router-dom";
import { Box, Flex, Image, SimpleGrid, chakra } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Actuality = () => {
  const { id } = useParams();
  console.log(data);
  const actuality = data.find((actuality) => actuality.link == id);
  const language = useSelector((state) => state.language.language);
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={0}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Flex>
        <Image
          src={actuality?.img}
          alt={actuality?.title?.[language]}
          fit="cover"
          w="full"
          h={{
            base: 64,
            md: "full",
          }}
          bg="gray.100"
          loading="lazy"
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        bg={"background"}
        px={{
          base: 4,
          md: 8,
          lg: 20,
        }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color="brand.600"
          _dark={{
            color: "gray.300",
          }}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          {language === "en"
            ? "Explore our latest news and updates"
            : language === "fr"
            ? "Découvrez nos dernières actualités et mises à jour."
            : "استكشف أحدث الأخبار والتحديثات لدينا."}
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{
            base: "4xl",
            md: "4xl",
            lg: "5xl",
          }}
          fontWeight="bold"
          color="brand.600"
          _dark={{
            color: "gray.300",
          }}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          {actuality?.title?.[language]}
        </chakra.h1>
        <chakra.p
          pr={{
            base: 0,
            lg: 16,
          }}
          mb={4}
          fontSize="lg"
          color="brand.600"
          _dark={{
            color: "gray.400",
          }}
          letterSpacing="wider"
        >
          {actuality?.description?.[language]}
        </chakra.p>
      </Flex>
    </SimpleGrid>
  );
};

export default Actuality;
