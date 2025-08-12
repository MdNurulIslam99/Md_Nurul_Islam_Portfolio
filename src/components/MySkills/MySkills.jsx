import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiMui,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 size={52} className="text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={52} className="text-blue-500" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={52} className="text-purple-600" />,
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss size={52} className="text-sky-400" />,
  },
  {
    name: "DaisyUI",
    icon: <MdOutlineDesignServices size={52} className="text-purple-600" />,
  },

  {
    name: "Mamba UI",
    icon: <SiMui size={52} className="text-pink-500" />, // Change icon if needed
  },
  {
    name: "Javascript",
    icon: <SiJavascript size={52} className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <FaReact size={52} className="text-cyan-400" />,
  },
  {
    name: "Firebase Auth",
    icon: <SiFirebase size={52} className="text-yellow-400" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={52} className="text-green-500" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={52} className="text-yellow-700" />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb size={52} className="text-green-400" />,
  },
];

const MySkills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      mirror: false,
    });

    AOS.refresh();
  }, []);

  return (
    <div
      className="bg-gray-200 text-white rounded-2xl shadow-lg py-14 px-6 md:px-16 mb-10"
      id="skills"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl text-black font-bold mb-6 inline-block text-center w-full"
          data-aos="fade-right"
        >
          MY <span className="">SKILLS</span>
        </h2>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10"
          data-aos="fade-up"
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 flex flex-col items-center shadow-md hover:shadow-cyan-400/50 transition duration-500 ease-in-out"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {skill.icon}
              <p className="mt-3 text-lg text-black md:text-xl font-semibold">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
