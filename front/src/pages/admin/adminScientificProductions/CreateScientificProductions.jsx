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

const CreateScientificProduction = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    year: "",
    title: { ar: "", fr: "", en: "" },
    authors: { ar: [""], fr: [""], en: [""] },
    journal: {
      name: { ar: "", fr: "", en: "" },
      volume: "",
      issue: "",
      pages: "",
      ISSN: {
        electronic: "",
        print: "",
      },
      url: "",
    },
    published_date: { ar: "", fr: "", en: "" },
    pdf_url: "",
  });

  const user = useSelector((state) => state.user);
  const toast = useToast();
  const path = pathname.replace("/admin/create/scientific_productions", "");

  const handleChange = (e, field, subfield = null, lang = null) => {
    const { value } = e.target;
    setFormData((prevData) => {
      if (subfield && lang) {
        return {
          ...prevData,
          [field]: {
            ...prevData[field],
            [subfield]: {
              ...prevData[field][subfield],
              [lang]: value,
            },
          },
        };
      } else if (subfield) {
        return {
          ...prevData,
          [field]: {
            ...prevData[field],
            [subfield]: value,
          },
        };
      } else if (lang) {
        return {
          ...prevData,
          [field]: {
            ...prevData[field],
            [lang]: value,
          },
        };
      } else {
        return {
          ...prevData,
          [field]: value,
        };
      }
    });
  };

  const handleArrayChange = (e, lang, field, index) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedArray = prevData[field][lang].slice();
      updatedArray[index] = value;
      return {
        ...prevData,
        [field]: { ...prevData[field], [lang]: updatedArray },
      };
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response =
        path === ""
          ? await axios.post(
              "http://crrhab.agrinet.tn/api/scientific_productions",
              JSON.stringify(formData),
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${user?.user?.token}`,
                },
              }
            )
          : await axios.put(
              `http://crrhab.agrinet.tn/api/scientific_productions/${formData._id}`,
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
      navigate("/admin/scientific_productions");
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
        `http://crrhab.agrinet.tn/api/scientific_productions/${path}`
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
    if (path !== "") {
      firstApiCall(path.replace("/", ""));
    }
  }, [path]);

  return (
    <Flex w="100%" minH="100dvh" py={10} justify="center" align="center">
      <Box bg="background" p={8} rounded="md" shadow="lg" maxW="md" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input
                type="text"
                value={formData.year}
                onChange={(e) => {
                  handleChange(e, "year");
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <HStack>
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.title.ar}
                  onChange={(e) => handleChange(e, "title", null, "ar")}
                />
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.title.fr}
                  onChange={(e) => handleChange(e, "title", null, "fr")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.title.en}
                  onChange={(e) => handleChange(e, "title", null, "en")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Authors</FormLabel>
              {["ar", "fr", "en"].map((lang) => (
                <HStack key={lang}>
                  {formData.authors[lang].map((author, index) => (
                    <Input
                      key={index}
                      placeholder={lang}
                      type="text"
                      value={author}
                      onChange={(e) =>
                        handleArrayChange(e, lang, "authors", index)
                      }
                    />
                  ))}
                </HStack>
              ))}
            </FormControl>
            <FormControl>
              <FormLabel>Journal Name</FormLabel>
              <HStack>
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.journal.name.ar}
                  onChange={(e) => handleChange(e, "journal", "name", "ar")}
                />
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.journal.name.fr}
                  onChange={(e) => handleChange(e, "journal", "name", "fr")}
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.journal.name.en}
                  onChange={(e) => handleChange(e, "journal", "name", "en")}
                />
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel>Volume</FormLabel>
              <Input
                type="text"
                value={formData.journal.volume}
                onChange={(e) => handleChange(e, "journal", "volume")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Issue</FormLabel>
              <Input
                type="text"
                value={formData.journal.issue}
                onChange={(e) => handleChange(e, "journal", "issue")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Pages</FormLabel>
              <Input
                type="text"
                value={formData.journal.pages}
                onChange={(e) => handleChange(e, "journal", "pages")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>ISSN (Electronic)</FormLabel>
              <Input
                type="text"
                value={formData.journal.ISSN.electronic}
                onChange={(e) =>
                  handleChange(e, "journal", "ISSN", "electronic")
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>ISSN (Print)</FormLabel>
              <Input
                type="text"
                value={formData.journal.ISSN.print}
                onChange={(e) => handleChange(e, "journal", "ISSN", "print")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Journal URL</FormLabel>
              <Input
                type="text"
                value={formData.journal.url}
                onChange={(e) => handleChange(e, "journal", "url")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Published Date</FormLabel>
              <HStack>
                <Input
                  placeholder="ar"
                  type="text"
                  value={formData.published_date.ar}
                  onChange={(e) =>
                    handleChange(e, "published_date", null, "ar")
                  }
                />
                <Input
                  placeholder="fr"
                  type="text"
                  value={formData.published_date.fr}
                  onChange={(e) =>
                    handleChange(e, "published_date", null, "fr")
                  }
                />
                <Input
                  placeholder="en"
                  type="text"
                  value={formData.published_date.en}
                  onChange={(e) =>
                    handleChange(e, "published_date", null, "en")
                  }
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

export default withAuthorization(CreateScientificProduction, ["admin"]);
