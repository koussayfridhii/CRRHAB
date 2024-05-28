import { Box, Flex, Icon, SimpleGrid, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { data } from "../../../../productionData";
import { useSelector } from "react-redux";
import StatsV1 from "../../../../components/stats/statsV1/Stats";
const ScientificProductionsV2 = () => {
  const language = useSelector((state) => state.language.language);
  const Feature = (props) => {
    const e = props.data;
    return (
      <Box
        bg={"white"}
        borderRadius={"xl"}
        shadow={"xl"}
        _dark={{ bg: "#222733" }}
        p={5}
        _hover={{
          shadow: "sm",
          transform: "Scale(0.98)",
        }}
        cursor={"pointer"}
        onClick={() => {
          window.open(e.journal?.url, "_blank");
        }}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          mb={4}
          rounded="full"
          color={`${props.color}.600`}
          _dark={{
            color: `${props.color}.100`,
          }}
          bg={`${props.color}.100`}
          mx={"auto"}
        >
          <Icon
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            textAlign={"center"}
          >
            {props.icon}
          </Icon>
        </Flex>
        <Flex
          my={5}
          //   textAlign={{ base: "center", sm: "left" }}
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
                fontSize={"sm"}
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
                fontSize={"sm"}
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
                fontSize={"sm"}
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
              fontSize={"xs"}
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
                fontSize={"sm"}
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
                fontSize={"sm"}
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
                fontSize={"sm"}
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
              fontSize={"xs"}
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
                fontSize={"sm"}
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
                fontSize={"sm"}
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
                fontSize={"sm"}
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
              fontSize={"xs"}
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
                fontSize={"sm"}
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
                fontSize={"sm"}
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
                fontSize={"sm"}
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
              fontSize={"xs"}
              ml={language !== "ar" ? 8 : 0}
              mr={language === "ar" ? 8 : 0}
            >
              <Flex direction={"column"} gap={2}>
                <Flex gap={3}>
                  <Text color={"primary"} textTransform={"capitalize"}>
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
                  <Text color={"primary"} textTransform={"capitalize"}>
                    {language === "en"
                      ? "print"
                      : language === "fr"
                      ? "imprimé"
                      : "الطباعية"}
                  </Text>
                  <Text color={"textSecondary"}>{e.journal?.ISSN?.print}</Text>
                </Flex>
              </Flex>
            </Text>
          </Flex>
        </Flex>
        {language === "en" ? (
          <Text
            fontWeight={"bold"}
            color={"secondary"}
            fontSize={"lg"}
            mb={2}
            _dark={{ color: "primary" }}
          >
            Authors
          </Text>
        ) : language === "fr" ? (
          <Text
            fontWeight={"bold"}
            color={"secondary"}
            fontSize={"lg"}
            mb={2}
            _dark={{ color: "primary" }}
          >
            Auteurs
          </Text>
        ) : (
          <Text
            fontWeight={"bold"}
            color={"secondary"}
            fontSize={"lg"}
            mb={2}
            _dark={{ color: "primary" }}
          >
            الكتاب
          </Text>
        )}
        <Wrap gap={4} justify={"start"} mb={2}>
          {e.authors?.[language]?.map((author, i) => {
            return (
              <Text
                textAlign={"center"}
                borderRight={"2px"}
                px={3}
                borderColor={"primary"}
                fontSize={"xs"}
                key={author + i}
              >
                {author}
              </Text>
            );
          })}
        </Wrap>
        <Text color={"textSecondary"} fontSize={"xs"} fontWeight={"lighter"}>
          {`${
            language === "en"
              ? "published on: "
              : language === "fr"
              ? "publié le :"
              : ": نشر في"
          }  ${e.published_date?.[language]}`}
        </Text>
      </Box>
    );
  };

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
    >
      <Box
        px={8}
        py={20}
        mx="auto"
        bg="background"
        shadow="xl"
        borderRadius={"lg"}
      >
        <StatsV1 />
        {/* <Box
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
            Features
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
            Get insights to dig down into what&apos;s powering your growth the
            most.
          </chakra.p>
        </Box> */}
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
          spacingX={{
            base: 16,
            lg: 24,
          }}
          spacingY={20}
          mt={6}
        >
          {data?.map((e, i) => {
            const num = Math.floor(Math.random() * 4);
            const colors = ["red", "green", "blue", "pink"];
            return (
              <Feature
                color={colors[num]}
                title={e.title?.[language]}
                icon={
                  <>
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
                      clipRule="evenodd"
                    />
                    <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                  </>
                }
                key={i + e.journal.ISSN + e.published_date}
                data={e}
              ></Feature>
            );
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default ScientificProductionsV2;
