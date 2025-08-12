import React from "react";
import { IoMdDownload } from "react-icons/io";
import { Link, NavLink } from "react-router";

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
    <div className="navbar fixed p-0 bg-[#0682a1] z-50 shadow-sm mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img
            className="md:h-8 md:w-8 h-7 w-7  rounded-full"
            src="https://i.ibb.co/PvDd35h1/icon-1.png"
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
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* Resume Button - Downloads & Opens */}
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
  );
};

export default Navbar;
