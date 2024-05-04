import { useState } from "react";
import { Box } from "@chakra-ui/react";
import ConnectedUsers from "../../components/chat/ConnectedUsers";
import Conversation from "../../components/chat/Conversation";
import { useSelector } from "react-redux";
import { withAuthorization } from "../../HOC/Protect";
function Chat() {
  const [currentConversationId, setCurrentConversationId] = useState("");
  const language = useSelector((state) => state.language.language);
  return (
    <>
      <Box
        bg="background"
        color="text"
        height={"100dvh"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
        flexDirection={language === "ar" ? "row-reverse" : "row"}
      >
        <ConnectedUsers setCurrentConversationId={setCurrentConversationId} />
        <Conversation
          setCurrentConversationId={setCurrentConversationId}
          currentConversationId={currentConversationId}
        />
      </Box>
    </>
  );
}
export default withAuthorization(Chat, ["user", "admin"]);
