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
import { useEffect } from "react";
import Login from "./pages/auth/Login";

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
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  let usedTheme = useSelector((state) => state.colorMode.theme);
  let theme = extendTheme(usedTheme);
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
