import React from "react";
import {
  chakra,
  Box,
  Flex,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Link,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const FaqV2 = () => {
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
  const FAQItem = ({ question, answer, icon }) => {
    return (
      <AccordionItem
        borderColor="primary"
        _dark={{
          borderColor: "secondary",
        }}
      >
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Flex alignItems="center" minH={12}>
              <Flex
                shrink={0}
                alignItems="center"
                justifyContent="center"
                h={{
                  base: 8,
                  md: 12,
                }}
                w={{
                  base: 8,
                  md: 12,
                }}
                rounded="md"
                bg="brand.500"
                color="primary"
                _dark={{
                  color: "secondary",
                }}
              >
                <Icon
                  boxSize={{
                    base: 4,
                    md: 6,
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {icon}
                </Icon>
              </Flex>
              <Box
                ml={{
                  base: 2,
                  md: 4,
                }}
              >
                <chakra.dt
                  fontSize="lg"
                  fontWeight="medium"
                  lineHeight="6"
                  color="gray.900"
                  _dark={{
                    color: "white",
                  }}
                >
                  {question}
                </chakra.dt>
              </Box>
            </Flex>
          </Box>
          <AccordionIcon
            color={"primary"}
            _dark={{
              color: "secondary",
            }}
          />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <chakra.dd
            mt={2}
            color="textSecondary"
            _dark={{
              color: "textSecondary",
            }}
          >
            {answer}
          </chakra.dd>
        </AccordionPanel>
      </AccordionItem>
    );
  };

  return (
    <Flex
      bg="background"
      _dark={{
        bg: "background",
      }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Box
        py={12}
        bg={"background"}
        rounded="xl"
        shadow="base"
        w={{ base: "100dvw", "2xl": "100%" }}
      >
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: 4,
            lg: 8,
          }}
        >
          <Box textAlign="center">
            <chakra.h2
              mt={2}
              fontSize={{
                base: "3xl",
                sm: "4xl",
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              textTransform={"capitalize"}
              color="text"
              _dark={{
                color: "white",
              }}
            >
              {language === "en"
                ? "Frequently Asked Questions"
                : language === "ar"
                ? "أسئلة متكررة"
                : "Questions fréquemment posées"}
            </chakra.h2>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{
                lg: "auto",
              }}
              color="textSecondary"
            >
              {language === "en"
                ? " This is a straightforward and clear option that everyone will understand."
                : language === "ar"
                ? "هذا خيار واضح ومباشر سيفهمه الجميع."
                : "Cette option est simple et claire que tout le monde comprendra."}
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Accordion allowToggle defaultIndex={[0]}>
              {FAQuestions.map((question) => {
                return (
                  <FAQItem
                    key={question.question.fr}
                    question={question.question?.[language]}
                    answer={question.answer?.[language]}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        color="#0fa239"
                        fill="none"
                      >
                        <path
                          d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 9.84615C10 8.82655 10.8954 8 12 8C13.1046 8 14 8.82655 14 9.84615C14 10.2137 13.8837 10.5561 13.6831 10.8438C13.0854 11.7012 12 12.5189 12 13.5385V14"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12 16.5H12.009"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    }
                  />
                );
              })}
            </Accordion>
            <Box mt={6} textAlign="center">
              <Text
                fontSize="lg"
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                mb={2}
              >
                {language === "en"
                  ? "Have more questions?"
                  : language === "ar"
                  ? "هل لديك المزيد من الأسئلة؟"
                  : "Vous avez d'autres questions ?"}
              </Text>
              <Link
                href="#contact"
                fontSize="lg"
                color="secondary"
                _dark={{
                  color: "secondary",
                }}
                fontWeight="medium"
                _hover={{
                  textDecoration: "none",
                }}
              >
                {language === "en"
                  ? "Write to us!"
                  : language === "ar"
                  ? "اكتب لنا!"
                  : "Écrivez-nous !"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default FaqV2;
