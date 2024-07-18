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
  Checkbox,
  CheckboxGroup,
  useToast,
} from "@chakra-ui/react";
import useUploadImage from "../../../hooks/useUploadImage";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { withAuthorization } from "../../../HOC/Protect";

const CreateLaboratoryMembers = () => {
  const { pathname } = useLocation();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: { fr: "", ar: "", en: "" },
    email: "",
    orcid: "",
    grade: { fr: "", ar: "", en: "" },
    affiliation: "",
    executive: false,
  });
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const path = pathname.replace("/admin/create/laboratory_members", "");

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

  const handleCheckboxChange = (value) => {
    setFormData({
      ...formData,
      executive: value === "true",
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = {
      ...formData,
      cv: url,
    };

    try {
      if (path === "") {
        await axios.post(
          "http://localhost:5000/api/laboratory_members",
          JSON.stringify(formDataToSend),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
      } else {
        await axios.put(
          `http://localhost:5000/api/laboratory_members/${formData._id}`,
          JSON.stringify(formDataToSend),
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
      navigate("/admin/laboratory_members");
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
    setFormData({ ...formData, cv: url });
  }, [url]);

  const firstApiCall = async (path) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/laboratory_members/${path}`
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
    <Flex w="100vw" h="100vh" justify="center" align="center">
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
              <FormLabel>Grade</FormLabel>
              <HStack>
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.grade.fr}
                  onChange={(e) => handleChange(e, "fr", "grade")}
                />
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.grade.ar}
                  onChange={(e) => handleChange(e, "ar", "grade")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.grade.en}
                  onChange={(e) => handleChange(e, "en", "grade")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Affiliation</FormLabel>
              <Input
                type="text"
                value={formData.affiliation}
                onChange={(e) => handleChange(e, null, "affiliation")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Executive</FormLabel>
              <Checkbox
                isChecked={formData.executive}
                onChange={(e) =>
                  setFormData({ ...formData, executive: !formData.executive })
                }
              >
                Executive Member
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

export default withAuthorization(CreateLaboratoryMembers, ["admin"]);
