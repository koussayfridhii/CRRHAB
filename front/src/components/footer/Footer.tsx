import React from "react";
import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  Link,
  Text,
} from "@chakra-ui/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Box
      as="footer"
      bg="background"
      borderTop="1px solid"
      borderColor="primary"
      py="2.5rem"
      fontSize="sm"
    >
      <Box
        maxW="90vw"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid"
        borderColor="primary"
      >
        <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
          {pathname === "/" && (
            <Box mb={{ base: "1.5rem", lg: "0" }}>
              <Heading
                as="h5"
                color="primary"
                mb="0.5rem"
                fontSize="lg"
                fontWeight="600"
              >
                CRRHAB
              </Heading>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10868.21378614277!2d10.577437722228504!3d35.919090455524504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8976a1b8bb2b%3A0x84edc6b09bdae964!2sCentre%20R%C3%A9gional%20des%20Recherches%20en%20Horticulture%20et%20Agriculture%20Biologique!5e0!3m2!1sfr!2stn!4v1712419781465!5m2!1sfr!2stn"
                width={300}
                height={300}
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          )}
          <Box mb={{ base: "1.5rem", lg: "0" }}>
            {/* Heading for contact information */}
            <Heading
              as="h5"
              color="primary"
              mb="0.5rem"
              fontSize="lg"
              fontWeight="600"
            >
              Contact Information
            </Heading>
            {/* List to display contact details */}
            <List lineHeight="2" justifyContent="center">
              {/* Box to display Adresse */}
              <Box display="flex" gap={"10px"}>
                <Text fontSize="md" fontWeight="bold">
                  Adresse:
                </Text>
                {/* Updated Adresse */}
                <Text fontSize="md">
                  {" "}
                  B.P.57 - Chott Mariem 4042 Sousse-Tunisie
                </Text>
              </Box>
              {/* Box to display Téléphone */}
              <Box display="flex" gap={"10px"}>
                <Text fontSize="md" fontWeight="bold">
                  Téléphone:
                </Text>
                {/* Updated Téléphone */}
                <Text fontSize="md"> (+ 216) 73 327 543</Text>
              </Box>
              {/* Box to display Fax */}
              <Box display="flex" gap={"10px"}>
                <Text fontSize="md" fontWeight="bold">
                  Fax:
                </Text>
                {/* Updated Fax */}
                <Text fontSize="md">(+ 216) 73 327 070</Text>
              </Box>
              {/* Box to display Email */}
              <Box display="flex" gap={"10px"}>
                <Text fontSize="md" fontWeight="bold">
                  Email:
                </Text>
                {/* Updated Email */}
                <Text fontSize="md">crrhab@iresa.agrinet.tn</Text>
              </Box>
            </List>
          </Box>
          <Box mb={{ base: "1.5rem", lg: "0" }}>
            <Heading
              as="h5"
              color="primary"
              mb="0.5rem"
              fontSize="lg"
              fontWeight="600"
            >
              Horaires de travail
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Du lundi au Jeudi :
                </Text>
                <Text fontSize="md">
                  Session du matin : du 8 h 30 mn à 12 h 30 mn
                </Text>
                <Text fontSize="md">
                  L'après-midi: du 13 h 30 mn à 17h 30 mn
                </Text>
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Vendredi :
                </Text>
                <Text fontSize="md">Session du matin : du 8 h à 13 h</Text>
                <Text fontSize="md">
                  Session de L'apr ès-midi : du 14 h 30 mn à 17 h 30 mn
                </Text>
              </Box>
            </List>
          </Box>
          <Box mb={{ base: "1.5rem", lg: "0" }}>
            <Heading
              as="h5"
              color="primary"
              mb="0.5rem"
              fontSize="lg"
              fontWeight="600"
            >
              CRRHAB
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <LinkItem text="Careers" />
              <LinkItem text="News" />
              <LinkItem text="Policies" />
              <LinkItem text="Help" />
              <LinkItem text="Diversity & Belonging" />
            </List>
          </Box>
          <Box mb={{ base: "1.5rem", lg: "0" }}>
            <Flex justifyContent="start" mb="0.5rem" alignItems="baseline">
              <Link href="https://youtu.be/97pPWx9j9cI" mr="0.5rem">
                <YouTubeIcon style={{ color: "#FF0000" }} />
              </Link>
              <Link href="https://www.facebook.com/CRRHAB.RP" mr="0.5rem">
                <FacebookIcon style={{ color: "#0866FF" }} />
              </Link>
              <Link href="#" mr="0.5rem">
                <XIcon style={{ color: "#609bf2" }} />
              </Link>
            </Flex>
            <List lineHeight="2">
              <LinkItem text="Terms" />
              <LinkItem text="Privacy" />
              <LinkItem text="Site Map" />
            </List>
          </Box>
        </Flex>
      </Box>
      <Flex maxW="90vw" mx="auto" alignItems="center" px={10}>
        {/* <svg
          fill="text"
          style={{ width: "1.25rem", height: "1.25rem" }}
          viewBox="0 0 1000 1000"
          role="presentation"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
        </svg> */}
        <Text color="textSecondary" fontSize="xs" pl="0.5rem">
          &copy; 2024 CRRHAB, Inc. All rights reserved.
          <br />
          Made By ALIDHAFA
        </Text>
      </Flex>
    </Box>
  );
};

type LinkItemProps = {
  text?: string;
  isTag?: boolean;
  tagText?: string;
};

const LinkItem = ({ text, isTag = false, tagText }: LinkItemProps) => {
  return (
    <ListItem display="flex">
      <Link
        fontWeight="600"
        href="#"
        color="textSecondary"
        _hover={{ color: "secondary" }}
      >
        {text}
      </Link>
      {isTag && (
        <Text
          as="span"
          bg="primary"
          px="0.25rem"
          display="inline-flex"
          alignItems="center"
          color="text"
          height="1.25rem"
          borderRadius="0.25rem"
          ml="0.25rem"
          mt="0.25rem"
          fontSize="0.75rem"
        >
          {tagText}
        </Text>
      )}
    </ListItem>
  );
};

export default Footer;
