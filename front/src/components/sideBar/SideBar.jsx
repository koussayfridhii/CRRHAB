import React from "react";
import { Divider } from "@chakra-ui/react";
import "./SideBar.scss";
import CardV1 from "../cards/cardV1/Card";
import CardV2 from "../cards/cardV2/Card";
import CardV3 from "../cards/cardV3/Card";
const SideBar = () => {
  return (
    <aside className="sideBar">
      <CardV1 />
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
      <CardV3 />
    </aside>
  );
};

export default SideBar;
