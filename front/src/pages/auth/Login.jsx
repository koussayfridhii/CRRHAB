import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

// theming
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
// icons
import LoginIcon from "@mui/icons-material/Login";
// written by me
import ThemeToggle from "../../components/ThemeToggle";
import { login } from "../../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const dataHandler = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`http://localhost:5000/api/users/signin`, data)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        dispatch(login(res.data));
        toast({
          title: "Connexion réussie",
          description: "Vous êtes connecté avec succès.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        res.data.role === "admin"
          ? navigate("/admin/research_team")
          : navigate("/profile");
      })
      .catch((err) => {
        const msg = err.response.data.message;
        setLoading(false);
        toast({
          title: "Erreur de connexion",
          description: msg,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };
  useEffect(() => {
    if (user?.isLoggedIn) {
      if (user?.user?.role === "admin") {
        navigate("/admin/research_team");
      } else {
        navigate("/profile");
      }
    } else {
      navigate("/login"); // ou toute autre route pour les utilisateurs non connectés
    }
  }, [user, navigate]);
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
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
          name="email"
          onChange={dataHandler}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
          name="password"
          onChange={dataHandler}
        />
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
            Log In
          </Button>
          <Button
            color="text"
            _hover={{
              bg: "primaryHover",
            }}
            mb={8}
            rightIcon={<LoginIcon />}
          >
            <Link to="/signup">Sign Up</Link>
          </Button>
        </Flex>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <ThemeToggle />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
