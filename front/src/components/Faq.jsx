import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Card,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Faq() {
  const language = useSelector((state) => state.language.language);
  const FAQuestions = [
    {
      question: {
        fr: "Qu'est-ce que le CRRHAB ?",
        en: "What is CRRHAB?",
        ar: "ما هو CRHRAB؟",
      },
      answer: {
        fr: " Centre Régional des Recherches en Horticulture et Agriculture Biologique",
        en: "Regional Research Center in Horticulture and Organic Agriculture",
        ar: "مركز الجهوي للبحوث في البستنة و الفلاحة البيولوجية",
      },
    },
  ];
  return (
    <Card px={5} py={3}>
      <Accordion defaultIndex={[0]} allowMultiple>
        {FAQuestions.map((question) => {
          return (
            <AccordionItem key={question.question.fr}>
              <h2>
                <AccordionButton fontSize={"lg"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign={language === "ar" ? "right" : "left"}
                  >
                    {question.question[language]}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={"sm"}>
                {question.answer[language]}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Card>
  );
}
