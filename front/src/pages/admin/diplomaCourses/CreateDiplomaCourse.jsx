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
} from "@chakra-ui/react";
import useUploadImage from "../../../hooks/useUploadImage";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { withAuthorization } from "../../../HOC/Protect";

const CreateDiplomaCourse = () => {
  const { pathname } = useLocation();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    annee: "",
    type: { fr: "", ar: "", en: "" },
    auteur: { fr: "", ar: "", en: "" },
    titre: { fr: "", ar: "", en: "" },
    specialite: { fr: "", ar: "", en: "" },
    directeur: { fr: "", ar: "", en: "" },
    etablissement: { fr: "", ar: "", en: "" },
    date: "",
  });
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const path = pathname.replace("/admin/create/diploma_course", "");
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

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (path === "") {
      try {
        const response = await axios.post(
          "http://crrhab.agrinet.tn/api/diploma_courses",
          JSON.stringify(formData),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
        setLoading(false);
        toast({
          title: "Data submitted successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/admin/diploma_course");
      } catch (error) {
        setLoading(false);
        toast({
          title: "Error submitting data.",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.error("Error submitting data:", error);
      }
    } else {
      try {
        const response = await axios.put(
          `http://crrhab.agrinet.tn/api/diploma_courses/${formData._id}`,
          JSON.stringify(formData),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
        setLoading(false);
        toast({
          title: "Data submitted successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/admin/diploma_course");
      } catch (error) {
        setLoading(false);
        toast({
          title: "Error submitting data.",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.error("Error submitting data:", error);
      }
    }
  };

  useEffect(() => {
    setFormData({ ...formData, cv: url });
  }, [url]);
  const firstApiCall = async (path) => {
    try {
      const response = await axios.get(
        `http://crrhab.agrinet.tn/api/diploma_courses/${path}`
      );
      setFormData(response.data);
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error getting data.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error getting data:", error);
    }
  };
  useEffect(() => {
    path !== "" && firstApiCall(path.replace("/", ""));
  }, []);

  return (
    <Flex w="100dvw" h="100dvh" justify="center" align="center">
      <Box bg="background" p={8} rounded="md" shadow="lg" maxW="md" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input
                type="number"
                value={formData.annee}
                onChange={(e) => handleChange(e, null, "annee")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <HStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.type.fr}
                  onChange={(e) => handleChange(e, "fr", "type")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.type.ar}
                  onChange={(e) => handleChange(e, "ar", "type")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.type.en}
                  onChange={(e) => handleChange(e, "en", "type")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Author</FormLabel>
              <HStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.auteur.fr}
                  onChange={(e) => handleChange(e, "fr", "auteur")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.auteur.ar}
                  onChange={(e) => handleChange(e, "ar", "auteur")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.auteur.en}
                  onChange={(e) => handleChange(e, "en", "auteur")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <HStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.titre.fr}
                  onChange={(e) => handleChange(e, "fr", "titre")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.titre.ar}
                  onChange={(e) => handleChange(e, "ar", "titre")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.titre.en}
                  onChange={(e) => handleChange(e, "en", "titre")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Speciality</FormLabel>
              <HStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.specialite.fr}
                  onChange={(e) => handleChange(e, "fr", "specialite")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.specialite.ar}
                  onChange={(e) => handleChange(e, "ar", "specialite")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.specialite.en}
                  onChange={(e) => handleChange(e, "en", "specialite")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Director</FormLabel>
              <HStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.directeur.fr}
                  onChange={(e) => handleChange(e, "fr", "directeur")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.directeur.ar}
                  onChange={(e) => handleChange(e, "ar", "directeur")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.directeur.en}
                  onChange={(e) => handleChange(e, "en", "directeur")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Institution</FormLabel>
              <HStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.etablissement.fr}
                  onChange={(e) => handleChange(e, "fr", "etablissement")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.etablissement.ar}
                  onChange={(e) => handleChange(e, "ar", "etablissement")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.etablissement.en}
                  onChange={(e) => handleChange(e, "en", "etablissement")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange(e, null, "date")}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="green"
              isLoading={loading}
              size="md"
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default withAuthorization(CreateDiplomaCourse, ["admin"]);
