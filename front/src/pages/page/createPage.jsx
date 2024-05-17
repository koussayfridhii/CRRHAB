import { useEffect, useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  InputGroup,
  chakra,
  FormHelperText,
  InputRightElement,
  Wrap,
  Checkbox,
  Icon,
  Stack,
  VisuallyHidden,
  Avatar,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import useUploadImage from "../../hooks/useUploadImage";

const Form1 = ({ changeHandler }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [showConfirm, setShowConfirm] = useState(false);
  const confirmHandleClick = () => setShowConfirm(!showConfirm);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Research Team Registration
      </Heading>
      <Flex>
        <FormControl color={"white"} mr="5%">
          <FormLabel htmlFor="full-name" fontWeight={"normal"}>
            Full Name
          </FormLabel>
          <Input
            onChange={changeHandler}
            name="fullName"
            id="full-name"
            color={"white"}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="user-name" fontWeight={"normal"}>
            UserName
          </FormLabel>
          <Input onChange={changeHandler} name="username" id="user-name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input onChange={changeHandler} name="email" id="email" type="email" />
        <FormHelperText color={"white"}>
          We&apos;ll never share your email.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            name="password"
            onChange={changeHandler}
            type={show ? "text" : "password"}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password Confirmation
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            name="repeat_password"
            onChange={changeHandler}
            type={showConfirm ? "text" : "password"}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={confirmHandleClick}>
              {showConfirm ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = ({ changeHandler }) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Details
      </Heading>

      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel htmlFor="role">Role</FormLabel>
        <Select id="role" name="role" onChange={changeHandler}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel htmlFor="birthDate">Birth Date</FormLabel>
        <Input
          type="date"
          name="birthDate"
          id="birthDate"
          onChange={changeHandler}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel htmlFor="gender">Gender</FormLabel>
        <Select id="gender" name="gender" onChange={changeHandler}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </FormControl>
    </>
  );
};
const Form3 = ({ changeHandler, setUrl, setLoading, setData, data, url }) => {
  const fileChangeHandler = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    await useUploadImage("profilePictures", imageFile, setUrl, setLoading);
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Additional Details
      </Heading>
      <FormControl>
        <FormLabel htmlFor="grade">Grade</FormLabel>
        <Input type="text" name="grade" id="grade" onChange={changeHandler} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="orcid">ORCID</FormLabel>
        <Input type="text" name="orcid" id="orcid" onChange={changeHandler} />
      </FormControl>
      <FormControl>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Photo
        </FormLabel>
        <Flex alignItems="center" mt={1}>
          <Avatar
            boxSize={12}
            bg="gray.100"
            _dark={{
              bg: "gray.800",
            }}
            name={data.fullName}
            src={url}
          />
        </Flex>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="coverPhoto">Cover photo</FormLabel>
        <Flex
          mt={1}
          justify="center"
          px={6}
          pt={5}
          pb={6}
          borderWidth={2}
          borderStyle="dashed"
          rounded="md"
        >
          <Stack spacing={1} textAlign="center">
            <Icon
              mx="auto"
              boxSize={12}
              color="gray.400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Icon>
            <chakra.label
              htmlFor="coverPhoto"
              cursor="pointer"
              rounded="md"
              fontSize="md"
              color="brand.600"
              pos="relative"
              _hover={{
                color: "brand.400",
              }}
            >
              <span>Upload a file</span>
              <VisuallyHidden>
                <input
                  id="coverPhoto"
                  onChange={fileChangeHandler}
                  name="coverPhoto"
                  type="file"
                />
              </VisuallyHidden>
            </chakra.label>
            <span style={{ paddingLeft: "4px" }}>or drag and drop</span>
          </Stack>
        </Flex>
      </FormControl>

      <FormControl>
        <Box mt="2">
          <Checkbox
            defaultChecked
            name="news"
            id="news"
            onChange={() => {
              setData({ ...data, news: !data.news });
            }}
          >
            Receive News
          </Checkbox>
        </Box>
      </FormControl>
    </>
  );
};

export default function Multistep() {
  function isDataEmpty(data) {
    const fieldsToCheck = [
      "fullName",
      "username",
      "email",
      "password",
      "repeat_password",
      "role",
      "birthDate",
      "gender",
      "grade",
    ];

    for (let field of fieldsToCheck) {
      if (!data[field] && field !== "orcid" && field !== "profilePic") {
        return true; // At least one required field is empty
      }
    }

    return false; // All required fields are filled or optional
  }
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [data, setData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    repeat_password: "",
    role: "user",
    birthDate: "",
    gender: "",
    grade: "",
    orcid: "",
    profilePic: "",
    news: true,
  });
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabaled] = useState(true);
  const submitHandler = () => {
    isDataEmpty(data)
      ? toast({
          title: "please input all fields",
          description:
            "all inputs are required except orcid and profile picture",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      : toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
  };
  useEffect(() => {
    setIsDisabaled(isDataEmpty(data));
    console.log(data);
  }, [data]);
  useEffect(() => {
    setData({ ...data, profilePic: url });
  }, [url]);
  const changeHandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        bg={"primary"}
        color={"white"}
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1 changeHandler={changeHandler} />
        ) : step === 2 ? (
          <Form2 changeHandler={changeHandler} />
        ) : (
          <Form3
            setUrl={setUrl}
            setLoading={setLoading}
            changeHandler={changeHandler}
            data={data}
            url={url}
            setData={setData}
          />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Wrap w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={submitHandler}
                isDisabled={isDisabled || loading}
              >
                Submit
              </Button>
            ) : null}
          </Wrap>
        </ButtonGroup>
      </Box>
    </>
  );
}
