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
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { withAuthorization } from "../../../HOC/Protect";

const CreateNationalProject = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: { fr: "", ar: "", en: "" },
    cordinator: { fr: "", ar: "", en: "" },
    duration: "",
    closed:false,
  });
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const path = pathname.replace("/admin/create/national_projects", "");

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

    try {
      console.log("Submitting data:", formData); // Log the data to be sent
      if (path === "") {
        await axios.post(
          "127.0.0.1:5000api/national_projects",
          JSON.stringify(formData),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
      } else {
        await axios.put(
          `127.0.0.1:5000api/national_projects/${formData._id}`,
          JSON.stringify(formData),
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
        title: "Data submitted successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/admin/national_projects");
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

  const firstApiCall = async (path) => {
    try {
      const response = await axios.get(
        `127.0.0.1:5000api/national_projects/${path}`
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
  }, [path]);

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Box bg="background" p={8} rounded="md" shadow="lg" maxW="md" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel>Title</FormLabel>
              <HStack>
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
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Cordinator</FormLabel>
              <HStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.cordinator.fr}
                  onChange={(e) => handleChange(e, "fr", "cordinator")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.cordinator.ar}
                  onChange={(e) => handleChange(e, "ar", "cordinator")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.cordinator.en}
                  onChange={(e) => handleChange(e, "en", "cordinator")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Duration</FormLabel>
              <Input
                type="text"
                value={formData.duration}
                onChange={(e) => handleChange(e, null, "duration")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Closed</FormLabel>
              <Checkbox
                isChecked={formData.closed}
                onChange={(e) =>
                  setFormData({ ...formData, closed: !formData.closed })
                }
              >
                closed
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

export default withAuthorization(CreateNationalProject, ["admin"]);
