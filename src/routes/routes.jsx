import { createBrowserRouter } from "react-router";
import MainLayouts from "../components/MainLayouts/MainLayouts";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import MySkills from "../components/MySkills/MySkills";
import MyServices from "../components/MyServices/MyServices";
import AboutMe from "../components/AboutMe/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/aboutMe",
        Component: AboutMe,
      },
      {
        path: "/mySkills",
        Component: MySkills,
      },
      {
        path: "/service",
        Component: MyServices,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/projectDetails/:id",
        Component: ProjectDetails,
      },
    ],
  },
]);
