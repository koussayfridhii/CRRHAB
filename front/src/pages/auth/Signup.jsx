import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
import { Link } from "react-router-dom";

// theming
import {
  Flex,
  Heading,
  Input,
  Button,
  Select,
  Checkbox,
  FormControl,
  FormLabel,
  Wrap,
} from "@chakra-ui/react";
// icons
import LoginIcon from "@mui/icons-material/Login";
//custom hooks
import useUploadImage from "../../hooks/useUploadImage";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let usedTheme = useSelector((state) => state.colorMode.theme);
  const [url, setUrl] = useState("");
  const [data, setData] = useState({
    fullName: {
      ar: "",
      fr: "",
      en: "",
    },
    username: {
      ar: "",
      fr: "",
      en: "",
    },
    email: "",
    gender: "",
    birthDate: "",
    password: "",
    repeat_password: "",
    role: "user",
    profilePic: "",
    news: true,
    grade: {
      ar: "",
      fr: "",
      en: "",
    },
    socialMedia: "",
    description: {
      ar: "",
      fr: "",
      en: "",
    },
    affiliation: {
      ar: "",
      fr: "",
      en: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const dataHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    setData({ ...data, profilePic: url });
  }, [url]);
  const fileChangeHandler = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    await useUploadImage("profilePictures", imageFile, setUrl, setLoading);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(`https://crrhab-3ofe.vercel.app/api/users/signup`, data)
      .then((res) => {
        setLoading(false);
        dispatch(login(res.data));
        navigate("/profile");
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <Flex minH="100vh" p={15} alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg="background"
        p={12}
        borderRadius={8}
        boxShadow="dark-lg"
        border="2px"
        borderColor="secondary"
        width={{ base: "full", "2xl": "50vw" }}
      >
        <Heading mb={6}>Sign Up</Heading>
        <Wrap gap={10} my={2} w={"full"} justify={"center"}>
          <FormControl maxW={"250px"}>
            <FormLabel
              htmlFor="nomComplet"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Nom Complet
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="fullName.fr"
              id="nomComplet"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
          <FormControl maxW={"250px"}>
            <FormLabel
              htmlFor="fullName.en"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Full Name
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="fullName.en"
              id="fullName"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
          <FormControl maxW={"250px"} dir="rtl">
            <FormLabel
              htmlFor="fullNameAr"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              الاسم كامل
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="fullName.ar"
              id="fullNameAr"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
        </Wrap>
        <Wrap gap={10} my={2} w={"full"} justify={"center"}>
          <FormControl maxW={"250px"}>
            <FormLabel
              htmlFor="userNameFr"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              nom d'utilisateur
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="username.fr"
              id="userNameFr"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
          <FormControl maxW={"250px"}>
            <FormLabel
              htmlFor="userName"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              userName
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="username.en"
              id="userName"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
          <FormControl maxW={"250px"} dir="rtl">
            <FormLabel
              htmlFor="userNameAr"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              اسم المستخدم
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="username.ar"
              id="userNameAr"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              my={2}
            />
          </FormControl>
        </Wrap>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
          name="email"
          onChange={dataHandler}
        />
        <input
          type="date"
          style={{
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            backgroundColor: usedTheme.colors.background,
          }}
          name="birthDate"
          onChange={dataHandler}
        />
        <input
          type="file"
          style={{
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            backgroundColor: usedTheme.colors.background,
          }}
          name="profilePic"
          onChange={fileChangeHandler}
        />
        <Select
          placeholder="Gender"
          name="gender"
          mb={3}
          variant="outline"
          onChange={dataHandler}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
          name="password"
          onChange={dataHandler}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
          name="repeat_password"
          onChange={dataHandler}
        />
        <Wrap gap={10} my={2} w={"full"} justify={"center"}>
          <FormControl maxW={"250px"}>
            <FormLabel
              htmlFor="gradeFr"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Grade
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="grade.fr"
              id="gradeFr"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
          <FormControl maxW={"250px"}>
            <FormLabel
              htmlFor="Grade"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Grade
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="grade.en"
              id="Grade"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
          <FormControl maxW={"250px"} dir="rtl">
            <FormLabel
              htmlFor="gradeAr"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              الرتبة
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="grade.ar"
              id="gradeAr"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              my={2}
            />
          </FormControl>
        </Wrap>
        <Input
          placeholder=""
          type="text"
          variant="filled"
          mb={3}
          name="socialMedia"
          onChange={dataHandler}
        />
        <Wrap gap={10} my={2} w={"full"} justify={"center"}>
          <FormControl maxW={"250px"}>
            <FormLabel
              htmlFor="descriptionFr"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Description
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="description.fr"
              id="descriptionFr"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
          <FormControl maxW={"250px"}>
            <FormLabel
              htmlFor="description"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              description
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="description.en"
              id="description"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>
          <FormControl maxW={"250px"} dir="rtl">
            <FormLabel
              htmlFor="descriptionAr"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              الوصف
            </FormLabel>
            <Input
              onChange={dataHandler}
              type="text"
              name="description.ar"
              id="descriptionAr"
              mt={1}
              focusBorderColor="secondary"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              my={2}
            />
          </FormControl>
        </Wrap>
        <Checkbox
          onChange={() => {
            setData({
              ...data,
              news: !data.news,
            });
          }}
          defaultChecked
          name="news"
          mb={3}
        >
          News
        </Checkbox>
        <Wrap gap={5} align={"center"} justify={"center"}>
          <Button
            bg="primary"
            color="text"
            _hover={{
              bg: "primaryHover",
            }}
            mb={8}
            type="submit"
            onClick={submitHandler}
            isLoading={loading}
            rightIcon={<LoginIcon />}
          >
            Sign Up
          </Button>
          <Button
            color="text"
            _hover={{
              bg: "primaryHover",
            }}
            mb={8}
            rightIcon={<LoginIcon />}
          >
            <Link to="/login">Login</Link>
          </Button>
        </Wrap>
      </Flex>
    </Flex>
  );
};

export default Login;
