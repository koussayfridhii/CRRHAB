import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Link as ChakraLink,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem as ChakraMenuItem,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { languageReducer } from "../../languageSlice";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "./Logo";
import ThemeToggle from "../ThemeToggle";
import { sizeDownReducer, sizeUpReducer } from "../../colorModeSlice";
import { logout } from "../../userSlice";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const menus = [
    {
      fr: {
        title: "accueil",
      },
      ar: {
        title: "accueil ar",
      },
      en: {
        title: "Home",
      },
      path: "/",
    },
    {
      fr: {
        title: "chat",
      },
      ar: {
        title: "chat ar",
      },
      en: {
        title: "chat",
      },
      path: "/chat",
    },
  ];
  return (
    <NavBarContainer>
      <Logo w="100px" color="text" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} menus={menus} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <ChakraLink as={Link} to={to}>
      <Text display="block" color="text">
        {children}
      </Text>
    </ChakraLink>
  );
};

const MenuLinks = ({ isOpen, menus }) => {
  const language = useSelector((state) => state.language.language);
  const user = useSelector((state) => state.user.user);
  let languages = ["ar", "fr", "en"].filter((lan) => lan !== language);
  const dispatch = useDispatch();
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {menus.map((menu) => {
          let title;
          if (language === "ar") {
            title = menu.ar.title;
          } else if (language === "fr") {
            title = menu.fr.title;
          } else {
            title = menu.en.title;
          }
          return (
            <MenuItem key={menu.path} to={menu.path}>
              {title}{" "}
            </MenuItem>
          );
        })}
        {user ? (
          <MenuItem to="/login">
            <Button
              size="sm"
              rounded="md"
              color="text"
              bg="red.600"
              _hover={{
                bg: "red.500",
              }}
              rightIcon={<LogoutIcon />}
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </Button>
          </MenuItem>
        ) : (
          <MenuItem to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color="text"
              bg="primary"
              _hover={{
                bg: "primary",
              }}
            >
              Create Account
            </Button>
          </MenuItem>
        )}
        <ThemeToggle />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {language}
          </MenuButton>
          <MenuList>
            {languages.map((lan) => (
              <ChakraMenuItem
                onClick={() => dispatch(languageReducer(lan))}
                key={lan}
              >
                {lan}
              </ChakraMenuItem>
            ))}
          </MenuList>
          <Box display="flex" gap="1">
            <Button onClick={() => dispatch(sizeUpReducer())}>
              <ZoomInIcon />
            </Button>
            <Button>
              <ZoomOutIcon onClick={() => dispatch(sizeDownReducer())} />
            </Button>
          </Box>
        </Menu>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="background"
      color="text"
    >
      {children}
    </Flex>
  );
};

export default NavBar;
