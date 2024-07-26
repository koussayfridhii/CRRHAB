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
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { withAuthorization } from "../../../HOC/Protect";

const CreateScientificCouncilMembers = () => {
  const { pathname } = useLocation();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    president: { fr: "", ar: "", en: "" },
    rapporteur: { fr: "", ar: "", en: "" },
    Responsables_des_structures_RDI: [{ fr: "", ar: "", en: "" }],
    managersOfSpecializedUnits: [{ fr: "", ar: "", en: "" }],
    representativesOfResearchers: [{ fr: "", ar: "", en: "" }],
    representativeOfIresa: { fr: "", ar: "", en: "" },
    representativesOfAgriculturalResearchAndHigherEducationEstablishments: [{ fr: "", ar: "", en: "" }],
    representativeOfInrat: { fr: "", ar: "", en: "" },
    representativeOfINRGREF: { fr: "", ar: "", en: "" },
    representativeOfIO: { fr: "", ar: "", en: "" },
    representativeOfCtab: { fr: "", ar: "", en: "" },
  });
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const path = pathname.replace("/admin/create/scientific_council", "");

  const handleChange = (e, lang, field, index = null) => {
    if (index !== null) {
      const updatedArray = [...formData[field]];
      updatedArray[index] = { ...updatedArray[index], [lang]: e.target.value };
      setFormData({ ...formData, [field]: updatedArray });
    } else {
      setFormData({
        ...formData,
        [field]: { ...formData[field], [lang]: e.target.value },
      });
    }
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = { ...formData, cv: url };

    try {
      if (path === "") {
        await axios.post(
          "http://127.0.0.1:5000api/scientific_council",
          JSON.stringify(payload),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.user?.token}`,
            },
          }
        );
      } else {
        await axios.put(
          `http://127.0.0.1:5000api/scientific_council/${formData._id}`,
          JSON.stringify(payload),
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
      navigate("/admin/scientific_council");
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

  const addField = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], { fr: "", ar: "", en: "" }],
    });
  };

  const removeField = (field, index) => {
    const updatedArray = formData[field].filter((_, idx) => idx !== index);
    setFormData({ ...formData, [field]: updatedArray });
  };

  useEffect(() => {
    setFormData({ ...formData, cv: url });
  }, [url]);

  const firstApiCall = async (path) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000api/scientific_council/${path}`
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
    if (path !== "") firstApiCall(path.replace("/", ""));
  }, [path]);

  return (
    <Flex w="100%" minH="100vh" justify="center" align="center" py={20}>
      <Box bg="background" p={8} rounded="md" shadow="lg" maxW="2xl" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            {[
              "president",
              "rapporteur",
              "representativeOfIresa",
              "representativeOfInrat",
              "representativeOfINRGREF",
              "representativeOfIO",
              "representativeOfCtab",
            ].map((field) => (
              <FormControl key={field}>
                <FormLabel>
                  {field
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </FormLabel>
                <HStack>
                  <Input
                    placeholder="fr"
                    type="text"
                    value={formData[field].fr}
                    onChange={(e) => handleChange(e, "fr", field)}
                  />
                  <Input
                    placeholder="ar"
                    type="text"
                    value={formData[field].ar}
                    onChange={(e) => handleChange(e, "ar", field)}
                  />
                  <Input
                    placeholder="en"
                    type="text"
                    value={formData[field].en}
                    onChange={(e) => handleChange(e, "en", field)}
                  />
                </HStack>
              </FormControl>
            ))}
            {[
              "representativesOfResearchers",
              "representativesOfAgriculturalResearchAndHigherEducationEstablishments",
              "Responsables_des_structures_RDI",
              "managersOfSpecializedUnits",
            ].map((field) => (
              <FormControl key={field}>
                <FormLabel>
                  {field}
                </FormLabel>
                {formData?.[field]?.map((item, index) => (
                  <HStack key={index} mb={2}>
                    <Input
                      placeholder="fr"
                      type="text"
                      value={item.fr}
                      onChange={(e) => handleChange(e, "fr", field, index)}
                    />
                    <Input
                      placeholder="ar"
                      type="text"
                      value={item.ar}
                      onChange={(e) => handleChange(e, "ar", field, index)}
                    />
                    <Input
                      placeholder="en"
                      type="text"
                      value={item.en}
                      onChange={(e) => handleChange(e, "en", field, index)}
                    />
                    <Button onClick={() => removeField(field, index)}>
                      Remove
                    </Button>
                  </HStack>
                ))}
                <Button onClick={() => addField(field)}>
                  Add {field.replace(/([A-Z])/g, " $1")}
                </Button>
              </FormControl>
            ))}
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

export default withAuthorization(CreateScientificCouncilMembers, ["admin"]);
