import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  Flex,
  WrapItem,
  Avatar,
  AvatarBadge,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import io from "socket.io-client";
const ConnectedUsers = ({ setCurrentConversationId }) => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [socket, setSocket] = useState([]);
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const token = useSelector((state) => state.user.user?.token);
  const userId = useSelector((state) => state.user.user?.userId);
  const headers = { Authorization: `Bearer ${token}` };
  const fun = async () => {
    await axios
      .get(`http://crrhab.agrinet.tn/api/users/${userId}`, {
        headers,
      })
      .then((res) => {
        setUsers(res.data);
        setAllUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function sortUsersByConnectionsInPlace(users, connectedIds) {
    // console.log(connectedIds);
    // Create a map for efficient lookup of connected user IDs
    const connectedMap = new Map();
    for (const id of connectedIds) {
      connectedMap.set(id, true);
    }

    users.sort((userA, userB) => {
      // Check if userA is connected and userB is not
      const isAConnected = connectedMap.has(userA._id);
      const isBConnected = connectedMap.has(userB._id);

      if (isAConnected && !isBConnected) {
        return -1; // Move A before B
      } else if (!isAConnected && isBConnected) {
        return 1; // Move B before A
      } else {
        // If both are connected or not connected, no change in order
        return 0;
      }
    });
  }
  useEffect(() => {
    fun();
    sortUsersByConnectionsInPlace(users, onlineUsers);
    return () => {
      setUsers([]);
    };
  }, []);
  useEffect(() => {
    if (token) {
      const socket = io("https://crrhab-3ofe.vercel.app", {
        query: {
          userId,
        },
      });

      setSocket(socket);

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers([...users]);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [token]);
  useEffect(() => {
    sortUsersByConnectionsInPlace(users, onlineUsers);
  }, [users, onlineUsers]);
  return (
    <>
      <Flex
        bg="text"
        color="text"
        height={"75dvh"}
        width={"22%"}
        justify={"center"}
        align={"center"}
        direction={"column"}
        border="4px"
        borderColor="primary"
        borderLeftRadius={"20px"}
        padding={"10px"}
      >
        <Formik
          initialValues={{ name: text }}
          onSubmit={() => {
            setIsSubmitting(true);
            if (!text) {
              setUsers(allUsers);
              setIsSubmitting(false);
              return;
            }
            const aux = allUsers.filter((e) => {
              return e.fullName.toLowerCase().includes(text.toLowerCase());
            });
            setUsers(aux);
            setIsSubmitting(false);
          }}
        >
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
              <Field name="name">
                {({ field, form }) => (
                  <FormControl color={"background"}>
                    <FormLabel>Search A Name</FormLabel>
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
                color={"white"}
                isLoading={isSubmitting}
                type="submit"
                // onClick={sendMsg}
              >
                Send
              </Button>
            </Form>
          )}
        </Formik>
        <Flex
          direction={"column"}
          w={"100%"}
          alignSelf={"start"}
          height={"70dvh"}
          overflowY={"scroll"}
        >
          {users.map((user) => {
            return (
              <WrapItem
                // shadow={"xl"}
                width={"100%"}
                mx={"auto"}
                height={"5rem"}
                padding={"7px"}
                display={"flex"}
                justifyContent={"start"}
                gap={10}
                alignItems={"center"}
                key={user._id}
                cursor={"pointer"}
                onClick={() => setCurrentConversationId(user)}
                borderBottom={"2px"}
                borderColor={"primary"}
              >
                <Avatar
                  name={user.fullName}
                  src={user.profilePic}
                  borderColor={"primary"}
                  border={"1px"}
                >
                  {onlineUsers?.includes(user._id) ? (
                    <AvatarBadge boxSize="0.8em" bg="green.500" />
                  ) : (
                    <AvatarBadge boxSize="0.8em" bg="red.500" />
                  )}
                </Avatar>
                <Text color="background" fontWeight={"bold"}>
                  {user.fullName}
                </Text>
              </WrapItem>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default ConnectedUsers;
