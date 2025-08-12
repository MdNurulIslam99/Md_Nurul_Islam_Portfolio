import React from "react";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import HeroSection from "../HeroSection/HeroSection";
import MySkills from "../MySkills/MySkills";
import MyServices from "../MyServices/MyServices";
import { ThemeProvider } from "../../contexts/ThemeContext";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
  return (
    <ThemeProvider>
      <div className="">
        <div className="mt-5 mb-2 max-w-screen-2xl mx-auto md:px-7 lg:px-16 px-2 md:py-1">
          <HeroSection></HeroSection>
        </div>

        <div className=" mb-10">
          <AboutMe></AboutMe>
        </div>
        <div className="mt-10 mb-10">
          <About></About>
        </div>

        <div className="mt-10 mb-10 max-w-screen-2xl mx-auto md:px-7 lg:px-16 px-2 md:py-1">
          <MySkills></MySkills>
        </div>

        <div className="mt-10 mb-10 max-w-screen-2xl mx-auto md:px-7 lg:px-16 px-2 md:py-1">
          <MyServices></MyServices>
        </div>

        <div className="mt-10 mb-10">
          <Projects></Projects>
        </div>

        <div className="mt-10 mb-10">
          <Contact></Contact>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
