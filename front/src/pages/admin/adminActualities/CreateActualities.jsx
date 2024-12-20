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
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useUploadImage from "../../../hooks/useUploadImage";
import { withAuthorization } from "../../../HOC/Protect";

const CreateNews = () => {
  const { id } = useParams();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAnnonce, setIsAnnonce] = useState(false); // State to manage checkbox
  const [formData, setFormData] = useState({
    link: "",
    title: { fr: "", ar: "", en: "" },
    description: { fr: "", ar: "", en: "" },
    img: "",
    type: "other",
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
      const url = await useUploadImage("news", imageFile);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        await axios.put(
          `https://crrhab.agrinet.tn/api/news/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
      } else {
        await axios.post("https://crrhab.agrinet.tn/api/news", formData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.user?.token}`,
          },
        });
      }
      setLoading(false);
      toast({
        title: "Data submitted successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/admin/actualities");
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
  };

  useEffect(() => {
    setFormData({ ...formData, img: url });
  }, [url]);

  useEffect(() => {
    setFormData({ ...formData, type: isAnnonce ? "advertisements" : "other" });
  }, [isAnnonce]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://crrhab.agrinet.tn/api/news/${id}`)
        .then((response) => setFormData(response.data.news))
        .catch((error) => {
          toast({
            title: "Error getting data.",
            description: error.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          console.error("Error getting data:", error);
        });
    }
  }, [id]);

  return (
    <Flex w="100dvw" h="100dvh" justify="center" align="center">
      <Box bg="background" p={8} rounded="md" shadow="lg" maxW="md" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel>Link</FormLabel>
              <Input
                type="text"
                value={formData.link}
                onChange={(e) => handleChange(e, null, "link")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <VStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.title.fr}
                  onChange={(e) => handleChange(e, "fr", "title")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.title.ar}
                  onChange={(e) => handleChange(e, "ar", "title")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.title.en}
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
                  value={formData.description.fr}
                  onChange={(e) => handleChange(e, "fr", "description")}
                />
                <Textarea
                  placeholder="ar"
                  type="text"
                  value={formData.description.ar}
                  onChange={(e) => handleChange(e, "ar", "description")}
                />
                <Textarea
                  placeholder="en"
                  type="text"
                  value={formData.description.en}
                  onChange={(e) => handleChange(e, "en", "description")}
                />
              </VStack>
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input type="file" onChange={handleFileChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Checkbox
                isChecked={isAnnonce}
                onChange={(e) => setIsAnnonce(e.target.checked)}
              >
                Annonces
              </Checkbox>
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

export default withAuthorization(CreateNews, ["admin"]);
