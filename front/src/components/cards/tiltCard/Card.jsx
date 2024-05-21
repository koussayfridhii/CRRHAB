import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { Tilt } from "react-tilt";
import ProfileCard from "../profileCard/Card";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 50, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const TiltCard = ({ language, data }) => {
  return (
    <>
      {/* <Box bg={"primary"} minH="50dvh" w={{ base: "full", "2xl": "25dvw" }}>
        👽
      </Box> */}
      <Wrap>
        <WrapItem>
          <Tilt options={defaultOptions}>
            <ProfileCard data={data} language={language} />
          </Tilt>
        </WrapItem>
        <WrapItem>
          <Tilt options={defaultOptions}>
            <ProfileCard data={data} language={language} />
          </Tilt>
        </WrapItem>
        <WrapItem>
          <Tilt options={defaultOptions}>
            <ProfileCard data={data} language={language} />
          </Tilt>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default TiltCard;
