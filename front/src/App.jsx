import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  ChakraProvider,
  ColorModeProvider,
  extendTheme,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
// import { lightTheme, darkTheme } from "./theme";
import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import Chat from "./pages/chat/Chat";
import Footer from "./components/footer/Footer.tsx";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import CreatePage from "./pages/page/createPage.jsx";
import Landing from "./pages/landing/Landing.jsx";
import ResearchTeam from "./pages/researchStructures/ResearchTeam.jsx";
import ScientificProductionsV1 from "./pages/researchStructures/scientificProductions/v1/ScientificProductions.jsx";
import ScientificProductionsV2 from "./pages/researchStructures/scientificProductions/v2/ScientificProductions.jsx";
import ImageGallery from "./pages/media/ImageGallery.jsx";
import AdminSideBar from "./components/adminSideBar/AdminSideBar.jsx";
import DashBoard from "./pages/admin/DashBoard.jsx";
import Create from "./pages/admin/Create.jsx";
import Actualities from "./pages/Actualities.jsx";
import Actuality from "./pages/Actuality.jsx";
import Map from "./pages/Map.jsx";
import History from "./pages/History.jsx";
import Missions from "./pages/Missions.jsx";
import ScientificOrganization from "./pages/ScientificOrganization.jsx";
import ResearchTopics from "./pages/ResearchTopics.jsx";
import DiplomaCourse from "./pages/DiplomaCourse.jsx";
import ResearchProjects from "./pages/ResearchProjects.jsx";
import Collabs from "./pages/Collabs.jsx";
import SpecializedUnits from "./pages/page/SpecializedUnits.jsx";
import ContactPage from "./pages/Contact.jsx";
import OpenData from "./pages/OpenData.jsx";

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
const LayoutAdmin = () => {
  return (
    <div className="app">
      <AdminSideBar />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/actualities",
        children: [
          {
            path: "/actualities",
            element: <Actualities />,
          },
          {
            path: "/actualities/:id",
            element: <Actuality />,
          },
        ],
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/researchteam",
        element: <ResearchTeam />,
      },
      {
        path: "/scientificproductions",
        element: <ScientificProductionsV2 />,
      },
      {
        path: "/research_topics",
        element: <ResearchTopics />,
      },
      {
        path: "/research_projects",
        element: <ResearchProjects />,
      },
      {
        path: "/diploma_course",
        element: <DiplomaCourse />,
      },
      {
        path: "/collabs",
        element: <Collabs />,
      },
      {
        path: "/specialized_units",
        element: <SpecializedUnits />,
      },
      ,
      {
        path: "/gallery/imgs",
        element: <ImageGallery />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/presentation",
        children: [
          {
            path: "/presentation/map",
            element: <Map />,
          },
          {
            path: "/presentation/history",
            element: <History />,
          },
          {
            path: "/presentation/missions",
            element: <Missions />,
          },
          {
            path: "/presentation/scientific_organization",
            element: <ScientificOrganization />,
          },
        ],
      },
      {
        path: "/open_data",
        element: <OpenData />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    children: [
      {
        path: "/admin",
        element: <DashBoard />,
      },
      {
        path: "/admin/research_team",
        element: <DashBoard />,
      },
      {
        path: "/admin/gallery",
        element: <DashBoard />,
      },
      {
        path: "/admin/stats",
        element: <DashBoard />,
      },
      {
        path: "/admin/scientific_council",
        element: <DashBoard />,
      },
      {
        path: "/admin/heads_of_rdi_structures",
        element: <DashBoard />,
      },
      {
        path: "/admin/representatives_of_researchers",
        element: <DashBoard />,
      },
      {
        path: "/admin/representative_of_IRESA",
        element: <DashBoard />,
      },
      {
        path: "/admin/representatives_of_agricultural_research_and_higher_education_establishments",
        element: <DashBoard />,
      },
      {
        path: "/admin/scientific_personalities_from_the_academic_and_scientific_research_world",
        element: <DashBoard />,
      },
      {
        path: "/admin/staff",
        element: <DashBoard />,
      },
      {
        path: "/admin/cvs",
        element: <DashBoard />,
      },
      {
        path: "/admin/scientific_productions",
        element: <DashBoard />,
      },
      {
        path: "/admin/actualities",
        element: <DashBoard />,
      },
      {
        path: "/admin/create/:name",
        element: <Create />,
      },
    ],
  },
]);
function App() {
  let usedTheme = useSelector((state) => state.colorMode.theme);
  let theme = extendTheme(usedTheme);
  // console.log(theme);
  return (
    <>
      <ColorModeProvider>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </ColorModeProvider>
    </>
  );
}

export default App;
