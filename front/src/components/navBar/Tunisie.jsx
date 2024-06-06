// import { useColorMode } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
// import "./Navbar.scss";
// const Tunisie = () => {
//   const usedTheme = useSelector((state) => state.colorMode.theme);
//   const language = useSelector((state) => state.language.language);
//   const { colorMode } = useColorMode();
//   return (
//     <div
//       className="Ministere"
//       style={{
//         direction: `${language === "ar" ? "rtl" : "ltr"}`,
//         backgroundColor: usedTheme.colors.background,
//         borderBottom: `1px solid ${usedTheme.colors.primaryHover}`,
//       }}
//     >
//       <div className="logoFlex">
//         <div className="column">
//           <img className="TunisieLogo" src="/assets/images/tunisie.png" />
//           <span style={{ fontSize: usedTheme.fontSizes.sm }}>
//             {language === "fr" ? (
//               <>
//                 République Tunisienne <br />
//               </>
//             ) : language === "ar" ? (
//               <>
//                 الجمهورية التونسية <br />
//               </>
//             ) : (
//               <>
//                 Tunisian Republic <br />
//               </>
//             )}
//           </span>
//         </div>
//         <div className="column">
//           <a className="link" href="http://www.agriculture.tn/" target="_blank">
//             <img
//               className="TunisieLogo"
//               src="/assets/images/Logo_Ministère_de_l'Agriculture_(Tunisie).png"
//             />
//           </a>
//           <span style={{ fontSize: usedTheme.fontSizes.sm }}>
//             {language === "fr" ? (
//               <>
//                 Ministère de l’Agriculture, <br />
//                 des Ressources Hydrauliques <br />
//                 et de la Pêche
//               </>
//             ) : language === "ar" ? (
//               <>
//                 وزارة الــفــلاحــة <br />
//                 والموارد المائية
//                 <br />
//                 والصيد البحري
//               </>
//             ) : (
//               <>
//                 The Minister of Agriculture,
//                 <br />
//                 Hydraulic Resources
//                 <br />
//                 and fishing
//               </>
//             )}
//           </span>
//         </div>
//         <div className="column">
//           <a
//             className="link"
//             href={`http://iresa.agrinet.tn/index.php/${
//               language === "ar" ? "ar" : "fr"
//             }/`}
//             target="_blank"
//           >
//             <img
//               className="TunisieLogo"
//               src="/assets/images/logoIRESA_couleur_fr.png"
//             />
//           </a>
//           <span style={{ fontSize: usedTheme.fontSizes.sm }}>
//             {language === "fr" ? (
//               <>
//                 Institution de la Recherche <br />
//                 et de l'Enseignement Supérieur <br />
//                 Agricoles
//               </>
//             ) : language === "ar" ? (
//               <>
//                 مؤسسة البحث والتعليم <br />
//                 العالي الفلاحي
//               </>
//             ) : (
//               <>
//                 Institution of Agricultural <br />
//                 Research and Higher Education
//               </>
//             )}
//           </span>
//         </div>
//         {/* <span style={{ fontSize: usedTheme.fontSizes.sm }}>
//           {language === "fr" ? (
//             <>
//               République Tunisienne <br />
//               Ministère de l’Agriculture, <br />
//               des Ressources Hydrauliques <br />
//               et de la Pêche
//             </>
//           ) : language === "ar" ? (
//             <>
//               الجمهورية التونسية <br />
//               وزارة الــفــلاحــة <br />
//               والموارد المائية
//               <br />
//               والصيد البحري
//             </>
//           ) : (
//             <>
//               Tunisian Republic <br />
//               The Minister of Agriculture,
//               <br />
//               Hydraulic Resources
//               <br />
//               and fishing
//             </>
//           )}
//         </span> */}
//       </div>
//       <h1
//         style={{
//           color: `${
//             colorMode === "light"
//               ? usedTheme.colors.primary
//               : usedTheme.colors.secondary
//           }`,
//           fontSize: usedTheme.fontSizes?.xxxxl,
//         }}
//       >
//         {language === "fr" ? (
//           <>
//             Centre Régional des Recherches <br /> en Horticulture et Agriculture
//             Biologique
//           </>
//         ) : language === "en" ? (
//           <>
//             Regional Research Center
//             <br />
//             in Horticulture and Organic Agriculture
//           </>
//         ) : (
//           <>
//             المركز الجهوي للبحوث <br /> في البستنة و الفلاحة البيولوجية
//           </>
//         )}
//       </h1>
//       <div className="column">
//         <img
//           className="CRRHABLogo"
//           src="/assets/images/logoCRRHABWithName.jpg"
//         />
//         <span style={{ fontSize: usedTheme.fontSizes.sm }}>
//           {language === "fr" ? (
//             <>
//               Centre Régional des Recherches <br /> en Horticulture et
//               Agriculture Biologique
//             </>
//           ) : language === "en" ? (
//             <>
//               Regional Research Center
//               <br />
//               in Horticulture and Organic Agriculture
//             </>
//           ) : (
//             <>
//               المركز الجهوي للبحوث <br /> في البستنة و الفلاحة البيولوجية
//             </>
//           )}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Tunisie;

