// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   Link as ChakraLink,
//   Box,
//   Flex,
//   Text,
//   Button,
//   Stack,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem as ChakraMenuItem,
// } from "@chakra-ui/react";
// import { useDispatch } from "react-redux";
// import { sizeDownReducer, sizeUpReducer } from "../../redux/colorModeSlice";
// import { logout } from "../../redux/userSlice";
// import { languageReducer } from "../../redux/languageSlice";
// import ZoomInIcon from "@mui/icons-material/ZoomIn";
// import ZoomOutIcon from "@mui/icons-material/ZoomOut";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
// import LogoutIcon from "@mui/icons-material/Logout";
// import Logo from "./Logo";
// import ThemeToggle from "../ThemeToggle";
// import Tunisie from "./Tunisie";
// import "./Navbar.scss";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen((prev) => !prev);
//   const menus = [
//     {
//       fr: {
//         title: "accueil",
//       },
//       ar: {
//         title: "accueil ar",
//       },
//       en: {
//         title: "Home",
//       },
//       path: "/",
//     },
//     {
//       fr: {
//         title: "chat",
//       },
//       ar: {
//         title: "chat ar",
//       },
//       en: {
//         title: "chat",
//       },
//       path: "/chat",
//     },
//   ];
//   return (
//     <>
//       <Tunisie />
//     </>
//   );
// };

// export default NavBar;

// // const CloseIcon = () => (
// //   <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
// //     <title>Close</title>
// //     <path
// //       fill="white"
// //       d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
// //     />
// //   </svg>
// // );

// // const MenuIcon = () => (
// //   <svg
// //     width="24px"
// //     viewBox="0 0 20 20"
// //     xmlns="http://www.w3.org/2000/svg"
// //     fill="white"
// //   >
// //     <title>Menu</title>
// //     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
// //   </svg>
// // );

// // const MenuToggle = ({ toggle, isOpen }) => {
// //   return (
// //     <Box
// //       color={"text"}
// //       display={{ base: "block", md: "none" }}
// //       onClick={toggle}
// //     >
// //       {isOpen ? <CloseIcon /> : <MenuIcon />}
// //     </Box>
// //   );
// // };

// // const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
// //   return (
// //     <ChakraLink as={Link} to={to}>
// //       <Text display="block" color="text">
// //         {children}
// //       </Text>
// //     </ChakraLink>
// //   );
// // };

// // const MenuLinks = ({ isOpen, menus }) => {
// //   const language = useSelector((state) => state.language.language);
// //   const user = useSelector((state) => state.user.user);
// //   let languages = ["ar", "fr", "en"].filter((lan) => lan !== language);
// //   const dispatch = useDispatch();
// //   return (
// //     <Box
// //       display={{ base: isOpen ? "block" : "none", md: "block" }}
// //       flexBasis={{ base: "100%", md: "auto" }}
// //     >
// //       <Stack
// //         spacing={8}
// //         align="center"
// //         justify={["center", "space-between", "flex-end", "flex-end"]}
// //         direction={["column", "row", "row", "row"]}
// //         pt={[4, 4, 0, 0]}
// //       >
// //         {menus.map((menu) => {
// //           let title;
// //           if (language === "ar") {
// //             title = menu.ar.title;
// //           } else if (language === "fr") {
// //             title = menu.fr.title;
// //           } else {
// //             title = menu.en.title;
// //           }
// //           return (
// //             <MenuItem key={menu.path} to={menu.path}>
// //               {title}{" "}
// //             </MenuItem>
// //           );
// //         })}
// //         {user ? (
// //           <MenuItem to="/login">
// //             <Button
// //               size="sm"
// //               rounded="md"
// //               color="text"
// //               bg="red.600"
// //               _hover={{
// //                 bg: "red.500",
// //               }}
// //               rightIcon={<LogoutIcon />}
// //               onClick={() => {
// //                 dispatch(logout());
// //               }}
// //             >
// //               Logout
// //             </Button>
// //           </MenuItem>
// //         ) : (
// //           <MenuItem to="/login" isLast>
// //             <Button
// //               size="sm"
// //               rounded="md"
// //               color="text"
// //               bg="primary"
// //               _hover={{
// //                 bg: "primary",
// //               }}
// //             >
// //               Login
// //             </Button>
// //           </MenuItem>
// //         )}
// //         <ThemeToggle />
// //         <Menu>
// //           <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
// //             {language}
// //           </MenuButton>
// //           <MenuList>
// //             {languages.map((lan) => (
// //               <ChakraMenuItem
// //                 onClick={() => dispatch(languageReducer(lan))}
// //                 key={lan}
// //               >
// //                 {lan}
// //               </ChakraMenuItem>
// //             ))}
// //           </MenuList>
// //           <Box display="flex" gap="1">
// //             <Button onClick={() => dispatch(sizeUpReducer())}>
// //               <ZoomInIcon />
// //             </Button>
// //             <Button>
// //               <ZoomOutIcon onClick={() => dispatch(sizeDownReducer())} />
// //             </Button>
// //           </Box>
// //         </Menu>
// //       </Stack>
// //     </Box>
// //   );
// // };

