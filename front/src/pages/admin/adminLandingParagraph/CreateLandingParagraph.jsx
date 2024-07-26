import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  VStack,
  Box,
  Flex,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { withAuthorization } from "../../../HOC/Protect";

const CreateParagraphLanding = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    description: {
      fr: "",
      ar: "",
      en: "",
    },
  });
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const path = pathname.replace("/admin/create/paragraphs/", "");
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      description: {
        ...formData.description,
        [e.target.name]: e.target.value,
      },
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = { ...formData };
    try {
      const response = await axios.put(
        `http://server:5000api/histories/${path}`,
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
  };

  useEffect(() => {
    if (path !== "") firstApiCall(path.replace("/", ""));
  }, [path]);

  const firstApiCall = async (path) => {
    try {
      const response = await axios.get(
        `http://server:5000api/histories/${path}`
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
  return (
    <Flex w="100%" minH="100dvh" justify="center" align="center" py={20}>
      <Box
        bg="background"
        p={8}
        minH="100dvh"
        w="90%"
        rounded="md"
        shadow="lg"
        mx="auto"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel>Historique</FormLabel>
              <FormLabel color="red.500">
                ajouter /n pour le retour à la ligne
              </FormLabel>
              <VStack>
                <Textarea
                  placeholder="fr"
                  name="fr"
                  type="text"
                  value={formData?.description?.fr}
                  onChange={(e) => handleChange(e, "fr")}
                  size="xxl"
                  rows={10}
                />
                <Textarea
                  placeholder="ar"
                  name="ar"
                  type="text"
                  value={formData?.description?.ar}
                  onChange={(e) => handleChange(e, "ar")}
                  rows={10}
                />
                <Textarea
                  placeholder="en"
                  name="en"
                  type="text"
                  value={formData?.description?.en}
                  onChange={(e) => handleChange(e, "en")}
                  rows={10}
                />
              </VStack>
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