import { Box, Image, SimpleGrid, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Tunisie = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <SimpleGrid
      columns={1}
      w={"100%"}
      bg={"background"}
      dir={language === "ar" ? "rtl" : "ltr"}
      // h={"25vh"}
    >
      <SimpleGrid
        columns={1}
        gap={3}
        p={5}
        w={{ base: "full", "2xl": "80dvw" }}
        mx={"auto"}
        h={"fit-content"}
      >
        <SimpleGrid columns={4} gap={3}>
          <Box w="full">
            <Image
              boxSize="15vh"
              objectFit="contain"
              src="/assets/images/tunisie.png"
              fallbackSrc="https://via.placeholder.com/150"
              textAlign={"center"}
              mx={"auto"}
            />
          </Box>
          <Box w="full">
            <Image
              boxSize="15vh"
              objectFit="contain"
              src="/assets/images/Logo_Ministère_de_l'Agriculture_(Tunisie).png"
              fallbackSrc="https://via.placeholder.com/150"
              mx={"auto"}
            />
          </Box>
          <Box w="full">
            <Image
              boxSize="15vh"
              w={"25vh"}
              objectFit="contain"
              src="/assets/images/logoIRESA_couleur_fr.png"
              fallbackSrc="https://via.placeholder.com/150"
              mx={"auto"}
            />
          </Box>
          <Box w="full">
            <Image
              objectFit="contain"
              boxSize="15vh"
              w={"25vh"}
              src="/assets/images/crrhab.png"
              fallbackSrc="https://via.placeholder.com/150"
              mx={"auto"}
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          columns={4}
          gap={3}
          display={{ base: "none", xl: "grid" }}
          fontWeight={"bold"}
          fontSize={"sm"}
        >
          <Text textAlign={"center"}>
            {language === "fr" ? (
              <>
                République Tunisienne <br />
              </>
            ) : language === "ar" ? (
              <>
                الجمهورية التونسية <br />
              </>
            ) : (
              <>
                Tunisian Republic <br />
              </>
            )}
          </Text>
          <Text textAlign={"center"}>
            {language === "fr" ? (
              <>
                Ministère de l’Agriculture, <br />
                des Ressources Hydrauliques <br />
                et de la Pêche
              </>
            ) : language === "ar" ? (
              <>
                وزارة الــفــلاحــة <br />
                والموارد المائية
                <br />
                والصيد البحري
              </>
            ) : (
              <>
                The Minister of Agriculture,
                <br />
                Hydraulic Resources
                <br />
                and fishing
              </>
            )}
          </Text>
          <Text textAlign={"center"}>
            {language === "fr" ? (
              <>
                Institution de la Recherche <br />
                et de l'Enseignement <br />
                Supérieur Agricoles
              </>
            ) : language === "ar" ? (
              <>
                مؤسسة البحث والتعليم <br />
                العالي الفلاحي
              </>
            ) : (
              <>
                Institution of Agricultural <br />
                Research and Higher Education
              </>
            )}
          </Text>
          <Text textAlign={"center"}>
            {language === "fr" ? (
              <>
                Centre Régional des <br /> Recherches en Horticulture <br />
                et Agriculture Biologique
              </>
            ) : language === "en" ? (
              <>
                Regional Research Center
                <br />
                in Horticulture and Organic Agriculture
              </>
            ) : (
              <>
                المركز الجهوي للبحوث <br /> في البستنة و الفلاحة البيولوجية
              </>
            )}
          </Text>
        </SimpleGrid>
      </SimpleGrid>
      <chakra.h1
        fontSize={{ base: "xxl", xl: "xxxxl", "2xl": "5xl" }}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"primary"}
        my={10}
        borderTop={"2px"}
        borderColor={"primary"}
        _dark={{ color: "secondary", borderColor: "secondary" }}
        pt={10}
      >
        {language === "fr" ? (
          <>
            Centre Régional des Recherches en Horticulture et Agriculture
            Biologique
          </>
        ) : language === "en" ? (
          <>Regional Research Center in Horticulture and Organic Agriculture</>
        ) : (
          <>المركز الجهوي للبحوث في البستنة و الفلاحة البيولوجية</>
        )}
      </chakra.h1>
    </SimpleGrid>
  );
};

export default Tunisie;