// // const NavBarContainer = ({ children }) => {
// //   return (
// //     <Flex
// //       as="nav"
// //       align="center"
// //       justify="space-between"
// //       wrap="wrap"
// //       w="100%"
// //       mb={8}
// //       p={8}
// //       bg="background"
// //       color="text"
// //     >
// //       {children}
// //     </Flex>
// //   );
// // };

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Link as ChakraLink,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Tunisie from "./Tunisie";
import "./Navbar.scss";
import { sizeDownReducer, sizeUpReducer } from "../../redux/colorModeSlice";
import { logout } from "../../redux/userSlice";
import { languageReducer } from "../../redux/languageSlice";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
const languages = ["fr", "ar", "en"];
export default function WithSubnavigation() {
  const language = useSelector((state) => state.language.language);
  const usedTheme = useSelector((state) => state.colorMode.theme);
  const { isOpen, onToggle } = useDisclosure();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <>
      <Tunisie />
      <Box>
        <Flex
          bg={"background"}
          color={"text"}
          minH={"8vh"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={2}
          borderStyle={"solid"}
          borderColor="primary"
          align={"center"}
          style={{ direction: `${language === "ar" ? "rtl" : "ltr"}` }}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            align={"center"}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{
              base: "center",
              md: "start",
            }}
            gap={"1rem"}
          >
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <FormControl id="search">
              <InputGroup borderColor="secondary">
                <InputLeftElement pointerEvents="none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    color={usedTheme.colors.primary}
                    fill={"none"}
                  >
                    <path
                      d="M17.5 17.5L22 22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </InputLeftElement>
                <Input
                  type="text"
                  size="xl"
                  w={"10vw"}
                  minW={"15rem"}
                  _placeholder={"Search"}
                />
              </InputGroup>
            </FormControl>
            <Box display={{ base: "none", md: "block" }}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Button
                    as="a"
                    p={2}
                    fontSize={"lg"}
                    color={"text"}
                    _hover={{
                      textDecoration: "none",
                      color: "white",
                      bg: "primary",
                    }}
                    align="center"
                    cursor={"pointer"}
                  >
                    {language === "fr"
                      ? "Français"
                      : language === "en"
                      ? "English"
                      : "العربية"}
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={"white"}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {languages
                      .filter((e) => e !== language)
                      .map((lan) => (
                        <Box
                          as="a"
                          role={"group"}
                          display={"block"}
                          p={2}
                          rounded={"md"}
                          _hover={{ color: "secondary" }}
                          onClick={() => dispatch(languageReducer(lan))}
                          cursor={"pointer"}
                        >
                          <Stack direction={"row"} align={"center"}>
                            <Box>
                              <Text
                                transition={"all .3s ease"}
                                _groupHover={{ color: "secondary" }}
                                fontWeight={500}
                                cursor={"pointer"}
                              >
                                {lan === "fr"
                                  ? "Français"
                                  : lan === "en"
                                  ? "English"
                                  : "العربية"}
                              </Text>
                              <Text fontSize={"sm"}>{lan}</Text>
                            </Box>
                            <Flex
                              transition={"all .3s ease"}
                              transform={"translateX(-10px)"}
                              opacity={0}
                              _groupHover={{
                                opacity: "100%",
                                transform: "translateX(0)",
                              }}
                              justify={"flex-end"}
                              align={"center"}
                              flex={1}
                            >
                              <Icon
                                color={"secondary"}
                                w={5}
                                h={5}
                                as={ChevronRightIcon}
                              />
                            </Flex>
                          </Stack>
                        </Box>
                      ))}
                  </Stack>
                </PopoverContent>
              </Popover>
            </Box>
            {user ? (
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"red.500"}
                _hover={{
                  bg: "red.400",
                }}
                onClick={() => dispatch(logout())}
              >
                {language === "fr"
                  ? "déconnection"
                  : language === "en"
                  ? "LogOut"
                  : "خروج"}
              </Button>
            ) : (
              <>
                <ChakraLink as={Link} to="/login">
                  <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"primary"}
                    _hover={{
                      bg: "primaryHover",
                    }}
                  >
                    {language === "fr"
                      ? "Connection"
                      : language === "en"
                      ? "LogIn"
                      : "دخول"}
                  </Button>
                </ChakraLink>
              </>
            )}
            <Box display={{ base: "none", md: "flex" }} gap="1">
              <Button onClick={() => dispatch(sizeUpReducer())}>
                <ZoomInIcon />
              </Button>
              <Button>
                <ZoomOutIcon onClick={() => dispatch(sizeDownReducer())} />
              </Button>
            </Box>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("text", "gray.200");
  const linkHoverColor = useColorModeValue("secondary", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const language = useSelector((state) => state.language.language);
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.children?.[0]?.href || navItem.href}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label[language]}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                fontSize={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.href} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  const language = useSelector((state) => state.language.language);
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ color: "secondary" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "secondary" }}
            fontWeight={500}
          >
            {label[language]}
          </Text>
          <Text fontSize={"sm"}>{subLabel[language]}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"secondary"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const user = useSelector((state) => state.user.user);
  return (
    <Stack bg={"background"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.children?.[0]?.href || navItem.href}
          {...navItem}
        />
      ))}
      <Box>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Button
              as="a"
              p={2}
              fontSize={"lg"}
              color={"text"}
              _hover={{
                textDecoration: "none",
                color: "white",
                bg: "primary",
              }}
              align="center"
              cursor={"pointer"}
            >
              {language === "fr"
                ? "Français"
                : language === "en"
                ? "English"
                : "العربية"}
            </Button>
          </PopoverTrigger>

          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={"white"}
            p={4}
            rounded={"xl"}
            minW={"sm"}
            fontSize={"small"}
          >
            <Stack>
              {languages
                .filter((e) => e !== language)
                .map((lan) => (
                  <Box
                    as="a"
                    role={"group"}
                    display={"block"}
                    p={2}
                    rounded={"md"}
                    _hover={{ color: "secondary" }}
                    onClick={() => dispatch(languageReducer(lan))}
                    cursor={"pointer"}
                  >
                    <Stack direction={"row"} align={"center"}>
                      <Box>
                        <Text
                          transition={"all .3s ease"}
                          _groupHover={{ color: "secondary" }}
                          fontWeight={500}
                          cursor={"pointer"}
                        >
                          {lan === "fr"
                            ? "Français"
                            : lan === "en"
                            ? "English"
                            : "العربية"}
                        </Text>
                        <Text fontSize={"sm"}>{lan}</Text>
                      </Box>
                      <Flex
                        transition={"all .3s ease"}
                        transform={"translateX(-10px)"}
                        opacity={0}
                        _groupHover={{
                          opacity: "100%",
                          transform: "translateX(0)",
                        }}
                        justify={"flex-end"}
                        align={"center"}
                        flex={1}
                      >
                        <Icon
                          color={"secondary"}
                          w={5}
                          h={5}
                          as={ChevronRightIcon}
                        />
                      </Flex>
                    </Stack>
                  </Box>
                ))}
            </Stack>
          </PopoverContent>
        </Popover>
      </Box>
      {user ? (
        <Button
          display={{ base: "inline-flex", md: "none" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"red.500"}
          _hover={{
            bg: "red.400",
          }}
          onClick={() => dispatch(logout())}
        >
          {language === "fr"
            ? "déconnection"
            : language === "en"
            ? "LogOut"
            : "خروج"}
        </Button>
      ) : (
        <>
          <ChakraLink as={Link} to="/login">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"primary"}
              _hover={{
                bg: "primaryHover",
              }}
            >
              {language === "fr"
                ? "Connection"
                : language === "en"
                ? "LogIn"
                : "دخول"}
            </Button>
          </ChakraLink>
        </>
      )}
      <Box display={{ base: "flex", md: "none" }} gap="1">
        <Button onClick={() => dispatch(sizeUpReducer())}>
          <ZoomInIcon />
        </Button>
        <Button>
          <ZoomOutIcon onClick={() => dispatch(sizeDownReducer())} />
        </Button>
      </Box>
    </Stack>
  );
};
const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const language = useSelector((state) => state.language.language);
  return (
    <Stack spacing={4} onClick={children && onToggle} fontSize={"sm"}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"text"}>
          {label[language]}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"text"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as={Link} key={child.href} py={2} to={child.href}>
                {child.label[language]}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
