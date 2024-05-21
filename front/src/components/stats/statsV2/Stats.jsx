import React from "react";
import { chakra, Box, Flex, Icon, HStack, VStack } from "@chakra-ui/react";
import { IoCheckmark } from "react-icons/io5";

export default function StatsV2({ language, data }) {
  const Feature = (props) => {
    return (
      <Flex alignSelf="start" w="full">
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          _light={{ color: "green.500" }}
          viewBox="0 0 20 20"
          fill="currentColor"
          as={IoCheckmark}
        />
        <chakra.p fontSize="lg" color="text" {...props} />
      </Flex>
    );
  };
  return (
    <Flex
      bg="background"
      p={10}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="full" pt={8}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          mb={{ base: 6, sm: 0 }}
        >
          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            rounded="lg"
            borderTopRightRadius={0}
            borderBottomLeftRadius="lg"
            bg="bgGray"
            _dark={{ bg: "gray.700" }}
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="xxxl" fontWeight="bold">
                {language === "fr"
                  ? "Contractuels"
                  : language === "en"
                  ? "Contractual"
                  : "تعاقدي"}
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  {Object.values(data?.[0])?.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )}
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="xl"
                  fontWeight={"lighter"}
                  _light={{ color: "secondary" }}
                >
                  {language === "fr"
                    ? "Contractuels"
                    : language === "en"
                    ? "Contractual"
                    : "تعاقدي"}
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="gray.100"
              _dark={{ bg: "gray.800" }}
              borderBottomLeftRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>
                  {language === "fr"
                    ? `Nombre de Professeurs : ${data[0]?.professeurs}`
                    : language === "en"
                    ? `Number of Professors: ${data[0]?.professeurs}`
                    : `عدد الأساتذة: ${data[0]?.professeurs}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `MAHabilités : ${data?.[0]?.MAHabilités}`
                    : language === "en"
                    ? `MAHabilités: ${data?.[0]?.MAHabilités}`
                    : `MAHabilités: ${data?.[0]?.MAHabilités}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `MA : ${data?.[0]?.MA}`
                    : language === "en"
                    ? `MA: ${data?.[0]?.MA}`
                    : `MA: ${data?.[0]?.MA}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `Assistans : ${data?.[0]?.Assistans}`
                    : language === "en"
                    ? `Assistants: ${data?.[0]?.Assistans}`
                    : `المساعدين: ${data?.[0]?.Assistans}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `ingénieurs : ${data?.[0]?.ingénieurs}`
                    : language === "en"
                    ? `Engineers: ${data?.[0]?.ingénieurs}`
                    : `المهندسين: ${data?.[0]?.ingénieurs}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `techniciens : ${data?.[0]?.techniciens}`
                    : language === "en"
                    ? `Technicians: ${data?.[0]?.techniciens}`
                    : `الفنيين: ${data?.[0]?.techniciens}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `agentsLabo : ${data?.[0]?.agentsLabo}`
                    : language === "en"
                    ? `Lab Assistants: ${data?.[0]?.agentsLabo}`
                    : `مساعدي المعمل: ${data?.[0]?.agentsLabo}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `CadresAgentsAdmin : ${data?.[0]?.CadresAgentsAdmin}`
                    : language === "en"
                    ? `Admin Staff: ${data?.[0]?.CadresAgentsAdmin}`
                    : `موظفي الإدارة: ${data?.[0]?.CadresAgentsAdmin}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `ouvriers : ${data?.[0]?.ouvriers}`
                    : language === "en"
                    ? `Workers: ${data?.[0]?.ouvriers}`
                    : `العمال: ${data?.[0]?.ouvriers}`}
                </Feature>
              </VStack>
            </VStack>
          </Flex>
          <Flex
            flex={{ base: 1, lg: "initial" }}
            w={{ lg: 2.4 / 7 }}
            rounded="lg"
            bg="bgGray"
            _dark={{ bg: "gray.700" }}
            mt={{ base: 4, sm: -4 }}
            shadow="xl"
            zIndex={30}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="xxxl" fontWeight="bold">
                {language === "fr"
                  ? "Titulaires"
                  : language === "en"
                  ? "Principal"
                  : "أساسيون"}
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  {Object.values(data?.[1])?.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )}
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="xl"
                  fontWeight={"lighter"}
                  _light={{ color: "secondary" }}
                >
                  {language === "fr"
                    ? "Contractuels"
                    : language === "en"
                    ? "Contractual"
                    : "تعاقدي"}
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="gray.100"
              _dark={{ bg: "gray.800" }}
              borderBottomLeftRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>
                  {language === "fr"
                    ? `Nombre de Professeurs : ${data[0]?.professeurs}`
                    : language === "en"
                    ? `Number of Professors: ${data[0]?.professeurs}`
                    : `عدد الأساتذة: ${data[0]?.professeurs}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `MAHabilités : ${data?.[0]?.MAHabilités}`
                    : language === "en"
                    ? `MAHabilités: ${data?.[0]?.MAHabilités}`
                    : `MAHabilités: ${data?.[0]?.MAHabilités}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `MA : ${data?.[0]?.MA}`
                    : language === "en"
                    ? `MA: ${data?.[0]?.MA}`
                    : `MA: ${data?.[0]?.MA}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `Assistans : ${data?.[0]?.Assistans}`
                    : language === "en"
                    ? `Assistants: ${data?.[0]?.Assistans}`
                    : `المساعدين: ${data?.[0]?.Assistans}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `ingénieurs : ${data?.[0]?.ingénieurs}`
                    : language === "en"
                    ? `Engineers: ${data?.[0]?.ingénieurs}`
                    : `المهندسين: ${data?.[0]?.ingénieurs}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `techniciens : ${data?.[0]?.techniciens}`
                    : language === "en"
                    ? `Technicians: ${data?.[0]?.techniciens}`
                    : `الفنيين: ${data?.[0]?.techniciens}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `agentsLabo : ${data?.[0]?.agentsLabo}`
                    : language === "en"
                    ? `Lab Assistants: ${data?.[0]?.agentsLabo}`
                    : `مساعدي المعمل: ${data?.[0]?.agentsLabo}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `CadresAgentsAdmin : ${data?.[0]?.CadresAgentsAdmin}`
                    : language === "en"
                    ? `Admin Staff: ${data?.[0]?.CadresAgentsAdmin}`
                    : `موظفي الإدارة: ${data?.[0]?.CadresAgentsAdmin}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `ouvriers : ${data?.[0]?.ouvriers}`
                    : language === "en"
                    ? `Workers: ${data?.[0]?.ouvriers}`
                    : `العمال: ${data?.[0]?.ouvriers}`}
                </Feature>
              </VStack>
            </VStack>
          </Flex>

          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            rounded="lg"
            borderTopRightRadius={0}
            borderBottomLeftRadius="lg"
            bg="bgGray"
            _dark={{ bg: "gray.700" }}
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="xxxl" fontWeight="bold">
                {language === "fr"
                  ? "Totale"
                  : language === "en"
                  ? "Total"
                  : "المجموع"}
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  {Object.values(data?.[2])?.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )}
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="xl"
                  fontWeight={"lighter"}
                  _light={{ color: "secondary" }}
                >
                  {language === "fr"
                    ? "Totale"
                    : language === "en"
                    ? "Total"
                    : "المجموع"}
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="gray.100"
              _dark={{ bg: "gray.800" }}
              borderBottomLeftRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>
                  {language === "fr"
                    ? `Nombre de Professeurs : ${data[2]?.professeurs}`
                    : language === "en"
                    ? `Number of Professors: ${data[2]?.professeurs}`
                    : `عدد الأساتذة: ${data[2]?.professeurs}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `MAHabilités : ${data?.[2]?.MAHabilités}`
                    : language === "en"
                    ? `MAHabilités: ${data?.[2]?.MAHabilités}`
                    : `MAHabilités: ${data?.[2]?.MAHabilités}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `MA : ${data?.[2]?.MA}`
                    : language === "en"
                    ? `MA: ${data?.[2]?.MA}`
                    : `MA: ${data?.[2]?.MA}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `Assistans : ${data?.[2]?.Assistans}`
                    : language === "en"
                    ? `Assistants: ${data?.[2]?.Assistans}`
                    : `المساعدين: ${data?.[2]?.Assistans}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `ingénieurs : ${data?.[2]?.ingénieurs}`
                    : language === "en"
                    ? `Engineers: ${data?.[2]?.ingénieurs}`
                    : `المهندسين: ${data?.[2]?.ingénieurs}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `techniciens : ${data?.[2]?.techniciens}`
                    : language === "en"
                    ? `Technicians: ${data?.[2]?.techniciens}`
                    : `الفنيين: ${data?.[2]?.techniciens}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `agentsLabo : ${data?.[2]?.agentsLabo}`
                    : language === "en"
                    ? `Lab Assistants: ${data?.[2]?.agentsLabo}`
                    : `مساعدي المعمل: ${data?.[2]?.agentsLabo}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `CadresAgentsAdmin : ${data?.[2]?.CadresAgentsAdmin}`
                    : language === "en"
                    ? `Admin Staff: ${data?.[2]?.CadresAgentsAdmin}`
                    : `موظفي الإدارة: ${data?.[2]?.CadresAgentsAdmin}`}
                </Feature>
                <Feature>
                  {language === "fr"
                    ? `ouvriers : ${data?.[2]?.ouvriers}`
                    : language === "en"
                    ? `Workers: ${data?.[2]?.ouvriers}`
                    : `العمال: ${data?.[2]?.ouvriers}`}
                </Feature>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
