import React from "react";
import { IoMdDownload } from "react-icons/io";
import { Link, NavLink } from "react-router";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black text-lg font-bold" : "text-white text-lg"
          }
          to="/"
        >
          <span className="text-xl font-bold">Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black text-lg font-bold" : "text-white text-lg"
          }
          to="/mySkills"
        >
          <span className="text-xl font-bold">My Skills</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black text-lg font-bold" : "text-white text-lg"
          }
          to="/service"
        >
          <span className="text-xl font-bold">Services</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black text-lg font-bold" : "text-white text-lg"
          }
          to="/projects"
        >
          <span className="text-xl font-bold">
            <span className="text-xl font-bold">Projects</span>
          </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black text-lg font-bold" : "text-white text-lg"
          }
          to="/aboutMe"
        >
          <span className="text-xl font-bold">About</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black text-lg font-bold" : "text-white text-lg"
          }
          to="/contact"
        >
          <span className="text-xl font-bold">
            <span className="text-xl font-bold">Contact</span>
          </span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0682a1] shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 xl:px-8 flex items-center justify-between h-16">
        {/*  CHANGED: Wrap the logo/menu group with reversed flex on mobile */}
        <div className="flex  lg:flex-row items-center gap-4">
          {/*  CHANGED: Mobile menu toggle comes first (left side on small screens) */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-2 shadow bg-[#0682a1] rounded-box w-52 text-white space-y-1"
            >
              {links}
            </ul>
          </div>
          {/*  CHANGED: Logo and project name come after menu icon on mobile */}
          <NavLink className="flex items-center gap-2" to="/">
            <img
              className="md:h-10 h-6 md:w-10 w-6 rounded-full "
              src="https://i.ibb.co/fzZSrP6Q/images.jpg"
              alt="logo"
            />
            <h1 className=" md:text-3xl text-xl font-bold">
              <strong>
                <span className="text-[#0EA5E9]">M</span>
                <span className="text-emerald-400">NI</span>
              </strong>
            </h1>
          </NavLink>
        </div>

        {/* Nav links for desktop only */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-5 font-semibold text-white">
            {links}
          </ul>
        </div>

        {/* Right side - theme + user or auth buttons */}
        <div className="flex items-center gap-8">
          {/* Resume Button - Downloads & Opens */}
          <div>
            <ThemeSwitch />
          </div>
          <div>
            <a
              href="/ResumeOfMdNurulIslam.pdf"
              download="Resume-of-Md-Nurul-Islam.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-5 mb-4 px-5 btn-active bg-emerald-600 border-none rounded-xl text-white text-xl font-semibold"
            >
              Resume
              <span>
                <IoMdDownload size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