const NAV_ITEMS = [
  {
    label: { fr: "Accueil", en: "Home", ar: "الاستقبال" },
    href: "/",
  },
  {
    label: { fr: "Présentation", en: "Presentation", ar: "تقديم المؤسسة" },
    children: [
      {
        label: { fr: "Carte", en: "Map", ar: "الخريطة" },
        subLabel: { fr: "Carte", en: "Map", ar: "خريطة مراكز البحث" },
        href: "/login",
      },
      {
        label: { fr: "Historique", en: "History", ar: "تاريخ المؤسسة" },
        subLabel: { fr: "Historique", en: "History", ar: "تاريخ المؤسسة" },
        href: "/signup",
      },
      {
        label: { fr: "Missions", en: "Missions", ar: "مهام المؤسسة" },
        subLabel: { fr: "Missions", en: "Missions", ar: "مهام المؤسسة" },
        href: "/signup",
      },
      {
        label: {
          fr: "Organisation Scientifique du Centre",
          en: "Scientific Organization of the Center",
          ar: "التنظيم العلمي للمركز",
        },
        subLabel: {
          fr: "Organisation Scientifique du Centre",
          en: "Scientific Organization of the Center",
          ar: "التنظيم العلمي للمركز",
        },
        href: "/signup",
      },
      {
        label: {
          fr: "Personnels",
          en: "Team",
          ar: "الفريق",
        },
        subLabel: {
          fr: "Personnels",
          en: "Team",
          ar: "الفريق",
        },
        href: "/signup",
      },
    ],
  },
  {
    label: { fr: "Actualité", en: "News", ar: "المستجدات" },
    href: "/",
  },
  {
    label: {
      fr: "Structures de Recherche",
      en: "Research Structures",
      ar: "هياكل البحث",
    },
    children: [
      {
        label: {
          fr: "Equipe de Recherche",
          en: "Research Team",
          ar: "فريق البحث",
        },
        subLabel: {
          fr: "Equipe de Recherche",
          en: "Research Team",
          ar: "فريق البحث",
        },
        href: "/signup",
      },
      {
        label: {
          fr: "Thématiques de Recherches",
          en: "Research  Topics",
          ar: "فريق البحث",
        },
        subLabel: {
          fr: "Thématiques de Recherches",
          en: "Research Topics",
          ar: "فريق البحث",
        },
        href: "/signup",
      },
      {
        label: {
          fr: "Productions Scientifiques",
          en: "Scientific Productions",
          ar: "الانتاجات العلمية",
        },
        subLabel: {
          fr: "Productions Scientifiques",
          en: "Scientific Productions",
          ar: "الانتاجات العلمية",
        },
        href: "/signup",
      },
      {
        label: {
          fr: "Formation Diplômante",
          en: "Training Qualification",
          ar: "تدريب مؤهل",
        },
        subLabel: {
          fr: "Formation Diplômante",
          en: "Training Qualification",
          ar: "تدريب مؤهل",
        },
        href: "/signup",
      },
      {
        label: {
          fr: "Projets de Recherche",
          en: "Research Projects",
          ar: "مشاريع البحث",
        },
        subLabel: {
          fr: "Projets de Recherche",
          en: "Research Projects",
          ar: "مشاريع البحث",
        },
        href: "/signup",
      },
      {
        label: {
          fr: "Collaboration Nationale et Internationale",
          en: "National and International Collaboration",
          ar: "تعاون وطني ودولي ",
        },
        subLabel: {
          fr: "Collaboration Nationale et Internationale",
          en: "National and International Collaboration",
          ar: "تعاون وطني ودولي ",
        },
        href: "/signup",
      },
    ],
  },
  {
    label: {
      fr: "Unités Spécialisées",
      en: "Specialized Units",
      ar: "فرق مختصة",
    },
    href: "/",
  },
  {
    label: { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
    href: "/",
  },
];
