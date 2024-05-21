import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link as ChakrLink,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FiSettings, FiMenu } from "react-icons/fi";
import { FaRegUser, FaImages, FaUserCheck, FaQuestion } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { BiStats } from "react-icons/bi";
import { CiTextAlignJustify } from "react-icons/ci";
import { GiTeamUpgrade, GiMaterialsScience } from "react-icons/gi";
import {
  MdOutlinePersonSearch,
  MdOutlineSupervisorAccount,
} from "react-icons/md";

import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
const LinkItems = [
  { name: "Research Team", icon: FaRegUser, href: "/admin/research_team" },
  { name: "Actualities", icon: FaRegNewspaper, href: "/admin/actualities" },
  { name: "Gallery", icon: FaImages, href: "/admin/gallery" },
  { name: "Stats", icon: BiStats, href: "/admin/stats" },
  {
    name: "Scientific Council",
    icon: MdOutlinePersonSearch,
    href: "/admin/scientific_council",
  },
  {
    name: "Heads of RDI Structures",
    icon: MdOutlineSupervisorAccount,
    href: "/admin/heads_of_rdi_structures",
  },
  {
    name: "Representatives of Researchers",
    icon: FaUserCheck,
    href: "/admin/representatives_of_researchers",
  },
  {
    name: "Representative of IRESA",
    icon: FaUserCheck,
    href: "/admin/representative_of_IRESA",
  },
  {
    name: "Representatives of agricultural research and higher education establishments",
    icon: FaUserCheck,
    href: "/admin/representatives_of_agricultural_research_and_higher_education_establishments",
  },
  {
    name: "Scientific personalities from the academic and scientific research world",
    icon: FaUserCheck,
    href: "/admin/scientific_personalities_from_the_academic_and_scientific_research_world",
  },
  {
    name: "Staff",
    icon: GiTeamUpgrade,
    href: "/admin/scientific_personalities_from_the_academic_and_scientific_research_world",
  },
  {
    name: "CV",
    icon: CiTextAlignJustify,
    href: "/admin/cvs",
  },
  {
    name: "Scientific Productions",
    icon: GiMaterialsScience,
    href: "/admin/scientific_productions",
  },
  {
    name: "Frequently Asked Questions",
    icon: FaQuestion,
    href: "/admin/frequently_asked_questions",
  },
  { name: "Settings", icon: FiSettings, href: "#" },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        bg="primary"
        color="white"
        w="15dvw"
        borderRight="4px"
        borderRightColor={useColorModeValue("secondary", "blue.700")}
        boxShadow="lg"
        overflowY="scroll"
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
        bg="green.500"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      {/* <Box ml={{ base: 0, md: 60 }} p="4" bg={"green.500"}>
        {children}
      </Box> */}
    </>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("background", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          CRRHAB Admin
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} href={link.href} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Flex justify={"center"} align={"center"} gap={5} my={5}>
        <Button
          bg={"red.500"}
          color={"white"}
          _hover={{ bg: "red.300" }}
          boxShadow={"lg"}
        >
          Logout
        </Button>
        <ThemeToggle />
      </Flex>
      {/* <Flex
        justify={"center"}
        align={"center"}
        pos={"absolute"}
        bottom={"10px"}
        left={"50%"}
        transform={"translateX(-50%)"}
      >
        <Button
          bg={"red.500"}
          color={"white"}
          _hover={{ bg: "red.300" }}
          boxShadow={"lg"}
        >
          Logout
        </Button>
      </Flex> */}
    </Box>
  );
};

const NavItem = ({ icon, href, children, ...rest }) => {
  return (
    <ChakrLink
      as={Link}
      to={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </ChakrLink>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
      w={"full"}
      bg="background"
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
