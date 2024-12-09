import { Box, Text, Link, VStack } from "@chakra-ui/react";

const AccessInfoPage = () => {
  return (
    <Box p={5} bg="background" w="full">
      <VStack align="start" spacing={4}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="primary"
          _dark={{ color: "secondary" }}
          mx="auto"
        >
          RÉFÉRENCES LÉGISLATIVES ET RÉGLEMENTAIRES CONCERNANT L’ACCÈS À
          L’INFORMATION
        </Text>
        <Link
          href="./assets/openData/Loi_2016_22_fr.pdf"
          target="_blank"
          color="primary"
          _dark={{ color: "secondary" }}
          _hover={{ textDecoration: "none" }}
        >
          • Loi organique n° 2016-22 du 24 mars 2016, relative à l’accès à
          l’information
        </Link>
        <Link
          href="./assets/openData/Circulaire_PM_19-2018_ar.pdf"
          target="_blank"
          color="primary"
          _dark={{ color: "secondary" }}
          _hover={{ textDecoration: "none" }}
        >
          • Circulaire du Chef du Gouvernement n° 2018-19 en date du 18 mai
          2018, relative à l’accès à l’information
        </Link>

        <Text
          fontSize="lg"
          fontWeight="bold"
          color="primary"
          _dark={{ color: "secondary" }}
        >
          Personnes Chargés de l’accès à l’information :
        </Text>

        <Text>1)- M. Hammadi Harhouri</Text>
        <Text>
          <strong>Contact :</strong> E-mail :{" "}
          <Link href="mailto:hammadi.harhouri@iresa.agrinet.tn">
            hammadi.harhouri@iresa.agrinet.tn
          </Link>{" "}
          – Tél : 70 137704 – Fax : 70 137701
        </Text>

        <Text>2)- Mme. Besma Werfelli</Text>
        <Text>
          <strong>Contact :</strong> E-mail :{" "}
          <Link href="mailto:besmawerfelli@yahoo.fr">
            besmawerfelli@yahoo.fr
          </Link>{" "}
          – Tél : 70 137719 – Fax : 70 137701
        </Text>

        <Text
          fontSize="lg"
          fontWeight="bold"
          color="primary"
          _dark={{ color: "secondary" }}
        >
          DOCUMENTS POUR L’ACCÈS À L’INFORMATION :
        </Text>

        <Link
          href="./assets/openData/manuel acces information.pdf"
          target="_blank"
          color="primary"
          _dark={{ color: "secondary" }}
          _hover={{ textDecoration: "none" }}
        >
          • Manuel des procédures du Ministère (disponible en version arabe)
        </Link>
        <Link
          href="./assets/openData/Demande_acces_information_ar.pdf"
          target="_blank"
          color="primary"
          _dark={{ color: "secondary" }}
          _hover={{ textDecoration: "none" }}
        >
          • Formulaire d’une demande d’accès à l’information (disponible en
          version arabe)
        </Link>
        <Link
          href="./assets/openData/Recours_gracieux_ar.pdf"
          target="_blank"
          color="primary"
          _dark={{ color: "secondary" }}
          _hover={{ textDecoration: "none" }}
        >
          • Formulaire de recours gracieux (disponible en version arabe)
        </Link>
      </VStack>
    </Box>
  );
};

export default AccessInfoPage;
