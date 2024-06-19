import { Box, Image, SimpleGrid, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"; // Importer framer-motion pour les animations

const Tunisie = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <SimpleGrid
      columns={1}
      w={"100%"}
      bg={"background"}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <SimpleGrid
        columns={1}
        gap={3}
        px={5}
        w={{ base: "full", "2xl": "80dvw" }}
        mx={"auto"}
        h={"fit-content"}
      >
        <SimpleGrid columns={4} gap={3}>
          <Box w="full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                boxSize="15vh"
                objectFit="contain"
                src="/assets/images/tunisie.png"
                fallbackSrc="https://via.placeholder.com/150"
                textAlign={"center"}
                mx={"auto"}
              />
            </motion.div>
          </Box>
          <Box w="full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                boxSize="15vh"
                objectFit="contain"
                src="/assets/images/Logo_Ministère_de_l'Agriculture_(Tunisie).png"
                fallbackSrc="https://via.placeholder.com/150"
                mx={"auto"}
              />
            </motion.div>
          </Box>
          <Box w="full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                boxSize="15vh"
                w={"25vh"}
                objectFit="contain"
                src="/assets/images/logoIRESA_couleur_fr.png"
                fallbackSrc="https://via.placeholder.com/150"
                mx={"auto"}
              />
            </motion.div>
          </Box>
          <Box w="full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Image
                objectFit="contain"
                boxSize="15vh"
                w={"25vh"}
                src="/assets/images/crrhab.png"
                fallbackSrc="https://via.placeholder.com/150"
                mx={"auto"}
              />
            </motion.div>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          columns={4}
          gap={3}
          display={{ base: "none", xl: "grid" }}
          fontWeight={"bold"}
          fontSize={"sm"}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Text textAlign={"center"}>
              {language === "fr" ? (
                <>
                  République Tunisienne <br />
                </>
              ) : language === "ar" ? (
                <>
                  الجمهورية التونسية <br />
                </>
              ) : (
                <>
                  Tunisian Republic <br />
                </>
              )}
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Text textAlign={"center"}>
              {language === "fr" ? (
                <>
                  Ministère de l’Agriculture, <br />
                  des Ressources Hydrauliques <br />
                  et de la Pêche
                </>
              ) : language === "ar" ? (
                <>
                  وزارة الــفــلاحــة <br />
                  والموارد المائية
                  <br />
                  والصيد البحري
                </>
              ) : (
                <>
                  The Minister of Agriculture,
                  <br />
                  Hydraulic Resources
                  <br />
                  and fishing
                </>
              )}
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Text textAlign={"center"}>
              {language === "fr" ? (
                <>
                  Institution de la Recherche <br />
                  et de l'Enseignement <br />
                  Supérieur Agricoles
                </>
              ) : language === "ar" ? (
                <>
                  مؤسسة البحث والتعليم <br />
                  العالي الفلاحي
                </>
              ) : (
                <>
                  Institution of Agricultural <br />
                  Research and Higher Education
                </>
              )}
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Text textAlign={"center"}>
              {language === "fr" ? (
                <>
                  Centre Régional des <br /> Recherches en Horticulture <br />
                  et Agriculture Biologique
                </>
              ) : language === "en" ? (
                <>
                  Regional Research Center
                  <br />
                  in Horticulture and Organic Agriculture
                </>
              ) : (
                <>
                  المركز الجهوي للبحوث <br /> في البستنة و الفلاحة البيولوجية
                </>
              )}
            </Text>
          </motion.div>
        </SimpleGrid>
      </SimpleGrid>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <chakra.h1
          fontSize={{ base: "xxl", xl: "xxxl", "2xl": "xxxxl" }}
          fontWeight={"bold"}
          textAlign={"center"}
          color={"primary"}
          my={3}
          borderTop={"2px"}
          borderColor={"primary"}
          _dark={{ color: "secondary", borderColor: "secondary" }}
          py={3}
        >
          {language === "fr" ? (
            <>
              Centre Régional des Recherches en Horticulture et Agriculture
              Biologique
            </>
          ) : language === "en" ? (
            <>
              Regional Research Center in Horticulture and Organic Agriculture
            </>
          ) : (
            <>المركز الجهوي للبحوث في البستنة و الفلاحة البيولوجية</>
          )}
        </chakra.h1>
      </motion.div>
    </SimpleGrid>
  );
};

export default Tunisie;
