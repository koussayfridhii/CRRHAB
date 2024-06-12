import React from "react";
import "./Content.scss";
import { Box, Flex, Heading, Text, Highlight } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Organisation from "../../components/Organigram";
import { motion } from "framer-motion"; // Importez Framer Motion
import { useInView } from "react-intersection-observer"; // Importez useInView depuis react-intersection-observer
import AvatarWithRipple from "./Avatar";
import Spinner from "../../components/spinner/Spinner";
import { useCallApi } from "../../hooks/useCallApi";

const Content = () => {
  const language = useSelector((state) => state.language.language);
  // Définir un objet pour stocker les données multilingues pour le CRRHAB
  const { data, error, isLoading } = useCallApi("paragraphs");

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      bg={"background"}
      py={{ base: 1, xl: 1 }}
      px={{ base: 1, xl: 3, "2xl": 6 }}
      mx={"auto"}
      my={6}
      shadow={"2xl"}
      className="content"
      w={{ base: "95%", xl: "90%", "2xl": "95%" }}
      borderRadius={"lg"}
      dir={language === "ar" ? "rtl" : "ltr"}
      ref={ref1}
    >
      <section>
        <Box
          as={motion.div}
          initial={{ y: 50 }}
          animate={inView1 ? { y: 0 } : { y: 50 }}
          transition={{ duration: 1 }}
          w="full"
          bg="white"
          _dark={{ bg: "background" }}
          shadow={"lg"}
          minH={"30dvh"}
          mx={"auto"}
          my={"5dvh"}
          p={{ base: 2, xl: 0 }}
        >
          <Flex
            justify={"start"}
            align={"center"}
            direction="column"
            py={1}
            px={{ base: 2, xl: 10 }}
            gap={10}
          >
            {data?.[0]?.[language]?.split("\n").map((text, i) => (
              <Text
                key={i}
                textAlign="justify"
                color={"text"}
                fontSize="xl"
                mb={2}
              >
                <Highlight
                  query="crrhab"
                  styles={{
                    color: "text",
                    px: "2",
                    py: "1",
                    fontWeight: "bold",
                  }}
                >
                  {text}
                </Highlight>
              </Text>
            ))}
          </Flex>
          <AvatarWithRipple language={language} data={data?.[0]} />
        </Box>
      </section>

      <section>
        <Heading
          as={motion.div}
          initial={{ x: -50 }}
          animate={inView2 ? { x: 0 } : { x: -50 }}
          transition={{ duration: 1 }}
          _dark={{
            bg: "secondary",
          }}
          fontSize={"xxl"}
          fontFamily={"body"}
          color={"white"}
          bg={"primary"}
          px={5}
          py={2}
          fontWeight={400}
          borderRadius={"lg"}
          mb={6}
          ref={ref2}
        >
          {language === "en"
            ? "ORGANIZATION OF THE CENTER"
            : language === "fr"
            ? "ORGANISATION DU CENTRE"
            : "تنظيم المركز"}
        </Heading>
        <Organisation />
      </section>
    </Box>
  );
};

export default Content;
