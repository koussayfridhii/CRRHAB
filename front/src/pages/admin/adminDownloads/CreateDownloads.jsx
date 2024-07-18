import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Flex,
  useToast,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useUploadImage from "../../../hooks/useUploadImage";
import { withAuthorization } from "../../../HOC/Protect";

const CreateEvents = () => {
  const { id } = useParams();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: { fr: "", ar: "", en: "" },
    link: "",
    category: "open data",
  });
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const navigate = useNavigate();

  // Gérer les changements dans les champs de texte
  const handleChange = (e, lang, field) => {
    if (lang) {
      setFormData({
        ...formData,
        [field]: { ...formData[field], [lang]: e.target.value },
      });
    } else {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
      console.log(e.target.value);
    }
    console.log(lang);
  };

  // Gérer le téléchargement de fichier
  const handleFileChange = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    try {
      setLoading(true);
      const url = await useUploadImage("documents", imageFile);
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

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataToSubmit = { ...formData, link: url };
    try {
      if (id) {
        await axios.put(
          `http://localhost:5000/api/documents/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
      } else {
        await axios.post(
          "http://localhost:5000/api/documents",
          dataToSubmit,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
      }
      setLoading(false);
      toast({
        title: "Données soumises avec succès !",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/admin/downloads");
    } catch (error) {
      setLoading(false);
      toast({
        title: "Erreur lors de la soumission des données.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Erreur lors de la soumission des données:", error);
    }
  };

  // Mettre à jour l'URL de l'image dans les données du formulaire
  useEffect(() => {
    setFormData({ ...formData, link: url });
  }, [url]);

  // Récupérer les données du document si en mode édition
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/api/documents/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.user?.token}`,
          },
        })
        .then((response) => setFormData(response.data.document))
        .catch((error) => {
          toast({
            title: "Erreur lors de la récupération des données.",
            description: error.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          console.error("Erreur lors de la récupération des données:", error);
        });
    }
  }, [id]);

  return (
    <Flex w="100dvw" h="100dvh" justify="center" align="center">
      <Box bg="background" p={8} rounded="md" shadow="lg" maxW="md" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel>Titre</FormLabel>
              <VStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData?.title?.fr}
                  onChange={(e) => handleChange(e, "fr", "title")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData?.title?.ar}
                  onChange={(e) => handleChange(e, "ar", "title")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData?.title?.en}
                  onChange={(e) => handleChange(e, "en", "title")}
                />
              </VStack>
            </FormControl>
            <FormControl>
              <FormLabel>Catégorie</FormLabel>
              <Select
                value={formData?.category}
                onChange={(e) => handleChange(e, null, "category")}
              >
                <option value="open data">Open Data</option>
                <option value="downloads">Downloads</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Fichier</FormLabel>
              <Input type="file" onChange={handleFileChange} />
            </FormControl>
            <Button
              type="submit"
              colorScheme="green"
              isLoading={loading}
              size="md"
            >
              Soumettre
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default withAuthorization(CreateEvents, ["admin"]);
