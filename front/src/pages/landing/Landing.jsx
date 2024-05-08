import React from "react";
import NewsCarrousel from "../../components/NewsCarrousel";
import SideBar from "../../components/sideBar/SideBar";
import { useSelector } from "react-redux";
import Content from "../Content/Content";
import { Divider, Wrap, WrapItem } from "@chakra-ui/react";
import Testimonial from "../../components/Testimonials";
import Contact from "../../components/Contact";
import "./Landing.scss";
const Landing = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <div className="landing">
      <nav>
        <NewsCarrousel />
      </nav>
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
      <main dir={language === "ar" ? "rtl" : "ltr"} style={{ display: "flex" }}>
        <SideBar />
        <Content />
      </main>
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
      <section>
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
      </section>
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
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Landing;
