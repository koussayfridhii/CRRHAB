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

const CreateResearchTeam = () => {
  const { pathname } = useLocation();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: { fr: "", ar: "", en: "" },
    email: "",
    orcid: "",
    cv: "",
    speciality: { fr: "", ar: "", en: "" },
  });
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const path = pathname.replace("/admin/create/research_team", "");
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
      const url = await useUploadImage("cv", imageFile);
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
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (path === "") {
      try {
        const response = await axios.post(
          "https://crrhab-3ofe.vercel.app/api/research_team",
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
        navigate("/admin/research_team");
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
          `https://crrhab-3ofe.vercel.app/api/research_team/${formData._id}`,
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
        navigate("/admin/research_team");
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
        `https://crrhab-3ofe.vercel.app/api/research_team/${path}`
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
              <FormLabel>Name</FormLabel>
              <HStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.name.fr}
                  onChange={(e) => handleChange(e, "fr", "name")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.name.ar}
                  onChange={(e) => handleChange(e, "ar", "name")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.name.en}
                  onChange={(e) => handleChange(e, "en", "name")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange(e, null, "email")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>ORCID</FormLabel>
              <Input
                type="text"
                value={formData.orcid}
                onChange={(e) => handleChange(e, null, "orcid")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>CV</FormLabel>
              <Input type="file" onChange={handleFileChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Speciality</FormLabel>
              <HStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.speciality.fr}
                  onChange={(e) => handleChange(e, "fr", "speciality")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.speciality.ar}
                  onChange={(e) => handleChange(e, "ar", "speciality")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.speciality.en}
                  onChange={(e) => handleChange(e, "en", "speciality")}
                />
              </HStack>
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

export default CreateResearchTeam;
