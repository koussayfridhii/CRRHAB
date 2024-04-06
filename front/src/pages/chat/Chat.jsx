import { Box, WrapItem, Avatar } from "@chakra-ui/react";
import ConnectedUsers from "../../components/chat/ConnectedUsers";
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
        <ConnectedUsers />
      </Box>
    </>
  );
}
export default Chat;
