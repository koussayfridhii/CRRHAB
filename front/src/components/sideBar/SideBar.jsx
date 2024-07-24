import React, { useEffect, useState } from "react";
import {
  Divider,
  chakra,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";
import "./SideBar.scss";
import CardV1 from "../cards/cardV1/Card";
import CardV2 from "../cards/cardV2/Card";
import CardV3 from "../cards/cardV3/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const language = useSelector((state) => state.language.language);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchKey, setSearchKey] = useState("");
  const [results, setResults] = useState({
    laboratoryMembers: [],
    researchTeam: [],
    scientificProduction: [],
    scientificCouncilMembers: [],
    diplomaCourse: [],
    nationalProject: [],
    news: [],
    events: [],
  });
  const [resultsLength, setResultsLength] = useState(0);
  const handleSearch = async () => {
    try {
      const response = await axios.post("http://crrhab.agrinet.tn/api/search", {
        query: searchKey,
      });
      setResults(response.data); // assuming the response data contains the search results
      onOpen();
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };
  useEffect(() => {
    setResultsLength(
      results.laboratoryMembers.length ||
        results.nationalProject.length ||
        results.diplomaCourse.length ||
        results.events.length ||
        results.news.length ||
        results.researchTeam.length ||
        results.scientificProduction.length ||
        results.scientificCouncilMembers.length
    );
  }, [results]);
  return (
    <chakra.aside className="sideBar" dir={language === "ar" ? "rtl" : "ltr"}>
      <Input
        placeholder="Recherche ..."
        w="90%"
        ml={5}
        bg="background"
        my={5}
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <Divider
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
        w={"80%"}
        mx={"auto"}
        borderColor={"primary"}
      />
      <CardV3 />
      <Divider
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
        w={"80%"}
        mx={"auto"}
        borderColor={"primary"}
      />
      <CardV2 />
      <Divider
        _dark={{
          bg: "secondary",
          borderColor: "secondary",
        }}
        orientation="horizontal"
        bg={"primary"}
        w={"80%"}
        mx={"auto"}
        borderColor={"primary"}
      />
      <CardV1 />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Results</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {resultsLength > 0 ? (
              <>
              {results.news?.length > 0 && (
                  <List>
                    <chakra.p fontWeight={"bold"}>
                      {language === "en" ? "News" : language === "fr" ? "Actualités" : "المستجدات"}
                    </chakra.p>
                    {results.news.map((item) => (
                      <ListItem key={item._id} color="secondary">
                        <Link to={`/actualities/${item._id}`}>
                        <chakra.p>
                          <strong>{language === "en" ? "Title: " : language === "fr" ? "Titre: " : "العنوان: "}</strong>
                          {item.title?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Description: " : language === "fr" ? "Description: " : "الوصف: "}</strong>
                          {item.description?.[language]}
                        </chakra.p>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                )}
                {results.events?.length > 0 && (
                  <List>
                    <chakra.p fontWeight={"bold"}>
                      {language === "en" ? "Events" : language === "fr" ? "Évènements" : "الأحداث"}
                    </chakra.p>
                    {results.events.map((item) => (
                      <ListItem key={item._id} color="secondary">
                        <Link to={`/events/${item._id}`}>
                        <chakra.p>
                          <strong>{language === "en" ? "Title: " : language === "fr" ? "Titre: " : "العنوان: "}</strong>
                          {item.title?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Description: " : language === "fr" ? "Description: " : "الوصف: "}</strong>
                          {item.description?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Date: " : language === "fr" ? "Date: " : "التاريخ: "}</strong>
                          {item.date}
                        </chakra.p>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                )}
                {results.researchTeam.length > 0 && (
                  <List>
                    <chakra.p fontWeight={"bold"}>
                      {" "}
                      {language === "en"
                        ? "Research Network"
                        : language === "fr"
                        ? "Liste des Chercheurs"
                        : "شبكة الباحثين"}
                    </chakra.p>
                    {results.researchTeam.map((item) => (
                      <ListItem key={item._id} color="secondary">
                        <chakra.a
                          href={`https://orcid.org/${item.orcid}`}
                          target="_blank"
                        >
                          {`${item.name?.[language]}, ${item.speciality?.[language]}, ${item.orcid}`}
                        </chakra.a>
                        <br />
                        <chakra.a href={`${item.cv}`} target="_blank">
                          {language === "en"
                            ? "CV"
                            : language === "fr"
                            ? "CV"
                            : "السيرة الذاتية"}
                        </chakra.a>
                      </ListItem>
                    ))}
                  </List>
                )}
                {results.laboratoryMembers.length > 0 && (
                  <List>
                    <chakra.p fontWeight={"bold"}>
                      {" "}
                      {language === "en"
                        ? "Laboratory Members"
                        : language === "fr"
                        ? "Membres du Laboratoire"
                        : "أعضاء المختبر"}
                    </chakra.p>
                    {results.laboratoryMembers.map((item) => (
                      <ListItem key={item._id} color="secondary">
                        <chakra.a
                          href={`https://orcid.org/${item.orcid}`}
                          target="_blank"
                        >
                          {`${item.grade?.[language]} ${item.name?.[language]}, ${item.affiliation}, ${item.orcid}`}
                        </chakra.a>
                      </ListItem>
                    ))}
                  </List>
                )}
                {results.scientificCouncilMembers?.length > 0 && (
                  <List>
                    <chakra.p fontWeight={"bold"}>
                      {language === "en"
                        ? "Scientific Council Members"
                        : language === "fr"
                        ? "Membres du Conseil Scientifique"
                        : "أعضاء المجلس العلمي"}
                    </chakra.p>
                    {results.scientificCouncilMembers.map((item) => (
                      <ListItem key={item._id} color="secondary">
                        <chakra.p>
                          <strong>{language === "en" ? "President: " : language === "fr" ? "Président: " : "الرئيس: "}</strong>
                          {item.president?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Rapporteur: " : language === "fr" ? "Rapporteur: " : "المقرر: "}</strong>
                          {item.rapporteur?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Responsables des structures RDI: " : language === "fr" ? "Responsables des structures RDI: " : "مسؤولو هياكل البحث والتطوير: "}</strong>
                          {item.Responsables_des_structures_RDI?.map((responsable) => responsable[language]).join(", ")}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Managers of Specialized Units: " : language === "fr" ? "Gestionnaires des unités spécialisées: " : "مديرو الوحدات المتخصصة: "}</strong>
                          {item.managersOfSpecializedUnits?.map((manager) => manager[language]).join(", ")}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Representatives of Researchers: " : language === "fr" ? "Représentants des chercheurs: " : "ممثلون عن الباحثين: "}</strong>
                          {item.representativesOfResearchers?.map((representative) => representative[language]).join(", ")}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Representative of Iresa: " : language === "fr" ? "Représentant de l'Iresa: " : "ممثل إيريسا: "}</strong>
                          {item.representativeOfIresa?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Representatives of Agricultural Research and Higher Education Establishments: " : language === "fr" ? "Représentants des établissements de recherche agricole et d'enseignement supérieur: " : "ممثلون عن مؤسسات البحث الزراعي والتعليم العالي: "}</strong>
                          {item.representativesOfAgriculturalResearchAndHigherEducationEstablishments?.map((representative) => representative[language]).join(", ")}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Representative of Inrat: " : language === "fr" ? "Représentant de l'Inrat: " : "ممثل إنرات: "}</strong>
                          {item.representativeOfInrat?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Representative of INRGREF: " : language === "fr" ? "Représentant de l'INRGREF: " : "ممثل إنرجريف: "}</strong>
                          {item.representativeOfINRGREF?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Representative of IO: " : language === "fr" ? "Représentant de l'IO: " : "ممثل المنظمة الدولية: "}</strong>
                          {item.representativeOfIO?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Representative of Ctab: " : language === "fr" ? "Représentant du Ctab: " : "ممثل سي تاب: "}</strong>
                          {item.representativeOfCtab?.[language]}
                        </chakra.p>
                      </ListItem>
                    ))}
                  </List>
                )}
                  {results.nationalProject?.length > 0 && (
                  <List>
                    <chakra.p fontWeight={"bold"}>
                      {language === "en"
                        ? "National Projects"
                        : language === "fr"
                        ? "Projets Nationaux"
                        : "مشاريع وطنية"}
                    </chakra.p>
                    {results.nationalProject.map((item) => (
                      <ListItem key={item._id} color="secondary">
                        <chakra.p>
                          <strong>{language === "en" ? "Title: " : language === "fr" ? "Titre: " : "العنوان: "}</strong>
                          {item.title?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Coordinator: " : language === "fr" ? "Coordinateur: " : "المنسق: "}</strong>
                          {item.cordinator?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>{language === "en" ? "Duration: " : language === "fr" ? "Durée: " : "المدة: "}</strong>
                          {item.duration}
                        </chakra.p>
                      </ListItem>
                    ))}
                  </List>
                )}
                {results.diplomaCourse?.length > 0 && (
                  <List>
                    <chakra.p fontWeight={"bold"}>
                      {language === "en"
                        ? "Training Qualification"
                        : language === "fr"
                        ? "Formation Diplômante"
                        : "تدريب مؤهل"}
                    </chakra.p>
                    {results.diplomaCourse.map((item) => (
                      <ListItem key={item._id} color="secondary">
                        <chakra.p>
                          <strong>
                            {language === "en"
                              ? "Title: "
                              : language === "fr"
                              ? "Titre: "
                              : "العنوان: "}
                          </strong>
                          {item.titre?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>
                            {language === "en"
                              ? "Author: "
                              : language === "fr"
                              ? "Auteur: "
                              : "المؤلف: "}
                          </strong>
                          {item.auteur?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>
                            {language === "en"
                              ? "Speciality: "
                              : language === "fr"
                              ? "Spécialité: "
                              : "التخصص: "}
                          </strong>
                          {item.specialite?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>
                            {language === "en"
                              ? "Director: "
                              : language === "fr"
                              ? "Directeur: "
                              : "المشرف: "}
                          </strong>
                          {item.directeur?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>
                            {language === "en"
                              ? "Institution: "
                              : language === "fr"
                              ? "Établissement: "
                              : "المؤسسة: "}
                          </strong>
                          {item.etablissement?.[language]}
                        </chakra.p>
                        <chakra.p>
                          <strong>
                            {language === "en"
                              ? "Date: "
                              : language === "fr"
                              ? "Date: "
                              : "التاريخ: "}
                          </strong>
                          {item.annee}
                        </chakra.p>
                      </ListItem>
                    ))}
                  </List>
                )}
                {results.scientificProduction?.length > 0 && (
                  <List>
                    <chakra.p fontWeight={"bold"}>
                      {language === "en"
                        ? "Scientific Production"
                        : language === "fr"
                        ? "Production Scientifique"
                        : "الإنتاج العلمي"}
                    </chakra.p>
                    {results.scientificProduction.map((e, i) => {
            return (
              <ListItem key={i}>
                <chakra.a
                  href={e.journal?.url}
                  target="_blank"
                  color="secondary"
                >
                  {`${e?.authors?.[language]}, (${e.year}). ${e.title?.[language]}. ${e.journal?.name?.[language]}. ${e?.journal?.volume},${e?.journal?.pages}`}
                </chakra.a>
              </ListItem>
            );
          })}
                  </List>
                )}
                
              </>
            ) : (
              <p>No results found</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </chakra.aside>
  );
};

export default SideBar;
