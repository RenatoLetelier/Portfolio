import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/HomePage/HomePage.jsx";
import Projects from "../pages/ProjectsPage/ProjectsPage.jsx";
import Contact from "../pages/ContactPage/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
