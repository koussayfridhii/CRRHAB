import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  ChakraProvider,
  ColorModeProvider,
  extendTheme,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./App.scss";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer.tsx";
import Spinner from "./components/spinner/Spinner.jsx";

const Chat = lazy(() => import("./pages/chat/Chat"));
const Login = lazy(() => import("./pages/auth/Login"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const Landing = lazy(() => import("./pages/landing/Landing.jsx"));
const ResearchTeam = lazy(() =>
  import("./pages/researchStructures/ResearchTeam.jsx")
);
const ScientificProductionsV1 = lazy(() =>
  import(
    "./pages/researchStructures/scientificProductions/v1/ScientificProductions.jsx"
  )
);
const ScientificProductionsV2 = lazy(() =>
  import(
    "./pages/researchStructures/scientificProductions/v3/ScientificProductions.jsx"
  )
);
const ImageGallery = lazy(() => import("./pages/media/ImageGallery.jsx"));
const DashBoard = lazy(() => import("./pages/admin/DashBoard.jsx"));
const Create = lazy(() => import("./pages/admin/Create.jsx"));
const Actualities = lazy(() => import("./pages/Actualities.jsx"));
const Actuality = lazy(() => import("./pages/Actuality.jsx"));
const Map = lazy(() => import("./pages/Map.jsx"));
const History = lazy(() => import("./pages/History.jsx"));
const Missions = lazy(() => import("./pages/Missions.jsx"));
const ScientificOrganization = lazy(() =>
  import("./pages/ScientificOrganization.jsx")
);
const ResearchTopics = lazy(() => import("./pages/ResearchTopics.jsx"));
const DiplomaCourse = lazy(() => import("./pages/DiplomaCourse.jsx"));
const ResearchProjects = lazy(() => import("./pages/ResearchProjects.jsx"));
const Collabs = lazy(() => import("./pages/Collabs.jsx"));
const SpecializedUnits = lazy(() =>
  import("./pages/page/SpecializedUnits.jsx")
);
const Presentation = lazy(() => import("./pages/Presentation.jsx"));
const ContactPage = lazy(() => import("./pages/Contact.jsx"));
const OpenData = lazy(() => import("./pages/OpenData.jsx"));
const Personnels = lazy(() => import("./pages/Content/Personnels.jsx"));
const AdminResearchTeam = lazy(() =>
  import("./pages/admin/adminResearchTeam/AdminResearchTeam.jsx")
);
const CreateResearchTeam = lazy(() =>
  import("./pages/admin/adminResearchTeam/CreateResearchTeam.jsx")
);
const AdminDiplomaCourses = lazy(() =>
  import("./pages/admin/diplomaCourses/AdminDiplomaCourses.jsx")
);
const CreateDiplomaCourse = lazy(() =>
  import("./pages/admin/diplomaCourses/CreateDiplomaCourse.jsx")
);
const AdminActualities = lazy(() =>
  import("./pages/admin/adminActualities/AdminActualities.jsx")
);
const CreateActualities = lazy(() =>
  import("./pages/admin/adminActualities/CreateActualities.jsx")
);
const AdminGallerie = lazy(() =>
  import("./pages/admin/adminGallerie/AdminGallerie.jsx")
);
const CreateGallery = lazy(() =>
  import("./pages/admin/adminGallerie/CreateGallerie.jsx")
);
const Projects = lazy(() => import("./pages/Projects.jsx"));
const NationalProjects = lazy(() => import("./pages/NationalProjects.jsx"));
const LaboResearchTeam = lazy(() => import("./pages/LaboResearchMembers.jsx"));
const LaboExecutiveMembers = lazy(() =>
  import("./pages/LaboExecutiveMembers.jsx")
);
const AdminScientificProductions = lazy(() =>
  import(
    "./pages/admin/adminScientificProductions/AdminScientificProductions.jsx"
  )
);
const CreateScientificProductions = lazy(() =>
  import(
    "./pages/admin/adminScientificProductions/CreateScientificProductions.jsx"
  )
);
const AdminEvents = lazy(() =>
  import("./pages/admin/adminEvents/AdminEvents.jsx")
);
const CreateEvents = lazy(() =>
  import("./pages/admin/adminEvents/CreateEvents.jsx")
);
const AdminLaboratoryMembers = lazy(() =>
  import("./pages/admin/adminLaboratoryMembers/AdminLaboratoryMembers.jsx")
);
const CreateLaboratoryMembers = lazy(() =>
  import("./pages/admin/adminLaboratoryMembers/CreateLaboratoryMembers.jsx")
);
const AdminNationalProjects = lazy(() =>
  import("./pages/admin/adminNationalProjects/AdminNationalProjects.jsx")
);
const CreateNationalProjects = lazy(() =>
  import("./pages/admin/adminNationalProjects/CreateNationalProjects.jsx")
);
const AdminVideos = lazy(() =>
  import("./pages/admin/adminVideo/AdminVideo.jsx")
);
const CreateVideos = lazy(() =>
  import("./pages/admin/adminVideo/CreateVideo.jsx")
);
const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
const LayoutAdmin = () => {
  return (
    <div className="app">
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
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
        path: "/laboratory_researchers",
        element: <LaboResearchTeam />,
      },
      {
        path: "/laboratory_members",
        element: <LaboExecutiveMembers />,
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
        element: <Presentation />,
        // children: [
        //   {
        //     path: "/presentation/map",
        //     element: <Map />,
        //   },
        //   {
        //     path: "/presentation/history",
        //     element: <History />,
        //   },
        //   {
        //     path: "/presentation/missions",
        //     element: <Missions />,
        //   },
        //   {
        //     path: "/presentation/scientific_organization",
        //     element: <ScientificOrganization />,
        //   },
        // ],
      },
      {
        path: "/open_data",
        element: <OpenData />,
      },
      {
        path: "/staff",
        element: <Personnels />,
      },
      {
        path: "/projects",
        children: [
          {
            path: "/projects/international",
            element: <Projects />,
          },
          {
            path: "/projects/national",
            element: <NationalProjects />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin",
        element: <DashBoard />,
      },
      {
        path: "/admin/research_team",
        element: <AdminResearchTeam />,
      },
      {
        path: "/admin/national_projects",
        element: <AdminNationalProjects />,
      },
      {
        path: "/admin/diploma_course",
        element: <AdminDiplomaCourses />,
      },
      {
        path: "/admin/events",
        element: <AdminEvents />,
      },
      {
        path: "/admin/videos",
        element: <AdminVideos />,
      },
      {
        path: "/admin/laboratory_members",
        element: <AdminLaboratoryMembers />,
      },
      {
        path: "/admin/gallery",
        element: <AdminGallerie />,
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
        path: "/admin/scientific_productions",
        element: <AdminScientificProductions />,
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
        element: <AdminActualities />,
      },
      {
        path: "/admin/create/",
        children: [
          {
            path: "/admin/create/research_team",
            element: <CreateResearchTeam />,
            children: [
              {
                path: "/admin/create/research_team/:id",
                element: <CreateResearchTeam />,
              },
            ],
          },
          {
            path: "/admin/create/events",
            element: <CreateEvents />,
            children: [
              {
                path: "/admin/create/events/:id",
                element: <CreateEvents />,
              },
            ],
          },
          {
            path: "/admin/create/diploma_course",
            element: <CreateDiplomaCourse />,
            children: [
              {
                path: "/admin/create/diploma_course/:id",
                element: <CreateDiplomaCourse />,
              },
            ],
          },
          {
            path: "/admin/create/national_projects",
            element: <CreateNationalProjects />,
            children: [
              {
                path: "/admin/create/national_projects/:id",
                element: <CreateNationalProjects />,
              },
            ],
          },
          {
            path: "/admin/create/scientific_productions",
            element: <CreateScientificProductions />,
            children: [
              {
                path: "/admin/create/scientific_productions/:id",
                element: <CreateScientificProductions />,
              },
            ],
          },
          {
            path: "/admin/create/laboratory_members",
            element: <CreateLaboratoryMembers />,
            children: [
              {
                path: "/admin/create/laboratory_members/:id",
                element: <CreateLaboratoryMembers />,
              },
            ],
          },
          {
            path: "/admin/create/actualities",
            element: <CreateActualities />,
            children: [
              {
                path: "/admin/create/actualities/:id",
                element: <CreateActualities />,
              },
            ],
          },
          {
            path: "/admin/create/videos",
            element: <CreateVideos />,
            children: [
              {
                path: "/admin/create/videos/:id",
                element: <CreateVideos />,
              },
            ],
          },
          {
            path: "/admin/create/gallery",
            element: <CreateGallery />,
            children: [
              {
                path: "/admin/create/gallery/:id",
                element: <CreateGallery />,
              },
            ],
          },
          {
            path: "/admin/create/stats",
            element: <DashBoard />,
          },
          {
            path: "/admin/create/scientific_council",
            element: <DashBoard />,
          },
          {
            path: "/admin/create/heads_of_rdi_structures",
            element: <DashBoard />,
          },
          {
            path: "/admin/create/representatives_of_researchers",
            element: <DashBoard />,
          },
          {
            path: "/admin/create/representative_of_IRESA",
            element: <DashBoard />,
          },
          {
            path: "/admin/create/representatives_of_agricultural_research_and_higher_education_establishments",
            element: <DashBoard />,
          },
          {
            path: "/admin/create/scientific_personalities_from_the_academic_and_scientific_research_world",
            element: <DashBoard />,
          },
          {
            path: "/admin/create/staff",
            element: <DashBoard />,
          },
          {
            path: "/admin/create/cvs",
            element: <DashBoard />,
          },
          {
            path: "/admin/create/scientific_productions",
            element: <DashBoard />,
          },
          {
            path: "/admin/create/actualities",
            element: <DashBoard />,
          },
        ],
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
