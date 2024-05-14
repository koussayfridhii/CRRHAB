import React from "react";

import {
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { data } from "../../../../productionData";
import StatsV1 from "../../../../components/stats/statsV1/Stats";
export default function ScientificProductionsV1() {
  const language = useSelector((state) => state.language.language);
  return (
    <Flex
      bg="white"
      _dark={{ bg: "background" }}
      p={{ base: 0, md: 20 }}
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="absolute"
    >
      <Box
        shadow="xl"
        bg="background"
        px={8}
        py={20}
        mx="auto"
        borderRadius={"xl"}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <StatsV1 />
        {data?.map((e, i) => {
          return (
            <>
              <SimpleGrid
                alignItems="center"
                columns={{ base: 1, md: 2 }}
                flexDirection="column-reverse"
                mb={24}
                spacingY={{ base: 10, md: 32 }}
                spacingX={{ base: 10, md: 24 }}
                key={i}
              >
                <Flex
                  w={"full"}
                  h={"full"}
                  direction={"column"}
                  align={"center"}
                  justify={"center"}
                  order={i % 2 !== 0 && { base: "initial", md: 2 }}
                >
                  <chakra.h2
                    mb={4}
                    fontSize={{ base: "xxl", md: "xxxxl" }}
                    fontWeight="bold"
                    letterSpacing="tight"
                    color="primary"
                    _dark={{ color: "secondary" }}
                    lineHeight={{ md: "shorter" }}
                    // textShadow="2px 0 currentcolor"
                  >
                    {e.title?.[language]}
                  </chakra.h2>
                  <Flex
                    my={5}
                    textAlign={{ base: "center", sm: "left" }}
                    color="text"
                    direction={"column"}
                    w={"full"}
                    gap={5}
                  >
                    {language === "en" ? (
                      <Text
                        fontWeight={"bold"}
                        color={"secondary"}
                        fontSize={"lg"}
                        _dark={{ color: "primary" }}
                      >
                        Journal
                      </Text>
                    ) : language === "fr" ? (
                      <Text
                        fontWeight={"bold"}
                        color={"secondary"}
                        fontSize={"lg"}
                        _dark={{ color: "primary" }}
                      >
                        Journal
                      </Text>
                    ) : (
                      <Text
                        fontWeight={"bold"}
                        color={"secondary"}
                        fontSize={"lg"}
                        _dark={{ color: "primary" }}
                      >
                        مجلة
                      </Text>
                    )}

                    <Flex>
                      {e.journal?.[language]}
                      {language === "en" ? (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          Volume
                        </Text>
                      ) : language === "fr" ? (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          Volume
                        </Text>
                      ) : (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          فصل
                        </Text>
                      )}
                      <Text
                        fontWeight={"bold"}
                        color={"text"}
                        fontSize={"lg"}
                        ml={language !== "ar" ? 8 : 0}
                        mr={language === "ar" ? 8 : 0}
                      >
                        {e.journal?.volume}
                      </Text>
                    </Flex>
                    <Flex>
                      {e.journal?.[language]}
                      {language === "en" ? (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          Issue
                        </Text>
                      ) : language === "fr" ? (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          Numéro
                        </Text>
                      ) : (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          العدد
                        </Text>
                      )}
                      <Text
                        fontWeight={"bold"}
                        color={"text"}
                        fontSize={"lg"}
                        ml={language !== "ar" ? 8 : 0}
                        mr={language === "ar" ? 8 : 0}
                      >
                        {e.journal?.issue}
                      </Text>
                    </Flex>
                    <Flex>
                      {e.journal?.[language]}
                      {language === "en" ? (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          Pages
                        </Text>
                      ) : language === "fr" ? (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          Pages
                        </Text>
                      ) : (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          الصفحات
                        </Text>
                      )}
                      <Text
                        fontWeight={"bold"}
                        color={"text"}
                        fontSize={"lg"}
                        ml={language !== "ar" ? 8 : 0}
                        mr={language === "ar" ? 8 : 0}
                      >
                        {e.journal?.pages}
                      </Text>
                    </Flex>
                    <Flex>
                      {e.journal?.[language]}
                      {language === "en" ? (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          ISSN
                        </Text>
                      ) : language === "fr" ? (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          ISSN
                        </Text>
                      ) : (
                        <Text
                          fontWeight={"bold"}
                          color={"secondary"}
                          fontSize={"lg"}
                          ml={language !== "ar" ? 4 : 0}
                          mr={language === "ar" ? 4 : 0}
                          _dark={{ color: "primary" }}
                        >
                          الرقم الدولي الموحد للدوريات
                        </Text>
                      )}
                      <Text
                        fontWeight={"bold"}
                        color={"text"}
                        fontSize={"lg"}
                        ml={language !== "ar" ? 8 : 0}
                        mr={language === "ar" ? 8 : 0}
                      >
                        <Flex direction={"column"} gap={2}>
                          <Flex gap={3}>
                            <Text
                              color={"primary"}
                              textTransform={"capitalize"}
                            >
                              {language === "en"
                                ? "electronic"
                                : language === "fr"
                                ? "électronique"
                                : "الالكترونية"}
                            </Text>
                            <Text color={"textSecondary"}>
                              {e.journal?.ISSN?.electronic}
                            </Text>
                          </Flex>
                          <Flex gap={3}>
                            <Text
                              color={"primary"}
                              textTransform={"capitalize"}
                            >
                              {language === "en"
                                ? "print"
                                : language === "fr"
                                ? "imprimé"
                                : "الطباعية"}
                            </Text>
                            <Text color={"textSecondary"}>
                              {e.journal?.ISSN?.print}
                            </Text>
                          </Flex>
                        </Flex>
                      </Text>
                    </Flex>
                    {language === "en" ? (
                      <Text
                        fontWeight={"bold"}
                        color={"secondary"}
                        fontSize={"lg"}
                        _dark={{ color: "primary" }}
                      >
                        Authors
                      </Text>
                    ) : language === "fr" ? (
                      <Text
                        fontWeight={"bold"}
                        color={"secondary"}
                        fontSize={"lg"}
                        _dark={{ color: "primary" }}
                      >
                        Auteurs
                      </Text>
                    ) : (
                      <Text
                        fontWeight={"bold"}
                        color={"secondary"}
                        fontSize={"lg"}
                        _dark={{ color: "primary" }}
                      >
                        الكتاب
                      </Text>
                    )}
                    <Wrap gap={4} justify={"start"}>
                      {e.authors?.[language]?.map((author) => {
                        return (
                          <Text
                            textAlign={"center"}
                            borderRight={"2px"}
                            px={3}
                            borderColor={"primary"}
                          >
                            {author}
                          </Text>
                        );
                      })}
                    </Wrap>
                    <Text
                      color={"textSecondary"}
                      fontSize={"xs"}
                      fontWeight={"lighter"}
                    >
                      {`${
                        language === "en"
                          ? "published on: "
                          : language === "fr"
                          ? "publié le :"
                          : ": نشر في"
                      }  ${e.published_date?.[language]}`}
                    </Text>
                  </Flex>
                  <Button
                    w={{ base: "full", sm: "auto" }}
                    size="lg"
                    bg="gray.900"
                    _dark={{ bg: "gray.700" }}
                    _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
                    color="gray.100"
                    as="a"
                    mt={5}
                    href={e.journal?.url}
                    target="_blank"
                  >
                    {language === "en"
                      ? "Learn More"
                      : language === "fr"
                      ? "Voir Plus"
                      : "شاهد المزيد"}
                  </Button>
                </Flex>
                <Flex
                  w={{ base: "100%", md: "75%" }}
                  h={{ base: "100%", md: "75%" }}
                  overflow={"hidden"}
                  justify={"center"}
                  align={"center"}
                  borderLeft={i % 2 === 0 && "2px"}
                  borderRight={i % 2 !== 0 && "2px"}
                  borderColor={"primary"}
                  _dark={{
                    borderColor: "secondary",
                  }}
                  px={{base:10  , '2xl':40}}
                >
                  <Image
                    src="https://images.pexels.com/photos/19959461/pexels-photo-19959461/free-photo-of-ete-arbuste-jaune-agriculture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Dan Abramov"
                    objectFit="cover"
                    w={"full"}
                    shadow="xl"
                  />
                </Flex>
              </SimpleGrid>
              <Divider
                _dark={{
                  bg: "secondary",
                  borderColor: "secondary",
                }}
                orientation="horizontal"
                bg={"primary"}
                // borderWidth={1}
                w={"90%"}
                mx={"auto"}
                borderColor={"primary"}
              />
            </>
          );
        })}
      </Box>
    </Flex>
  );
}
