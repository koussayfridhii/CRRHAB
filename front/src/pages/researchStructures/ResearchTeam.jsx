import React, { useEffect, useState } from "react"; // Import necessary hooks and libraries
import Table from "../../components/tables/tableV1/Table"; // Import Table component
import { Box, Heading } from "@chakra-ui/react"; // Import UI components from Chakra UI
import { useSelector } from "react-redux"; // Import useSelector hook from react-redux
import AutoComplete from "../../components/AutoComplete"; // Import AutoComplete component
import { useCallApi } from "../../hooks/useCallApi"; // Import custom hook for API calls
import Spinner from "../../components/spinner/Spinner"; // Import Spinner component

const ResearchTeam = ({ add = false }) => {
  const language = useSelector((state) => state.language.language); // Get the current language from the Redux store
  const [filtredData, setFiltredData] = useState([]); // State for filtered data
  const { data, error, isLoading } = useCallApi("research_team"); // Fetch data using custom hook

  useEffect(() => {
    if (filtredData.length < 1 && data) {
      // Populate filtered data if it's empty and data is available
      setFiltredData([...data]);
    }
  }, [data, filtredData.length]); // Dependency array includes data and filtredData.length

  if (isLoading) {
    return <Spinner />; // Show spinner while loading
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>; // Display error message if there's an error
  }

  const headers = {
    name: {
      fr: "nom",
      en: "name",
      ar: "الاسم",
    },
    email: {
      fr: "email",
      en: "email",
      ar: "البريد الالكتروني",
    },
    orcid: {
      fr: "orcid",
      en: "orcid",
      ar: "orcid",
    },
    grade: {
      fr: "grade",
      en: "grade",
      ar: "المرحلة",
    },
    speciality: {
      fr: "Spécialité",
      en: "Specialty",
      ar: "التخصص",
    },
    cv: {
      fr: "CV",
      en: "CV",
      ar: "CV",
    },
  };

  return (
    <Box
      w={{ base: "full", xl: "90dvw", "2xl": "80dvw" }} // Set width based on screen size
      bg={"background"} // Set background color
      mx={"auto"} // Center horizontally
      my={10} // Set vertical margin
      py={50} // Set vertical padding
      px={{ base: 0, xl: "5", "2xl": 10 }} // Set horizontal padding
      dir={language === "ar" ? "rtl" : "ltr"} // Set text direction based on language
    >
      <Heading
        _dark={{ bg: "secondary" }} // Dark mode background color
        fontSize={"xxl"} // Set font size
        fontFamily={"body"} // Set font family
        color={"white"} // Set text color
        bg={"primary"} // Set background color
        px={5} // Set horizontal padding
        py={2} // Set vertical padding
        fontWeight={400} // Set font weight
        borderRadius={"lg"} // Set border radius
        mb={6} // Set bottom margin
      >
        {language === "en"
          ? "Research Network"
          : language === "fr"
          ? "Réseau Chercheurs"
          : "شبكة الباحثين"}
      </Heading>
      <AutoComplete
        options={data} // Pass data to AutoComplete component
        language={language} // Pass language to AutoComplete component
        setFiltredData={setFiltredData} // Pass setFiltredData function to AutoComplete component
      />
      <Table data={filtredData} headers={headers} language={language} />
    </Box>
  );
};

export default ResearchTeam; // Export the ResearchTeam component
