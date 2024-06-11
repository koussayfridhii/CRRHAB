import React from "react";
import { Box, Flex, chakra, Wrap, WrapItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "../components/cards/cardV4/Card";
import Spinner from "../components/spinner/Spinner";
import { useCallApi } from "../hooks/useCallApi";

const Actualities = () => {
  const language = useSelector((state) => state.language.language);
  const { data, error, isLoading } = useCallApi("news");

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <Flex
      bg="white"
      _dark={{
        bg: "background",
      }}
      p={{ base: 0, md: 20 }}
      w="auto"
      justifyContent="center"
      alignItems="center"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Box
        px={8}
        py={20}
        mx="auto"
        bg="background"
        shadow="xl"
        borderRadius={"lg"}
      >
        <Box
          textAlign={{
            lg: "center",
          }}
        >
          <chakra.p
            mt={2}
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{
              color: "gray.900",
            }}
          >
            {language === "fr"
              ? "Actualités"
              : language === "en"
              ? "News"
              : "الأخبار "}
          </chakra.p>
        </Box>
        <Wrap>
          {data?.map((e, i) => (
            <WrapItem key={i}>
              <Card data={e} language={language} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
};

export default Actualities;
