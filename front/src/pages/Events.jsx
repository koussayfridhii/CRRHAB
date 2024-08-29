import React from "react";
import { Box, Flex, chakra, ListIcon, ListItem, List } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "../components/cards/cardV4/Card";
import Spinner from "../components/spinner/Spinner";
import { useCallApi } from "../hooks/useCallApi";
import { MdCheckCircle } from "react-icons/md";
const Events = () => {
  const language = useSelector((state) => state.language.language);
  const { data, error, isLoading } = useCallApi("events");

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
      w="full"
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
        w="90%"
      >
        <Box
          textAlign={{
            lg: "center",
          }}
          mb={5}
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
              ? "Évènements"
              : language === "en"
              ? "Events"
              : "الأحداث "}
          </chakra.p>
        </Box>
        <List>
          {data?.map((doc, i) => (
            <ListItem key={i} color="primary" _dark={{color:"secondary"}}>
              {/* <Card data={e} language={language} /> */}
              <ListIcon as={MdCheckCircle} />
                <chakra.a
                  href={`events/${doc._id}`}
                  _visited={{
                    color: "red.500",
                  }}
                >
                  {doc.title?.[language]}
                  ,{doc?.date?.split("T")?.[0]}
                </chakra.a>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
};

export default Events;
