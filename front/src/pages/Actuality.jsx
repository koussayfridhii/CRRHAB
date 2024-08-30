import React from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Flex, Image, SimpleGrid, chakra } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Spinner from "../components/spinner/Spinner";
import { useCallApi } from "../hooks/useCallApi";
const Actuality = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useCallApi("news");

  const actuality = data?.find((actuality) => actuality._id == id);
  const language = useSelector((state) => state.language.language);
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
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
        {!actuality?.img?.includes(".pdf") ? (<Image
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
        />) :  (<Image
          src="https://images.unsplash.com/photo-1502772066658-3006ff41449b?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={actuality?.title?.[language]}
          fit="cover"
          w="full"
          h={{
            base: 64,
            md: "full",
          }}
          bg="gray.100"
          loading="lazy"
        />)}
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
        {actuality.link !== "" && (
          <Button as={"a"} href={actuality?.link} target="_blank">
            {language === "en"
              ? "Read more"
              : language === "fr"
              ? "Lire la suite"
              : "قراءة المزيد"}
          </Button>
        )}
        {actuality.img?.includes(".pdf") && (
          <Button as={"a"} href={actuality?.img} target="_blank">
            {language === "en"
              ? "Read more"
              : language === "fr"
              ? "Lire la suite"
              : "قراءة المزيد"}
          </Button>
        )}
      </Flex>
    </SimpleGrid>
  );
};

export default Actuality;
