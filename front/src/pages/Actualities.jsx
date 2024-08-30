import React, { useEffect } from "react";
import { Box, Flex, chakra, List, ListItem, ListIcon } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "../components/cards/cardV4/Card";
import Spinner from "../components/spinner/Spinner";
import { useCallApi } from "../hooks/useCallApi";
import { useLocation } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";

const Actualities = () => {
  const language = useSelector((state) => state.language.language);
  const { pathname } = useLocation();
  const { data, error, isLoading } = useCallApi("news");
  let dataFiltred = []
  // useEffect(()=>{
  //   const actualities = (pathname === "/actualities" )// check type 
  //    dataFiltred = data?.filter(e=>{
  //     if(actualities) {return(
  //       e.type === "other"
  //     )}else{
  //       return(
  //         e.type === "advertisements"
  //       )}
      
  //   })
  //    // update the data state with the filtered data
  // },[data])
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
            {pathname==="/actualities" && (language === "fr"
              ? "Actualités"
              : language === "en"
              ? "News"
              : "الأخبار ")}
            {pathname!=="/actualities" && (language === "fr"
              ? "Annonces"
              : language === "en"
              ? "advertisements"
              : "إعلانات")}
          </chakra.p>
        </Box>
        <List>
          {data?.filter(e=>{
      if(pathname==="/actualities") {return(
        e.type === "other"
      )}else{
        return(
          e.type === "advertisements"
        )}
      
    })?.map((doc, i) => (
            <ListItem key={i} color="primary" _dark={{color:"secondary"}}>
              {/* <Card data={e} language={language} /> */}
              <ListIcon as={MdCheckCircle} />
                <chakra.a
                  href={`actualities/${doc._id}`}
                  _visited={{
                    color: "red.500",
                  }}
                >
                  {doc.title?.[language]}
                  <chakra.span fontSize="sm">

                  {
                    language === "fr" ? " publié le" : language === "en" ? " published on :" : "نشر في "
                  }
                 {doc?.createdAt?.split("T")?.[0]}
                  </chakra.span>
                </chakra.a>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
};

export default Actualities;
