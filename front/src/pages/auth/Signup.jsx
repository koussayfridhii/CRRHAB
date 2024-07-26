// Importation des bibliothèques et composants nécessaires
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
import { Link } from "react-router-dom";

// Thématisation
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
  useToast,
} from "@chakra-ui/react";
// Icônes
import LoginIcon from "@mui/icons-material/Login";
// Hooks personnalisés
import useUploadImage from "../../hooks/useUploadImage";

// Composant fonctionnel principal pour la connexion
const Login = () => {
  // Initialisation des variables d'état
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let usedTheme = useSelector((state) => state.colorMode.theme);
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.user);
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
  const toast = useToast();

  // Gestionnaire pour les changements des données du formulaire
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

  // Effet pour mettre à jour l'URL de l'image de profil
  useEffect(() => {
    setData({ ...data, profilePic: url });
  }, [url]);

  // Gestionnaire pour le changement de fichier
  const fileChangeHandler = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    try {
      setLoading(true);
      const url = await useUploadImage("profilePictures", imageFile);
      setUrl(url);
      setLoading(false);
      toast({
        title: "Fichier téléchargé avec succès.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      setLoading(false);
      toast({
        title: "Échec du téléchargement du fichier.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Gestionnaire pour la soumission du formulaire
  const submitHandler = async (e) => {
    e.preventDefault();
    if (pathname === "/signup") {
      setLoading(true);
      await axios
        .post(`http://localhost:5000api/users/signup`, data)
        .then((res) => {
          setLoading(false);

          navigate("/profile");
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      await axios
        .put(
          `http://localhost:5000api/users/${user?._id}`,
          { data },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.token}`,
            },
          }
        )
        .then((res) => {
          dispatch(
            login({
              ...res.data.user,
              token: res.data.token,
              role: res.data.role,
            })
          );
          toast({
            title: "utilisateur mise à jour",
            description:
              "Les paramètres de notification ont été mis à jour avec succès.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          navigate("/profile");
          setLoading(false);
        })
        .catch((error) => {
          toast({
            title: "Erreur",
            description:
              "Une erreur s'est produite lors de la mise à jour des paramètres de notification.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          setLoading(false);
        });
    }
  };

  // Effet pour effacer les données de l'utilisateur si le chemin change
  useEffect(() => {
    if (pathname !== "/signup") {
      setData({
        fullName: user?.fullName,
        username: user?.username,
        email: user?.email,
        gender: user?.gender,
        birthDate: user?.birthDate,
        password: "",
        newPassword: "",
        role: user?.role,
        profilePic: user?.profilePic,
        news: user?.news,
        grade: user?.grade,
        socialMedia: "",
        description: user?.description,
        affiliation: user?.affiliation,
      });
    }
  }, [pathname]);

  // Rendu des composants JSX
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
        <Heading mb={6}>
          {pathname === "/signup" ? "S'inscrire" : "Mettre à jour le profil"}
        </Heading>
        {/* Champs d'entrée pour le nom complet */}
        <Wrap gap={10} my={2} w={"full"} justify={"center"}>
          {/* Nom complet en français */}
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
              value={data["fullName"]["fr"]} // Valeur pour le nom complet en français
            />
          </FormControl>
          {/* Nom complet en anglais */}
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
              Nom Complet
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
              value={data["fullName"]["en"]} // Valeur pour le nom complet en anglais
            />
          </FormControl>
          {/* Nom complet en arabe */}
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
              value={data["fullName"]["ar"]} // Valeur pour le nom complet en arabe
            />
          </FormControl>
        </Wrap>
        {/* Champs d'entrée pour le nom d'utilisateur */}
        <Wrap gap={10} my={2} w={"full"} justify={"center"}>
          {/* Nom d'utilisateur en français */}
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
              value={data["username"]["fr"]} // Valeur pour le nom d'utilisateur en français
            />
          </FormControl>
          {/* Nom d'utilisateur en anglais */}
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
              value={data["username"]["en"]} // Valeur pour le nom d'utilisateur en anglais
            />
          </FormControl>
          {/* Nom d'utilisateur en arabe */}
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
              value={data["username"]["ar"]} // Valeur pour le nom d'utilisateur en arabe
            />
          </FormControl>
        </Wrap>
        {/* Champs d'entrée supplémentaires */}
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
          name="email"
          onChange={dataHandler}
          value={data["email"]} // Valeur pour l'adresse email
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
          value={data["birthDate"]} // Valeur pour la date de naissance
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
          placeholder="Genre"
          name="gender"
          mb={3}
          variant="outline"
          onChange={dataHandler}
          value={data["gender"]} // Valeur pour le genre
        >
          <option value="male">Homme</option>
          <option value="female">Femme</option>
        </Select>
        <FormControl>
          <FormLabel
            htmlFor="password"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Password
          </FormLabel>
          <Input
            placeholder="**********"
            type="password"
            variant="filled"
            mb={6}
            name="password"
            onChange={dataHandler}
            value={data["password"]} // Valeur pour le mot de passe
          />
        </FormControl>
        {pathname === "/signup" && (
          <FormControl>
            <FormLabel
              htmlFor="repeat_password"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Repeat Password
            </FormLabel>
            <Input
              placeholder="**********"
              type="password"
              variant="filled"
              mb={6}
              name="repeat_password"
              onChange={dataHandler}
              value={data["repeat_password"]} // Valeur pour la répétition du mot de passe
            />
          </FormControl>
        )}
        {pathname !== "/signup" && (
          <FormControl>
            <FormLabel
              htmlFor="newPassword"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              new Password (not required)
            </FormLabel>
            <Input
              placeholder="**********"
              type="password"
              variant="filled"
              mb={6}
              name="newPassword"
              onChange={dataHandler}
              value={data["newPassword"]}
            />
          </FormControl>
        )}
        {/* Champs d'entrée pour le grade */}
        <Wrap gap={10} my={2} w={"full"} justify={"center"}>
          {/* Grade en français */}
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
              value={data["grade"]["fr"]} // Valeur pour le grade en français
            />
          </FormControl>
          {/* Grade en anglais */}
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
              value={data["grade"]["en"]} // Valeur pour le grade en anglais
            />
          </FormControl>
          {/* Grade en arabe */}
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
              value={data["grade"]["ar"]} // Valeur pour le grade en arabe
            />
          </FormControl>
        </Wrap>
        {/* Champs d'entrée pour la description */}
        <Wrap gap={10} my={2} w={"full"} justify={"center"}>
          {/* Description en français */}
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
              value={data["description"]["fr"]} // Valeur pour la description en français
            />
          </FormControl>
          {/* Description en anglais */}
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
              Description
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
              value={data["description"]["en"]} // Valeur pour la description en anglais
            />
          </FormControl>
          {/* Description en arabe */}
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
              value={data["description"]["ar"]} // Valeur pour la description en arabe
            />
          </FormControl>
        </Wrap>
        {/* Case à cocher pour les actualités */}
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
          Actualités
        </Checkbox>
        {/* Boutons pour l'inscription et la connexion */}
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
            S'inscrire
          </Button>
          <Button
            color="text"
            _hover={{
              bg: "primaryHover",
            }}
            mb={8}
            rightIcon={<LoginIcon />}
          >
            <Link to="/login">Connexion</Link>
          </Button>
        </Wrap>
      </Flex>
    </Flex>
  );
};

// Exportation du composant Login par défaut
export default Login;
