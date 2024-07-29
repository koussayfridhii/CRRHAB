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
  Textarea,
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
    link: "",
    title: { fr: "", ar: "", en: "" },
    description: { fr: "", ar: "", en: "" },
    media: "",
    date: "",
  });
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const navigate = useNavigate();

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
    }
  };

  const handleFileChange = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    try {
      setLoading(true);
      const url = await useUploadImage("events", imageFile);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataToSubmit = { ...formData, media: url };
    try {
      if (id) {
        await axios.put(
          `https://crrhab.agrinet.tn/api/events/${id}`,
          dataToSubmit,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
      } else {
        await axios.post(
          "https://crrhab.agrinet.tn/api/events",
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
      navigate("/admin/events");
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

  useEffect(() => {
    setFormData({ ...formData, media: url });
  }, [url]);

  useEffect(() => {
    if (id) {
      // Récupérer les données des évènnements pour le mode édition
      axios
        .get(`https://crrhab.agrinet.tn/api/events/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.user?.token}`,
          },
        })
        .then((response) => setFormData(response.data.event))
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
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <Flex w="100dvw" h="100dvh" justify="center" align="center">
      <Box bg="background" p={8} rounded="md" shadow="lg" maxW="md" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel>Lien</FormLabel>
              <Input
                type="text"
                value={formData?.link}
                onChange={(e) => handleChange(e, null, "link")}
              />
            </FormControl>
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
              <FormLabel>Description</FormLabel>
              <VStack>
                <Textarea
                  placeholder="fr"
                  type="text"
                  value={formData?.description?.fr}
                  onChange={(e) => handleChange(e, "fr", "description")}
                />
                <Textarea
                  placeholder="ar"
                  type="text"
                  value={formData?.description?.ar}
                  onChange={(e) => handleChange(e, "ar", "description")}
                />
                <Textarea
                  placeholder="en"
                  type="text"
                  value={formData?.description?.en}
                  onChange={(e) => handleChange(e, "en", "description")}
                />
              </VStack>
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input type="file" onChange={handleFileChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={formData?.date}
                onChange={(e) => handleChange(e, null, "date")}
              />
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
