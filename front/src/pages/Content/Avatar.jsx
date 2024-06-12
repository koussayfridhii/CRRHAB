import { Avatar, Box, Flex, Text, VStack, keyframes } from "@chakra-ui/react";

export default function AvatarWithRipple({ language, data }) {
  const size = "120px";
  const color = "primary";

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex justifyContent="end" alignItems="center" h="70px" w="full">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <VStack textAlign={"center"} fontWeight="bold" mx={5}>
        <Text>{data?.directeur?.[language]}</Text>
        <Text>
          {language === "fr"
            ? "Directeur Général du CRRHAB"
            : language === "en"
            ? "General Director of CRRHAB"
            : "مدير عام CRHRAB"}
        </Text>
      </VStack>
      {/* <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: "relative",
          display: "block",
          width: "300%",
          height: "300%",
          boxSizing: "border-box",
          marginLeft: language === "ar" ? "0" : "-100%",
          marginRight: language === "ar" ? "-100%" : "0",
          marginTop: "-100%",
          borderRadius: "50%",
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
        mx={5}
      >
        <Avatar
          src={data?.directeur?.img}
          size="full"
          position="absolute"
          top={0}
        />
      </Box> */}
    </Flex>
  );
}
