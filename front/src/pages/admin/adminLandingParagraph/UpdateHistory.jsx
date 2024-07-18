import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack,
  Box,
  Flex,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { withAuthorization } from "../../../HOC/Protect";
import useUploadImage from "../../../hooks/useUploadImage";

const CreateParagraphLanding = () => {
  const { pathname } = useLocation();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fr: "",
    ar: "",
    en: "",
    directeur: { fr: "", ar: "", en: "", img: "" },
  });
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const path = pathname.replace("/admin/create/paragraphs", "");
  const handleChange = (e, lang, field) => {
    if (field === "directeur") {
      setFormData({
        ...formData,
        directeur: { ...formData.directeur, [lang]: e.target.value },
      });
    } else {
      setFormData({
        ...formData,
        [lang]: e.target.value,
      });
    }
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = { ...formData };

    if (path === "") {
      try {
        const response = await axios.post(
          "http://193.95.21.154/apiapi/histories",
          JSON.stringify(payload),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
        setLoading(false);
        toast({
          title: "Données soumises avec succès!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/admin/paragraphs");
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
    } else {
      try {
        const response = await axios.put(
          `http://193.95.21.154/apiapi/histories/${formData._id}`,
          JSON.stringify(payload),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
        setLoading(false);
        toast({
          title: "Données soumises avec succès!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/admin/paragraphs");
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
    }
  };

  useEffect(() => {
    if (path !== "") firstApiCall(path.replace("/", ""));
  }, [path]);

  const firstApiCall = async (path) => {
    try {
      const response = await axios.get(
        `http://193.95.21.154/apiapi/histories/${path}`
      );
      setFormData(response.data);
    } catch (error) {
      setLoading(false);
      toast({
        title: "Erreur lors de la récupération des données.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Erreur lors de la récupération des données:", error);
    }
  };
  const handleFileChange = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    try {
      setLoading(true);
      const url = await useUploadImage("media", imageFile);
      setUrl(url);
      setLoading(false);
      toast({
        title: "File uploaded successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      setLoading(false);
      toast({
        title: "Failed to upload file.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    setFormData({
      ...formData,
      directeur: { ...formData.directeur, img: url },
    });
  }, [url]);
  return (
    <Flex w="100%" minH="100dvh" justify="center" align="center" py={20}>
      <Box bg="background" p={8} rounded="md" shadow="lg" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel>Historique</FormLabel>
              <HStack>
                <Textarea
                  placeholder="fr"
                  type="text"
                  value={formData.fr}
                  onChange={(e) => handleChange(e, "fr")}
                />
                <Textarea
                  placeholder="ar"
                  type="text"
                  value={formData.ar}
                  onChange={(e) => handleChange(e, "ar")}
                />
                <Textarea
                  placeholder="en"
                  type="text"
                  value={formData.en}
                  onChange={(e) => handleChange(e, "en")}
                />
              </HStack>
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

export default withAuthorization(CreateParagraphLanding, ["admin"]);
