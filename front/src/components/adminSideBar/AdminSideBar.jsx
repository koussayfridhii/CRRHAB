import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
import {
  FaRegUser,
  FaBook,
  FaImages,
  FaUserCheck,
  FaQuestion,
} from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineEvent } from "react-icons/md";
import { GiTeamUpgrade, GiMaterialsScience } from "react-icons/gi";
import {
  MdOutlinePersonSearch,
  MdOutlineSupervisorAccount,
} from "react-icons/md";

import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import { logout } from "../../redux/userSlice";
import axios from "axios";
const LinkItems = [
  {
    name: "Équipe de Recherche",
    icon: FaRegUser,
    href: "/admin/research_team",
  },
  {
    name: "Membres du Laboratoire",
    icon: FaRegUser,
    href: "/admin/laboratory_members",
  },
  {
    name: "Formations Diplômante",
    icon: FaBook,
    href: "/admin/diploma_course",
  },
  {
    name: "Conseil Scientifique",
    icon: MdOutlinePersonSearch,
    href: "/admin/scientific_council",
  },
  {
    name: "Productions Scientifiques",
    icon: GiMaterialsScience,
    href: "/admin/scientific_productions",
  },
  {
    name: "Projets Nationaux",
    icon: GiMaterialsScience,
    href: "/admin/national_projects",
  },
  { name: "Actualités", icon: FaRegNewspaper, href: "/admin/actualities" },
  { name: "Événements", icon: MdOutlineEvent, href: "/admin/events" },
  { name: "Galerie", icon: FaImages, href: "/admin/gallery" },
  { name: "Vidéo", icon: CiVideoOn, href: "/admin/videos" },
  {
    name: "Paragraphe Page d'Accueil",
    icon: MdOutlinePersonSearch,
    href: "/admin/paragraphs",
  },
  {
    name: "Utilisateurs",
    icon: FaRegUser,
    href: "/admin/users",
  },
  { name: "Paramètres", icon: FiSettings, href: "/profile" },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pingOnBack = async () => {
    const { data } = await axios.get("https://crrhab-3ofe.vercel.app/");
  };
  useEffect(() => {
    pingOnBack();
  }, []);
  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", xl: "block" }}
        bg="primary"
        _dark={{ bg: "secondary" }}
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
      <MobileNav display={{ base: "flex", xl: "none" }} onOpen={onOpen} />
      {/* <Box ml={{ base: 0, xl: 60 }} p="4" bg={"green.500"}>
        {children}
      </Box> */}
    </>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const dispatch = useDispatch();
  return (
    <Box
      bg={useColorModeValue("background", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", xl: 60 }}
      pos="fixed"
      h="full"
      {...rest}
      overflowY="scroll"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          CRRHAB Admin
        </Text>
        <CloseButton display={{ base: "flex", xl: "none" }} onClick={onClose} />
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
          onClick={() => dispatch(logout())}
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
      ml={{ base: 0, xl: 60 }}
      px={{ base: 4, xl: 24 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
      w={"full"}
      bg="primary"
      _dark={{ bg: "secondary" }}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        CRRHAB Admin
      </Text>
    </Flex>
  );
};
