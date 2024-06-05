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
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{
              lg: "auto",
            }}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            {language === "fr"
              ? "Restez informé(e) avec nos dernières actualités et les dernières nouvelles dans la rubrique Actualités. Explorez des articles opportuns, des annonces et des perspectives sur des sujets qui vous intéressent."
              : language === "en"
              ? "Stay informed with our latest updates and breaking news in the Actualities section. Explore timely articles, announcements, and insights on topics that matter to you."
              : "ابقَ على اطلاعٍ باستمرار مع أحدث التحديثات وآخر الأخبار في قسم الأحداث. استكشف المقالات الموجهة في الوقت المناسب، والإعلانات، والتحليلات حول المواضيع التي تهمك.     "}{" "}
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
