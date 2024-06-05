import React from "react";
import "./Spinner.scss";
import { Flex } from "@chakra-ui/react";
const Spinner = () => {
  return (
    <Flex
      bg={"background"}
      w={"full"}
      h="20dvh"
      justify={"center"}
      align={"center"}
    >
      <div className="loader"></div>
    </Flex>
  );
};

export default Spinner;
