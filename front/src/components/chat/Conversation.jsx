import React, { useEffect, useRef, useState } from "react";
import {
  Flex,
  Text,
  Avatar,
  Wrap,
  WrapItem,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import InfoIcon from "@mui/icons-material/Info";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import io from "socket.io-client";

// custom hooks
// import useUploadImage from "../../hooks/useUploadImage";

import notificationSound from "/assets/sounds/notification.mp3";
import ConnectedUsers from "./ConnectedUsers";

const Conversation = ({ currentConversationId, setCurrentConversationId }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [socket, setSocket] = useState(null);
  //check if the message is empty
  const validateName = (value) => {
    let error;
    if (!value && !image) {
      error = "message is required";
    }
    return error;
  };
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen((prev) => !prev);
  };
  //ref for the last message
  const endRef = useRef();

  //get the token , userId , fullName from the redux store
  const { token, userId, fullName } = useSelector((state) => state.user.user);

  //create the auth token to send with the req
  const headers = { Authorization: `Bearer ${token}` };

  // function to send the msg
  const sendMsg = async () => {
    try {
      const response = await axios.post(
        `https://crrhab-3ofe.vercel.app/api/messages/send/${currentConversationId._id}`,
        {
          message: text,
        },
        { headers }
      );
      setData([...data, response.data]);
      setText("");
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  };
  //fetch all conversation messages
  const fun = async () => {
    if (!currentConversationId._id) return;
    await axios
      .get(
        `https://crrhab-3ofe.vercel.app/api/messages/${currentConversationId._id}`,
        {
          headers,
        }
      )
      .then((res) => {
        if (res.data.success) {
          setData(res.data.messages);
        } else {
          setData([]);
        }
        endRef.current?.scrollIntoView({ behavior: "smooth" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //TODO: implement the file sending feature
  // const fileChangeHandler = async (e) => {
  //   e.preventDefault();
  //   const imageFile = e.target.files[0];
  //   await useUploadImage("profilePictures", imageFile, setImage, setLoading);
  // };

  //fetch the messages when the conversation changes
  useEffect(() => {
    fun();
    return () => {
      setCurrentConversationId;
    };
  }, [currentConversationId._id]);

  //Socket IO

  useEffect(() => {
    if (token) {
      const socket = io("https://crrhab-3ofe.vercel.app", {
        query: {
          userId,
        },
      });

      setSocket(socket);

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [token]);
  const useListenMessages = () => {
    useEffect(() => {
      socket?.on("newMessage", (newMessage) => {
        newMessage.shouldShake = true;
        const sound = new Audio(notificationSound);
        sound.play();
        setData([...data, newMessage]);
        endRef.current?.scrollIntoView({ behavior: "smooth" });
      });

      return () => socket?.off("newMessage");
    }, [socket, setData, data]);
  };
  useListenMessages();

  const { colorMode } = useColorMode();
  return (
    <Flex
      direction="column"
      height={"75dvh"}
      w={"50%"}
      justify={"space-between"}
    >
      {currentConversationId ? (
        <>
          <Flex
            flex={1}
            width={"100%"}
            borderRight={"4px solid #609BF2"}
            borderTopRightRadius={"25px"}
            m={0}
          >
            <Wrap
              shadow={"xl"}
              width={"100%"}
              mx={"auto"}
              height={"5rem"}
              padding={"7px"}
              display={"flex"}
              justifyContent={"start"}
              gap={"30px"}
              alignItems={"center"}
              bg="primary"
              borderTopRightRadius={"20px"}
            >
              <Avatar
                name={currentConversationId.fullName}
                src={currentConversationId.profilePic}
                border={"2px"}
              />
              <Text
                display={"flex"}
                ml={"20px"}
                fontWeight={"bold"}
                alignItems={"center"}
                color="white"
              >
                {currentConversationId.fullName}
              </Text>
              <WrapItem
                alignSelf="center"
                justifySelf={"end"}
                marginLeft={"20px"}
                color={"white"}
              >
                <InfoIcon />
              </WrapItem>
            </Wrap>
          </Flex>
          <Flex
            flex={10}
            flexDirection={"column"}
            overflowY={"scroll"}
            // borderRight={"4px solid #609BF2"}
          >
            {data.length > 0 ? (
              data.map((msg) => {
                return (
                  <Flex
                    className="message"
                    bg={msg.senderId === userId ? "primary" : "bgGray"}
                    p={5}
                    maxWidth={"45%"}
                    borderRadius={10}
                    mb={3}
                    mt={2}
                    ml={msg.senderId === userId ? "auto" : 5}
                    mr={msg.senderId === userId ? 5 : "auto"}
                    key={msg._id}
                  >
                    {msg.receiverId === userId && (
                      <Avatar
                        name={currentConversationId.fullName}
                        src={currentConversationId.profilePic}
                        w={"30px"}
                        h={"30px"}
                      />
                    )}
                    <Text
                      display={"flex"}
                      fontSize={"sm"}
                      ml={"20px"}
                      alignItems={"center"}
                      color={
                        msg.senderId === userId
                          ? colorMode === "dark"
                            ? "text"
                            : "background"
                          : "text"
                      }
                      textAlign={"left"}
                    >
                      {msg.message}
                    </Text>
                  </Flex>
                );
              })
            ) : (
              <>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  height={"100%"}
                >
                  <img src="/helloV2.gif" style={{ transform: "scale(1.3)" }} />
                  <Text
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                    color={"text"}
                    textAlign={"center"}
                    mt={"20px"}
                  >
                    Hello {fullName}
                  </Text>
                </Box>
              </>
            )}
            <div ref={endRef}></div>
          </Flex>
          <Flex flex={1} bg={"primary"} borderBottomRightRadius={"20px"}>
            <Formik initialValues={{ name: text }} onSubmit={sendMsg}>
              {(props) => (
                <Form
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                    gap: "1rem",
                    padding: "1rem",
                  }}
                >
                  <Field name="name" validate={() => validateName(text)}>
                    {({ field, form }) => (
                      <FormControl
                        color={colorMode === "dark" ? "text" : "background"}
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel>Enter Your Message</FormLabel>
                        <Input
                          border={"1px solid #609bf2"}
                          placeholder="Your message"
                          style={{ borderBottom: "2px solid white" }}
                          onChange={(e) => setText(e.target.value)}
                          value={text}
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={7}
                    bg="primaryHover"
                    _hover={{
                      bg: "secondary",
                    }}
                    color={colorMode === "dark" ? "text" : "background"}
                    isLoading={props.isSubmitting}
                    type="submit"
                    // onClick={sendMsg}
                  >
                    Send
                  </Button>
                </Form>
              )}
            </Formik>
            <Wrap position={"relative"} mr={8}>
              <EmojiPicker
                open={open}
                onEmojiClick={handleEmoji}
                style={{ position: "absolute", bottom: "70px", left: "-70px" }}
              />
              <EmojiEmotionsIcon
                style={{ marginTop: "50px", cursor: "pointer", color: "white" }}
                onClick={() => setOpen((prev) => !prev)}
                color="white"
              />
            </Wrap>
          </Flex>
        </>
      ) : (
        <Box
          h={"75dvh"}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          bg={"primary"}
          borderRightRadius={20}
        >
          <img src="/hello.gif" style={{ transform: "scale(1.3)" }} />
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            color={"text"}
            textAlign={"center"}
            mt={"20px"}
          >
            Hello {fullName}
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default Conversation;
