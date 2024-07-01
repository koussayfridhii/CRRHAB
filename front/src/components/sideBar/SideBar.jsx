import React from "react";
import { Divider, chakra , Input} from "@chakra-ui/react";
import "./SideBar.scss";
import CardV1 from "../cards/cardV1/Card";
import CardV2 from "../cards/cardV2/Card";
import CardV3 from "../cards/cardV3/Card";
const SideBar = () => {
  return (
    <chakra.aside className="sideBar">
      <Input placeholder='Recherche ...'  w="90%" ml={5} bg="background" my={5} />
      <Divider
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
        // borderWidth={1}
        w={"80%"}
        mx={"auto"}
        borderColor={"primary"}
      />
      <CardV3 />
      <Divider
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
        // borderWidth={1}
        w={"80%"}
        mx={"auto"}
        borderColor={"primary"}
      />
      <CardV2 />
      <Divider
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
        // borderWidth={1}
        w={"80%"}
        mx={"auto"}
        borderColor={"primary"}
      />
      <CardV1 />
    </chakra.aside>
  );
};

export default SideBar;
