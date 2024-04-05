import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.scss";
import { Box, Text } from "@chakra-ui/react";
import ThemeToggle from "./components/ThemeToggle";
// const Layout = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/products/:id",
//         element: <Products />,
//       },
//       {
//         path: "/product/:id",
//         element: <Product />,
//       },
//     ],
//   },
// ]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
