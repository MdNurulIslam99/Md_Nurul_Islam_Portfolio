import React from "react";
import { NavLink } from "react-router";
import nurul from "../../assets/nurul.jpeg";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import TypewriterText from "../TypewriterText/TypewriterText";

const HeroSection = () => {
  return (
    <div>
      <div className="hero bg-gray-200 rounded-2xl ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={nurul}
            className="max-w-sm rounded-full shadow-2xl p-2 bg-base-100 w-72 md:w-96 h-72 md:h-96"
          />
          <div>
            {/* <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mt-3">
              
            </h1> */}
            <div>
              <TypewriterText></TypewriterText>
            </div>
            <p className="py-4 text-lg">
              Hi, I'm <strong>Md Nurul Islam</strong>. I'm a dedicated Frontend
              Developer with hands-on experience in building responsive,
              user-friendly, and interactive web applications. My core skills
              lie in creating dynamic and responsive websites using modern
              frontend technologies. I focus on writing clean, efficient, and
              maintainable code. I enjoy turning ideas into real-world projects
              and continuously exploring new technologies to improve my craft.
            </p>
            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                <ul className=" px-1 fontMulish text-xl font-bold flex justify-center items-center gap-4 ">
                  <li className="p-2 bg-white  rounded-full">
                    <NavLink
                      className="text-blue-700"
                      to="https://www.facebook.com/"
                      target="_blank"
                    >
                      <FaFacebook size={35} />
                    </NavLink>
                  </li>

                  <li className="p-2 bg-white rounded-full">
                    <NavLink
                      className="text-black"
                      to="https://github.com/MdNurulIslam99"
                      target="_blank"
                    >
                      <FaGithub size={35} />
                    </NavLink>
                  </li>

                  {/* <li className="p-2 bg-white  rounded-full">
                    <NavLink
                      className="text-gray-200"
                      to="https://x.com/"
                      target="_blank"
                    >
                      <FaXTwitter size={35} />
                    </NavLink>
                  </li> */}

                  <li className="p-2 bg-white  rounded-full">
                    <NavLink
                      className="text-blue-700 "
                      to="https://www.linkedin.com/"
                      target="_blank"
                    >
                      <FaLinkedin size={35} />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink
              to="/"
              className="btn mt-5 mb-4 px-5 btn-active bg-[#0EA106] border-none rounded-xl text-white text-xl font-semibold"
            >
              Resume
              <span>
                <IoMdDownload size={20} />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
