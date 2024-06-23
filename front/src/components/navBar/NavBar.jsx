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
import { sizeDownReducer, sizeUpReducer } from "../../redux/colorModeSlice";
import { logout } from "../../redux/userSlice";
import { languageReducer } from "../../redux/languageSlice";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ThemeToggle from "../ThemeToggle";
import { useEffect } from "react";
import axios from "axios";
const languages = ["fr", "ar", "en"];
export default function WithSubnavigation() {
  const language = useSelector((state) => state.language.language);
  const usedTheme = useSelector((state) => state.colorMode.theme);
  const { isOpen, onToggle } = useDisclosure();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const pingOnBack = async () => {
    const { data } = await axios.get("https://crrhab-3ofe.vercel.app/");
  };
  useEffect(() => {
    pingOnBack();
  }, []);
  return (
    <>
      <Tunisie />
      <Box
        position="sticky"
        top="0"
        zIndex="300"
        w="100%"
        bg="red.500"
        color="text"
        shadow={"lg"}
        style={{ direction: `${language === "ar" ? "rtl" : "ltr"}` }}
      >
        <Flex
          bg={"primary"}
          _dark={{
            bg: "secondary",
            borderColor: "primary",
          }}
          color={"white"}
          minH={"8vh"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={4}
          borderStyle={"solid"}
          borderColor="secondary"
          align={"center"}
          style={{ direction: `${language === "ar" ? "rtl" : "ltr"}` }}
        >
          <Flex
            flex={{ base: 1, xl: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", xl: "none" }}
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
              xl: "start",
            }}
            gap={"1rem"}
          >
            <Flex
              display={{ base: "none", xl: "flex" }}
              ml={{ base: 10, xl: 0, "2xl": 10 }}
            >
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, xl: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={{ base: 6, xl: 2 }}
          >
            {/* <FormControl
              id="search"
              display={{ base: "15rem", xl: "2rem", "2xl": "15rem" }}
            >
              <InputGroup
                borderColor="secondary"
                bg={"background"}
                borderRadius={"lg"}
              >
                <InputLeftElement pointerEvents="none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    color={usedTheme.colors.text}
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
                  w={"100%"}
                  _placeholder={"Search ..."}
                  color={"text"}
                />
              </InputGroup>
            </FormControl> */}
            <Box display={{ base: "none", xl: "block" }} bg={"primary"}>
              <Popover
                trigger={"hover"}
                placement={"bottom-start"}
                bg={"primary"}
              >
                <PopoverTrigger>
                  <Button
                    as="a"
                    p={2}
                    fontSize={"sm"}
                    color={"white"}
                    _hover={{
                      textDecoration: "none",
                      color: "text",
                      bg: "primary",
                    }}
                    align="center"
                    cursor={"pointer"}
                    bg={"primary"}
                    _dark={{
                      bg: "secondary",
                    }}
                  >
                    {language}
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  p={4}
                  rounded={"xl"}
                  w={"xs"}
                  bg={"primary"}
                  _dark={{
                    bg: "secondary",
                  }}
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
                          _hover={{ color: "white" }}
                          onClick={() => dispatch(languageReducer(lan))}
                          cursor={"pointer"}
                          key={lan}
                        >
                          <Stack direction={"row"} align={"center"}>
                            <Box>
                              <Text
                                transition={"all .3s ease"}
                                _groupHover={{ color: "whiteHover" }}
                                fontWeight={500}
                                cursor={"pointer"}
                              >
                                {lan}
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
                                color={"whiteHover"}
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
            {/* {user ? (
              <Button
                display={{ base: "none", xl: "inline-flex" }}
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
                    display={{ base: "none", xl: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"primary"}
                    _dark={{
                      bg: "secondary",
                    }}
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
            )} */}
            <Box display={{ base: "none", xl: "flex" }} gap="1">
              <ThemeToggle />
              <Button p={0} onClick={() => dispatch(sizeUpReducer())}>
                <ZoomInIcon />
              </Button>
              <Button p={0} onClick={() => dispatch(sizeDownReducer())}>
                <ZoomOutIcon />
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
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("whiteHover", "white");
  const popoverContentBgColor = useColorModeValue("primary", "gray.800");
  const language = useSelector((state) => state.language.language);
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.children?.[0]?.href || navItem.href}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={Link}
                // display={"inline-block"}
                p={2}
                to={navItem.href ?? "#"}
                fontSize={{ base: "sm", xl: "ls", "2xl": "sm" }}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                whiteSpace="nowrap"
                textTransform="capitalize"
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

const DesktopSubNav = ({ label, href }) => {
  const language = useSelector((state) => state.language.language);
  return (
    <Box
      as={href.startsWith("#") ? "a" : Link}
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ color: "whiteHover" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "whiteHover" }}
            fontWeight={500}
          >
            {label[language]}
          </Text>
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
          <Icon color={"whiteHover"} w={5} h={5} as={ChevronRightIcon} />
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
    <Stack
      bg={"primary"}
      _dark={{ bg: "secondary" }}
      borderBottom={4}
      borderStyle={"solid"}
      borderColor="secondary"
      p={4}
      display={{ xl: "none" }}
    >
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
              fontSize={"sm"}
              color={"white"}
              bg={"primary"}
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
                    key={lan}
                    color="textHover"
                  >
                    <Stack direction={"row"} align={"center"}>
                      <Box>
                        <Text
                          transition={"all .3s ease"}
                          _groupHover={{ color: "secondary" }}
                          fontWeight={500}
                          cursor={"pointer"}
                          color="textHover"
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
          display={{ base: "inline-flex", xl: "none" }}
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
              display={{ base: "inline-flex", xl: "none" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"primary"}
              mb={4}
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
      <Box display={{ base: "flex", xl: "none" }} gap="1">
        <ThemeToggle />
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
        as={Link}
        to={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"white"}>
          {label[language]}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
            color="white"
          />
        )}
      </Box>

      <Collapse
        color="white"
        in={isOpen}
        animateOpacity
        style={{ marginTop: "0!important" }}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"white"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                as={Link}
                key={child.href}
                py={2}
                to={child.href}
                color="white"
              >
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
    label: { fr: "Actualités", en: "News", ar: "المستجدات" },
    children: [
      {
        label: { fr: "Actualités", en: "News", ar: "المستجدات" },
        href: "/actualities",
      },
      {
        label: { fr: "évènements", en: "Events", ar: "الأحداث" },
        href: "/events",
      },
    ],
  },
  {
    label: {
      fr: "Organisation Scientifique",
      en: "Scientific Organization",
      ar: "التنظيم العلمي",
    },
    href: "/scientific_organization",
    // children: [
    //   {
    //     label: { fr: "Carte", en: "Map", ar: "الخريطة" },
    //     subLabel: { fr: "Carte", en: "Map", ar: "خريطة مراكز البحث" },
    //     href: "/presentation/map",
    //   },
    //   {
    //     label: { fr: "Historique", en: "History", ar: "تاريخ المؤسسة" },
    //     subLabel: { fr: "Historique", en: "History", ar: "تاريخ المؤسسة" },
    //     href: "/presentation/history",
    //   },
    //   {
    //     label: { fr: "Missions", en: "Missions", ar: "مهام المؤسسة" },
    //     subLabel: { fr: "Missions", en: "Missions", ar: "مهام المؤسسة" },
    //     href: "/presentation/missions",
    //   },
    //   {
    //     label: {
    //       fr: "Organisation Scientifique du Centre",
    //       en: "Scientific Organization of the Center",
    //       ar: "التنظيم العلمي للمركز",
    //     },
    //     subLabel: {
    //       fr: "Organisation Scientifique du Centre",
    //       en: "Scientific Organization of the Center",
    //       ar: "التنظيم العلمي للمركز",
    //     },
    //     href: "/presentation/scientific_organization",
    //   },
    //   // {
    //   //   label: {
    //   //     fr: "Personnels",
    //   //     en: "Staff",
    //   //     ar: "طاقم العمل",
    //   //   },
    //   //   subLabel: {
    //   //     fr: "Personnels",
    //   //     en: "Staff",
    //   //     ar: "طاقم العمل",
    //   //   },
    //   //   href: "/staff",
    //   // },
    // ],
  },
  {
    label: {
      fr: "Réseau Chercheurs",
      en: "Research Network",
      ar: "شبكة الباحثين",
    },
    href: "/researchteam",
  },
  {
    label: {
      fr: "Projets",
      en: "Projects",
      ar: "المشاريع",
    },
    children: [
      {
        label: {
          fr: "Projets Internationaux",
          en: "International Projects",
          ar: "الدولية المشاريع",
        },
        subLabel: {
          fr: "Projets Internationaux",
          en: "International Projects",
          ar: "الدولية المشاريع",
        },
        href: "/projects/international",
      },
      {
        label: {
          fr: "Projets Nationaux",
          en: "National Projects",
          ar: "الدولية المشاريع",
        },
        subLabel: {
          fr: "Projets Nationaux",
          en: "National Projects",
          ar: "الدولية المشاريع",
        },
        href: "/projects/national",
      },
    ],
  },
  {
    label: {
      fr: "Laboratoire de Recherche",
      en: "Research Laboratory",
      ar: "مختبر البحث",
    },
    children: [
      {
        label: {
          fr: "Thématiques de Recherches",
          en: "Research  Topics",
          ar: "مواضيع البحث",
        },
        subLabel: {
          fr: "Thématiques de Recherches",
          en: "Research Topics",
          ar: "مواضيع البحث",
        },
        href: "/research_topics",
      },
      {
        label: {
          fr: "Membres du Laboratoire",
          en: "Members of The Laboratory",
          ar: "أعضاء المختبر",
        },
        href: "/laboratory_members",
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
        href: "/scientificproductions",
      },
      {
        label: {
          fr: "Formation Diplômante",
          en: "Training Diploma",
          ar: "تدريب مؤهل",
        },
        subLabel: {
          fr: "Formation Diplômante",
          en: "Training Qualification",
          ar: "تدريب مؤهل",
        },
        href: "/diploma_course",
      },
    ],
  },
  {
    label: {
      fr: "Unités Spécialisées",
      en: "Specialized Units",
      ar: "فرق مختصة",
    },
    href: "/specialized_units",
  },
  {
    label: { fr: "Galerie", en: "Gallery", ar: "مكتبة الوسائط" },
    href: "/gallery/imgs",
  },

  {
    label: { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
    href: "/contact",
  },
  {
    label: { fr: "Voir Plus", en: "More", ar: "المزيد" },
    children: [
      {
        label: {
          fr: "Accés à l’information",
          en: "Open Data",
          ar: "النفاذ للمعلومة",
        },
        href: "/open_data",
      },
      {
        label: {
          fr: "Espace de téléchargement",
          en: "Download area",
          ar: "منطقة التحميل",
        },
        href: "/open_data",
      },
    ],
  },
];
