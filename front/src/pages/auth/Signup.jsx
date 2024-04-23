import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../userSlice";
import { Link } from "react-router-dom";

// theming
import {
  Flex,
  Heading,
  Input,
  Button,
  Select,
  Checkbox,
} from "@chakra-ui/react";
// icons
import LoginIcon from "@mui/icons-material/Login";
// firebase

// import { storage } from "../../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import imageCompression from "browser-image-compression";

//custom hooks
import useUploadImage from "../../hooks/useUploadImage";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let usedTheme = useSelector((state) => state.colorMode.theme);
  const [url, setUrl] = useState("");
  const [data, setData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    repeat_password: "",
    role: "user",
    birthDate: "",
    gender: "",
    news: true,
    profilePic: "",
  });
  const [loading, setLoading] = useState(false);
  const dataHandler = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // const storageRef = ref(
  //   storage,
  //   `/images/${image?.name}${getRandomInt(10000000000)}`
  // );
  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }

  // const upload = async () => {
  //   if (!image) {
  //     alert("Please upload a file first!");
  //     return;
  //   } // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
  //   const uploadTask = uploadBytesResumable(storageRef, image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const percent = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       ); // update progress
  //       setLoading(true);
  //       setPercent(percent);
  //     },
  //     (err) => console.log(err),
  //     () => {
  //       // download url
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //         setData({ ...data, profilePic: url });
  //       });
  //       setLoading(false);
  //     }
  //   );
  // };
  useEffect(() => {
    setData({ ...data, profilePic: url });
  }, [url]);
  const fileChangeHandler = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    await useUploadImage("profilePictures", imageFile, setUrl, setLoading);
    // const options = {
    //   maxSizeMB: 1,
    //   maxWidthOrHeight: 1920,
    // };
    // let compressedFile;
    // if (imageFile.type.includes("pdf")) {
    //   setImage(imageFile);
    //   return;
    // }
    // try {
    //   compressedFile = await imageCompression(imageFile, options);
    //   alert("compression done", compressedFile.size / 1024 / 1024);
    //   setImage(compressedFile);
    //   upload();
    // } catch (error) {
    //   alert(error);
    // }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(`http://localhost:5000/api/users/signup`, data)
      .then((res) => {
        setLoading(false);
        dispatch(login(res.data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response?.data);
        setLoading(false);
      });
  };
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg="background"
        p={12}
        borderRadius={8}
        boxShadow="dark-lg"
        border="2px"
        borderColor="secondary"
        width={"30vw"}
      >
        <Heading mb={6}>Sign Up</Heading>
        <Input
          placeholder="Full Name"
          type="string"
          variant="filled"
          mb={3}
          name="fullName"
          onChange={dataHandler}
        />
        <Input
          placeholder="userName"
          type="string"
          variant="filled"
          mb={3}
          name="username"
          onChange={dataHandler}
        />
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
        <Flex gap={5} align={"center"} justify={"center"}>
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
