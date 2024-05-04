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
import Landing from "./pages/Landing.jsx";

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
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
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "/admin/addPage",
        element: <CreatePage />,
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
