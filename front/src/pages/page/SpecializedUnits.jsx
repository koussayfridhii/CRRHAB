import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";
import CustomNewsCarousel from "../../components/NewsCarrousel";

// Créer une icône personnalisée en utilisant React Icons
const createCustomIcon = () => {
  const iconMarkup = renderToStaticMarkup(
    <div style={{ color: "red", fontSize: "35px" }}>
      <FaMapMarkerAlt />
    </div>
  );
  return L.divIcon({
    html: iconMarkup,
    className: "custom-icon", // Ajoutez une classe pour un style personnalisé, si nécessaire
  });
};

const NationalProjects = () => {
  const language = useSelector((state) => state.language.language);
  const data = [
    {
      title: {
        en: "Unit of Agricultural Experimentation of Chott Mariem, Sousse",
        fr: "Unité d'expérimentation agricole à Chott Mariem, Sousse",
        ar: "محطة التجارب بشط مريم",
      },
      activity: {
        en: "Horticulture: Vegetable Crops and Fruit Tree Cultivation under Conventional and Organic cropping systems",
        fr: "Horticulture : Cultures maraichères et arboriculture fruitière conduites en modes conventionnel et Biologique",
        ar: " زراعة الخضروات و الأشجار المثمرة على النمط العادي و البيولوجي"
      },
      superficie: {
        fr:"9,5 ha",
        en:"9,5 ha",
        ar:"9,5 هك",

      },
    },
    {
      title: {
        en: "Unit of Agricultural Experimentation of Sahline, Monastir",
        fr: "Unité d'expérimentation agricole à Sahline, Monastir",
        ar: "محطة التجارب بالساحلين",
      },
      activity: {
        en: " Vegetable Crops and Fruit Tree Cultivation under Conventional cropping system",
        fr: "Cultures maraichères et arboriculture fruitière conduites en mode Conventionnel",
        ar: " زراعة الخضروات و الأشجار المثمرة على النمط العادي و البيولوجي"
      },
      superficie: {
        fr:"5,8 ha",
        en:"5,8 ha",
        ar:"5,8 هك",
  
      },
    },
    {
      title: {
        en: "Unit of Agricultural Experimentation of Teboulba, Monastir",
        fr: "Unité d'expérimentation agricole à Teboulba, Monastir",
        ar: "محطة التجارب بطبلبة",
      },
      activity: {
        en: "Greenhouse and open field Vegetable Crops under Conventional cropping system",
        fr: "Cultures maraichères sous abri-serre et en plein champ conduites en mode Conventionnel",
        ar: "زراعة الخضروات المحمية و الحقلية على النمط العادي"
      },
      superficie: {
        fr:"3,7 ha",
        en:"3,7 ha",
        ar:"3,7 هك",
  
      },
    },
  ];

  return (
    <>
      <CustomNewsCarousel title="unit" />
      <Box
        w={{ base: "full", xl: "90%", "2xl": "80%" }}
        bg="background"
        mx="auto"
        my={10}
        borderRadius="lg"
        minH="100dvh"
        py={10}
        px={{ base: 0, xl: 10 }}
        boxShadow="lg"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <Heading
          _dark={{
              bg: "secondary",
          }}
          fontSize={"xxl"}
          fontFamily={"body"}
          color={"white"}
          bg={"primary"}
          px={5}
          py={2}
          fontWeight={400}
          borderRadius={"lg"}
          mb={6}
        >
          {language === "en"
            ? "Specialized Units"
            : language === "fr"
            ? "Unités Spécialisées"
            : "وحدات مختصة"}
        </Heading>
        <List spacing={2} my={10}>
          <ListItem
            fontSize="lg"
            px={3}
            py={5}
            bg="#C6F6D5"
            _dark={{ bg: "#2C5282" }}
          >
            {"fr" === language ? 'Unité d’information et de documentation' : "en" === language ? "Unit of Information and Documentation" : "وحدة الاعلام والتوثيق العلمي"}
          </ListItem>
          <ListItem
            fontSize="lg"
            px={3}
            py={5}
            bg="background"
            borderBottom={"2px"}
            borderColor="primary"
            >
            {"fr" === language ? 'Unité de valorisation des résultats de la recherche' : "en" === language ? "Unit of Research results valorization" : "وحدة تثمين نتائج البحث"}
            
          </ListItem>
        </List>
        <DataTable data={data} language={language} />
        <Divider
          my={5}
          _dark={{
            bg: "secondary",
            borderColor: "secondary",
          }}
          orientation="horizontal"
          bg={"primary"}
          w={"90%"}
          mx={"auto"}
          borderColor={"primary"}
        />
        <LeafletMap />
      </Box>
    </>
  );
};

const DataTable = ({ data, language }) => {
  const getText = (item, language) => item[language] || item.en || "";
  const { colorMode } = useColorMode();
  return (
    <TableContainer>
      <Table
        variant="striped"
        colorScheme={colorMode === "light" ? "green" : "blue"}
        width="100%"
        overflowX="auto"
      >
        <Thead bg={"primary"} _dark={{ bg: "secondary" }}>
          <Tr>
            <Th color={"white"}>
              {language === "en"
                ? "Unit"
                : language === "fr"
                ? "Unités d'expérimentation"
                : "الوحدة"}
            </Th>
            <Th color={"white"}>
              {language === "en"
                ? "Area"
                : language === "fr"
                ? "Superficie"
                : "المساحة"}
            </Th>
            <Th color={"white"}>
              {language === "en"
                ? "Research Activities"
                : language === "fr"
                ? "Activités de recherche"
                : "أنشطة البحث"}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td
                display="flex"
                alignItems="center"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="normal"
                maxW="auto"
              >
                {getText(row.title, language)}
              </Td>
              <Td> {getText(row.title, language)}</Td>
              <Td
                display="flex"
                alignItems="center"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="normal"
                maxW="auto"
              >
                {getText(row.activity, language)}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const LeafletMap = () => {
  const locations = [
    { name: "Station Sahline", lat: 35.769444, lng: 10.691389 },
    { name: "Station Chott Mariem", lat: 35.9125, lng: 10.564444 },
    { name: "Station Teboulba", lat: 35.6375, lng: 10.958889 },
  ];

  const center = [35.769444, 10.691389];

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={[location.lat, location.lng]}
          icon={createCustomIcon()}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default NationalProjects;
