import React from "react";
import NewsCarrousel from "../../components/NewsCarrousel";
import SideBar from "../../components/sideBar/SideBar";
import { useSelector } from "react-redux";
import Content from "../Content/Content";
import {
  Divider,
  Wrap,
  WrapItem,
  chakra,
  Heading,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Testimonial from "../../components/Testimonials";
import Contact from "../../components/Contact";
import FaqV2 from "../../components/FaqV2";
import "./Landing.scss";
import Personnels from "../Content/Personnels";
const Landing = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <div className="landing">
      <nav>
        <NewsCarrousel />
      </nav>
      <Divider
        my={5}
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
      <Grid
        dir={language === "ar" ? "rtl" : "ltr"}
        w={"100%"}
        p={0}
        templateColumns={{ base: "100%", xl: "25% 75%" }}
        templateRows={{ base: "auto auto", xl: "auto" }}
      >
        <GridItem mr={{ xl: -10, "2xl": 0 }}>
          <SideBar />
        </GridItem>
        <GridItem>
          <Content />
        </GridItem>
      </Grid>
      {/* <Divider
        my={5}
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
      <chakra.section px={10}>
        <Personnels />
      </chakra.section> */}
      <Divider
        my={5}
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
      {/* <chakra.section px={10}>
        <Heading
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
        >
          {language === "en"
            ? "Testimonials"
            : language === "fr"
            ? "Témoignages"
            : "الشهادات"}
        </Heading>
        <Wrap wrap={"wrap"} mx={"auto"} justify={"center"} w={"full"}>
          <WrapItem>
            <Testimonial />
          </WrapItem>
          <WrapItem>
            <Testimonial />
          </WrapItem>
          <WrapItem>
            <Testimonial />
          </WrapItem>
        </Wrap>
      </chakra.section>
      <Divider
        my={5}
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
      /> */}
      {/* <chakra.section px={10}>
        <Heading
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
        >
          {language === "en"
            ? "FAQ"
            : language === "fr"
            ? "FAQ"
            : "الأسئلة المتكررة"}
        </Heading>
        <FaqV2 />
      </chakra.section>
      <Divider
        my={5}
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
      /> */}
      <chakra.section px={10} id="contact">
        <Contact />
      </chakra.section>
    </div>
  );
};

export default Landing;
