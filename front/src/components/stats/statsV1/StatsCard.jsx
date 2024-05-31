import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

export default function StatsCard({ title, stat, icon }) {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("primary", "green.700")}
      rounded={"lg"}
      _dark={{
        borderColor: "secondary",
      }}
      bg={"background"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 0, md: 4 }}>
          <StatLabel
            fontWeight={"lighter"}
            isTruncated
            fontSize={{ base: "xl", xl: "xxxl" }}
            color={"textSecondary"}
            _dark={{
              color: "secondary",
            }}
          >
            {title}
          </StatLabel>
          <StatNumber
            color={"text"}
            _dark={{
              color: "white",
            }}
            fontSize={"2xl"}
            fontWeight={"bold"}
          >
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("primary", "gray.200")}
          _dark={{ color: "secondary" }}
          fontSize={{ base: "xxxxl", xl: "5xl" }}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}
