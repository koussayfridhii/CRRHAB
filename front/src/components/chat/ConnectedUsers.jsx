import React from "react";
import { Box, WrapItem, Avatar, Wrap, Text, Flex } from "@chakra-ui/react";

const ConnectedUsers = () => {
  return (
    <>
      <Box
        bg="text"
        color="text"
        height={"75dvh"}
        width={"15%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        border="4px"
        borderColor="primary"
      >
        <Wrap>
          <WrapItem
            shadow={"xl"}
            width={"100%"}
            mx={"auto"}
            height={"5rem"}
            padding={"7px"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Text color="background">Dan Abrahmov</Text>
          </WrapItem>
          <WrapItem
            shadow={"xl"}
            width={"100%"}
            mx={"auto"}
            height={"5rem"}
            padding={"7px"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Text color="background">Dan Abrahmov</Text>
          </WrapItem>
          <WrapItem
            shadow={"xl"}
            width={"100%"}
            mx={"auto"}
            height={"5rem"}
            padding={"7px"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Text color="background">Dan Abrahmov</Text>
          </WrapItem>
        </Wrap>
      </Box>
    </>
  );
};

export default ConnectedUsers;
