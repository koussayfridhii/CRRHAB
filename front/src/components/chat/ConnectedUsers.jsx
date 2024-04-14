import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  Box,
  WrapItem,
  Avatar,
  Wrap,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";

const ConnectedUsers = ({ setCurrentConversationId }) => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }
  const token = useSelector((state) => state.user.user?.token);
  const userId = useSelector((state) => state.user.user?.userId);
  const headers = { Authorization: `Bearer ${token}` };
  const fun = async () => {
    await axios
      .get(`http://localhost:5000/api/users/${userId}`, {
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
  useEffect(() => {
    fun();
    return () => {
      setUsers([]);
    };
  }, []);
  return (
    <>
      <Box
        bg="text"
        color="text"
        height={"75dvh"}
        width={"22%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        border="4px"
        borderColor="primary"
        borderLeftRadius={"20px"}
        overflowY={"scroll"}
        padding={"10px"}
      >
        <Formik
          initialValues={{ name: text }}
          onSubmit={() => {
            setIsSubmitting(true);
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
              <Field name="name" validate={() => validateName(text)}>
                {({ field, form }) => (
                  <FormControl
                    color={"background"}
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
              />
              <Text color="background" fontWeight={"bold"}>
                {user.fullName}
              </Text>
            </WrapItem>
          );
        })}
      </Box>
    </>
  );
};

export default ConnectedUsers;
