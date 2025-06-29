import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import { ThemeProvider } from "../../contexts/ThemeContext";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const MainLayouts = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitch></ThemeSwitch>
      </div>
      <div className="font-poppins dark:bg-gray-900 dark:text-blue-500">
        <div>
          <Navbar></Navbar>
        </div>
        <div className=" min-h-[calc(100vh-54px)] pt-16">
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayouts;
