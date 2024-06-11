import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Container,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";

const UsefulLinks = ({ data, language, title = true }) => {
  return (
    <Box bg="background" w="100%" py={5}>
      <Box w={{ base: "full", xl: "90%" }} mx="auto" minH="250px">
        {title && (
          <Box textAlign="center">
            <Heading
              as="h2"
              size="lg"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="0.3px"
              position="relative"
              _after={{
                content: '""',
                height: "3px",
                background: "primary",
                width: "80px",
                position: "absolute",
                left: "0",
                right: "0",
                margin: "auto",
                top: "calc(100% + 10px)",
              }}
              _dark={{
                _after: {
                  background: "secondary",
                },
              }}
            >
              {language === "en"
                ? "Useful Links"
                : language === "fr"
                ? "Liens Utiles"
                : "روابط مفيدة"}
            </Heading>
          </Box>
        )}
        <SimpleGrid columns={{ base: 2, md: 3, xl: 5 }} spacing={20} mt={10}>
          {data.map((partner, index) => (
            <Box key={index} textAlign="center" spacing={10}>
              <Box
                boxSize={{ base: "50%", "2xl": "50%" }}
                className="grid-item"
                onClick={() => {
                  !title && window.open(partner.img, "_blank");
                }}
              >
                <Image
                  h="full"
                  mx={{ base: "50%", "2xl": "50%" }}
                  src={partner.img}
                  alt={partner.title.en}
                  borderRadius="md"
                  objectFit={"contain"}
                />
              </Box>
              {title && (
                <Link
                  textAlign={"center"} // Align link text to the center
                  w={"full"}
                  color="primary"
                  href={partner.link}
                  target="_blank"
                  display="block" // Ensure the link takes the full width
                  _dark={{ color: "secondary" }}
                  fontSize={"xs"}
                  mt={2}
                >
                  {partner.title?.[language]}
                </Link>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default UsefulLinks;
