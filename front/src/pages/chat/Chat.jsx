import { Box, WrapItem, Avatar } from "@chakra-ui/react";
function Chat() {
  return (
    <>
      <Box
        bg="background"
        color="text"
        height={"100dvh"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
      </Box>
    </>
  );
}
export default Chat;
